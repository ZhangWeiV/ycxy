// JavaScript Document
$(function(){
	$('#sidenav').tree({
		url:'nav.json',
		lines:true,
		onClick:function(node)
		{
			if(!node.id)
			{
				if(node.text=="管理员管理")
				{
					$('#gl').show();	
				}
				if(node.text=="会员管理")
				{
					$('#hl').show();	
				}
				if($('#tab').tabs('exists',node.text))
				{
					$('#tab').tabs('select',node.text)
				}
			}
			
		}
	})
	$('#manager').datagrid({
		url:'content.json',
		fit : true,
		fitColumns : true,
		striped : true,
		rownumbers : true,
		border : false,
		pagination : true,
		pageSize : 10,
		pageList : [10, 20, 30, 40, 50],
		pageNumber : 1,
		sortName : 'date',
		sortOrder : 'desc',
		toolbar : '#manager_tool',
		columns : [[
			{
				field : 'id',
				title : '自动编号',
				width : 100,
				checkbox : true,
			},
			{
				field : 'manager',
				title : '管理员帐号',
				width : 100,
			},
			{
				field : 'auth',
				title : '拥有权限',
				width : 100,
			},
			{
				field : 'date',
				title : '创建日期',
				width : 100,
			},
		]],
	});
	
	$('#manager_add').dialog({
		width : 350,
		height:500,
		title : '新增管理',
		modal : true,
		closed : true,
		iconCls : 'icon-user-add',
		buttons : [{
			text : '提交',
			iconCls : 'icon-add-new',
			handler : function () 
			{
				if(!$('#manager_num').validatebox('isValid'))
				{
					$('#manager_num').focus();
					alert('添加失败，请正确填写信息！')
				}
				else if(!$('#manager_pas').validatebox('isValid'))
				{
					$('#manager_pas').focus();
					alert('添加失败，请正确填写信息！')
				}
				else
				{
					$.messager.progress(
					{
						title:'正在提交!'
						
					}); 
					setInterval(function()
					{
						$.messager.progress('close');
						$('#manager_add').dialog('close',true);
					} , 3300);		
				}	
					
			}
		},
		{
			text : '取消',
			iconCls : 'icon-redo',
			handler : function () {
				$('#manager_add').dialog('close',true);
			},
			}],
       });
	
	//管理帐号
	$('input[name="manager"]').validatebox({
		required : true,
		validType : 'length[2,20]',
		missingMessage : '请输入管理名称',
		invalidMessage : '管理名称在 2-20 位',
	});
	
	//管理密码
	$('input[name="password"]').validatebox({
		required : true,
		validType : 'length[6,30]',
		missingMessage : '请输入管理密码',
		invalidMessage : '管理密码在 6-30 位',
	});
	
	//分配权限
	$('#auth').combotree({
		url : 'nav.json',
		required : true,
		lines : true,
		multiple : true,
		checkbox : true,
		onlyLeafCheck : true,
		onLoadSuccess : function (node, data) {
			var _this = this;
			if (data) {
				$(data).each(function (index, value) {
					if (this.state == 'closed') {
						$(_this).tree('expandAll');
					}
				});
			}
		},
	});
	 
     $('#add').click(function()
	 {
		$('#manager_add').dialog('open');
		$('input[name="manager"]').focus(); 
	 });
	
})