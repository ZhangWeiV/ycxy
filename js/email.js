// JavaScript Document
$(function () {
	$('#myform :input').focus(function()
	{
		$(this).css('color','#333');
		$(this).addClass('focus');
		if($(this).val()==this.defaultValue)
		{
			$(this).val("");
			
		}
		if($(this).is('#passwordText'))
		{
			$('#passtext').hide();
			$('#passnum').show();
			$('#passwordNum').focus();
			
		}
		if($(this).is('#passwordText2'))
		{
			$('#passtext2').hide();
			$('#passnum2').show();
			$('#passwordNum2').focus();
			
		}
	}).blur(function()
	{
		$(this).parent().find('span').remove();
		var parent=$(this).parent();
		$(this).removeClass('focus');
		if($(this).val()=="")
		{
			$(this).val(this.defaultValue);
			$(this).css('color','#999999');
		}
		if($(this).is('#usersname'))
		{	
				if(this.value.length>16 ||  this.value.length<2 )
				{
					var error=$('<span class="error">用户名为长度2－16位的任意字符</span>')
					parent.append(error);
					
				}
				else if(this.value==this.defaultValue || this.value=="")
				{
					var error=$('<span class="error">用户名为长度2－16位的任意字符</span>')
					parent.append(error);
				}
				else
				{
					var right=$('<span class="right">输入正确</span>')
					parent.append(right);
					
				}
			
		}
		if($(this).is('#passwordNum'))
		{	
				if(this.value=="")
				{
					$('#passnum').hide();
					$('#passtext').show();
					var error=$('<span class="error">密码为长度6-16的任何字符</span>')
					$('#passtext').append(error);
			
				}
				else if(this.value.length<6 ||  this.value.length>16)
				{
					var error=$('<span class="error">密码为长度6-16的任何字符</span>')
					parent.append(error);
					
				}
				else
				{
					var right=$('<span class="right">输入正确</span>')
					parent.append(right);
					
				}
			
		}
		if($(this).is('#passwordNum2'))
		{	
			if(this.value=="")
			{
				$('#passnum2').hide();
				$('#passtext2').show();
				var error=$('<span class="error">密码为长度6-16的任何字符</span>')
				$('#passtext2').append(error);
				
			}
			else if(this.value.length<6 || this.value.length>16)
			{
				var error=$('<span class="error">密码为长度6-16的任何字符</span>')
				parent.append(error);
				
			}
			else if(this.value!=$('#passwordNum').val())
			{
				var error=$('<span class="error">两次密码不一致</span>')
				parent.append(error);
				
			}
			else
			{
				var right=$('<span class="right">输入正确</span>')
				parent.append(right);
				
			}
		}
		if($(this).is('#email'))
		{
				if(this.value=="" || ( this.value!="" && !/.+@.+\.[a-zA-Z]{2,4}$/.test(this.value)) )
				{
					var error=$('<span class="error">邮箱格式不正确</span>')
					parent.append(error);
					
				}
				else if(this.value==this.defaultValue)
				{
					var error=$('<span class="error">邮箱格式不正确</span>')
					parent.append(error);
				}
				else
				{
					var right=$('<span class="right">输入正确</span>')
					parent.append(right);
					
				}
		}
		if($(this).is('#phoneNumber'))
		{	
				if(this.value.length!=11 || isNaN($(this).val() || this.value==""))
				{
					var error=$('<span class="error">手机号码必须是11位数字</span>')
					parent.append(error);
							
				}
				else if(this.value==this.defaultValue)
				{
					var error=$('<span class="error">手机号码必须是11位数字</span>')
					parent.append(error);
				}
				else
				{
					var right=$('<span class="right">输入正确</span>')
					parent.append(right);
					
				}
		}			
	});
	$('#register').click(function()
	{
		$('#myform :input').trigger('blur');
		if($('.error').length)
		{
			alert("注册失败，请正确填写信息！");
			return false;
		}else
		{
			alert("恭喜你，注册成功！");
		}
	});
});
