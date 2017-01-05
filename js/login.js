// JavaScript Document
$(function(){
	
	$('#manager_name').validatebox({
		required:true,
		missingMessage:'请输入管理员账号',
		invalidMessage:'用户名为长度2－4位的任意字符',
		validType:'length[2,4]',
	});
	$('#manager_password').validatebox({
		required:true,
		missingMessage:'请输入管理员密码',
		invalidMessage:'密码为长度6-12位的任何字符',
		validType:'length[6,12]',
	});
	$('#register a').click(function()
	{
		if(!$('#manager_name').validatebox('isValid') || $('#manager_name').val()!="张威" )
		{
			$('#manager_name').focus();
			alert('登录失败，请正确填写信息！')
			return false;
		}
		else if(!$('#manager_password').validatebox('isValid'))
		{
			$('#manager_password').focus();
			alert('登录失败，请正确填写信息！')
			return false;
		}
		else
		{
			alert('登录成功！')
		}	
	})
})