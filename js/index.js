$(function(){
	$('#pT').click(function()
	{
		$('#practiceTeaching').show().siblings('div').hide();
		$(this).css('background','url(images/practiceTeaching_2.jpg) no-repeat');
		$('#aD').css('background','url(images/academicDynamic_1.jpg) no-repeat');
		$('#dN').css('background','url(images/departmentNews_1.jpg) no-repeat');
	}).click();;
	$('#aD').click(function()
    {
		$('#academicDynamic').show().siblings('div').hide();
		$(this).css('background','url(images/academicDynamic_2.jpg) no-repeat');
		$('#pT').css('background','url(images/practiceTeaching_1.jpg) no-repeat');
		$('#dN').css('background','url(images/departmentNews_1.jpg) no-repeat');
	});
	$('#dN').click(function()
	{
		$('#departmentNews').show().siblings('div').hide();
		$(this).css('background','url(images/departmentNews_2.jpg) no-repeat');
		$('#aD').css('background','url(images/academicDynamic_1.jpg) no-repeat');
		$('#pT').css('background','url(images/practiceTeaching_1.jpg) no-repeat');
	});
});
$(function(){
    $("#reduce").click(function(){
		var thisEle = $("#news_content p").css("font-size"); 
		var textFontSize = parseInt(thisEle , 10);
		var unit = thisEle.slice(-2); 
		if( textFontSize >12  )
		{
			textFontSize -= 1;
		}
		$("#news_content p").css("font-size",  textFontSize + unit);
		});
	$("#enlarge").click(function(){
		var thisEle = $("#news_content p").css("font-size"); 
		var textFontSize = parseInt(thisEle , 10);
		var unit = thisEle.slice(-2); 
		 if( textFontSize <15 )
		 {
			 textFontSize += 1;
		 }
		$("#news_content p").css("font-size",  textFontSize + unit);
		});
	});
$(function(){
	var $imgrolls = $("#schoolNews_roll_bottom a");
	$imgrolls.css("opacity","0.8");
    var len  = $imgrolls.length;
	var index = 0;
	var adTimer = null;
	$imgrolls.mouseover(function(){
		index = $imgrolls.index(this);
		showImg(index);
	}).eq(0).mouseover();
	$('#schoolNews_roll').hover(function(){
			if(adTimer){ 
				clearInterval(adTimer);
			}
		 },function(){
			adTimer = setInterval(function(){
			    showImg(index);
				index++;
				if(index==len){index=0;}
			} , 5000);
	}).trigger("mouseleave");
	function showImg(index){
	var $rollobj = $("#schoolNews_roll");
	var $rolllist = $rollobj.find("div a");
	var newhref = $rolllist.eq(index).attr("href");
	$("#imgWrap").attr("href",newhref)
			 .find("img").eq(index).stop(true,true).fadeIn(1000).siblings().fadeOut(1000);
	$rolllist.removeClass("chos").css("opacity","0.8")
			 .eq(index).addClass("chos").css("opacity","1"); 
	}
})
$(function(){
    var x = 10;  
	var y = 20;
	$('a').mouseover(function(e){
       	this.myTitle = this.title;
		this.title = "";	
	    var tooltip = "<div id='tooltip'>"+ this.myTitle +"</div>"; 
		$("body").append(tooltip);	
		$("#tooltip")
			.css({
				"top": (e.pageY+y) + "px",
				"left": (e.pageX+x)  + "px"
			}).show("fast");	  
    }).mouseout(function(){		
		this.title = this.myTitle;
		$("#tooltip").remove();   
    }).mousemove(function(e){
		$("#tooltip")
			.css({
				"top": (e.pageY+y) + "px",
				"left": (e.pageX+x)  + "px"
			});
	});
})
$(function()
{
	$('#videoNews .videoleft').find('img').hover(function()
	{
		$(this).css('opacity','0.6')
	},function(){
		$(this).css('opacity','1')	
	})
})
$(function(){
 $('a').focus(function(){this.blur();});
 SI.Files.stylizeAll();
 slider.init();


 $('input.text-default').each(function(){
  $(this).attr('default',$(this).val());
 }).focus(function(){
  if($(this).val()==$(this).attr('default'))
   $(this).val('');
 }).blur(function(){
  if($(this).val()=='')
   $(this).val($(this).attr('default'));
 });

 $('input.text,textarea.text').focus(function(){
  $(this).addClass('textfocus');
 }).blur(function(){
  $(this).removeClass('textfocus');
 });

 var popopenobj=0,popopenaobj=null;
 $('a.popup').click(function(){
  var pid=$(this).attr('rel').split('|')[0],_os=parseInt($(this).attr('rel').split('|')[1]);
  var pobj=$('#'+pid);
  if(!pobj.length)
   return false;
  if(typeof popopenobj=='object' && popopenobj.attr('id')!=pid){
   popopenobj.hide(50);
   $(popopenaobj).parent().removeClass(popopenobj.attr('id').split('-')[1]+'-open');
   popopenobj=null;
  }
  return false;
 });
 $('p.images img').click(function(){
  var newbg=$(this).attr('src').split('bg/bg')[1].split('-thumb')[0];
  $(document.body).css('backgroundImage','url(\'../images/bg/bg'+newbg+'.jpg)');
 
  $(this).parent().find('img').removeClass('on');
  $(this).addClass('on');
  return false;
 });
 
 $('div.sc-large div.img:has(div.tml)').each(function(){
  $('div.tml',this).hide();
  $(this).append('<a href="#" class="tml_open">&nbsp;</a>').find('a').css({
   left:parseInt($(this).offset().left)+864,top:parseInt($(this).offset().top)+1
  }).click(function(){
   $(this).siblings('div.tml').slideToggle();
   return false;
  }).focus(function(){this.blur();}); 
 });
});
var slider={
 num:-1,
 cur:0,
 cr:[],
 al:null,
 at:10*1000,
 ar:true,
 init:function(){
  if(!slider.data || !slider.data.length)
   return false;

  var d=slider.data;
  slider.num=d.length;
  var pos=Math.floor(Math.random()*1);
  for(var i=0;i<slider.num;i++){
   $('#'+d[i].id).css({left:((i-pos)*1000)});
   $('#slide-nav').append('<a id="slide-link-'+i+'" href="#" onclick="slider.slide('+i+');return false;" onfocus="this.blur();">'+(i+1)+'</a>');
  }

  $('img,div#slide-controls',$('div#slide-holder')).fadeIn();
  slider.text(d[pos]);
  slider.on(pos);
  slider.cur=pos;
  window.setTimeout('slider.auto();',slider.at);
 },
 auto:function(){
  if(!slider.ar)
   return false;

  var next=slider.cur+1;
  if(next>=slider.num) next=0;
  slider.slide(next);
 },
 slide:function(pos){
  if(pos<0 || pos>=slider.num || pos==slider.cur)
   return;

  window.clearTimeout(slider.al);
  slider.al=window.setTimeout('slider.auto();',slider.at);

  var d=slider.data;
  for(var i=0;i<slider.num;i++)
   $('#'+d[i].id).stop().animate({left:((i-pos)*1000)},1000,'swing');
  
  slider.on(pos);
  slider.text(d[pos]);
  slider.cur=pos;
 },
 on:function(pos){
  $('#slide-nav a').removeClass('on');
  $('#slide-nav a#slide-link-'+pos).addClass('on');
 },
 text:function(di){
  slider.cr['a']=di.client;
  slider.cr['b']=di.desc;
  slider.ticker('#slide-client span',di.client,0,'a');
  slider.ticker('#slide-desc',di.desc,0,'b');
 },
 ticker:function(el,text,pos,unique){
  if(slider.cr[unique]!=text)
   return false;

  ctext=text.substring(0,pos)+(pos%2?'-':'_');
  $(el).html(ctext);

  if(pos==text.length)
   $(el).html(text);
  else
   window.setTimeout('slider.ticker("'+el+'","'+text+'",'+(pos+1)+',"'+unique+'");',30);
 }
};
if(!window.SI){var SI={};};
SI.Files={
 htmlClass:'SI-FILES-STYLIZED',
 fileClass:'file',
 wrapClass:'cabinet',
 
 fini:false,
 able:false,
 init:function(){
  this.fini=true;
 },
 stylize:function(elem){
  if(!this.fini){this.init();};
  if(!this.able){return;};
  
  elem.parentNode.file=elem;
  elem.parentNode.onmousemove=function(e){
   if(typeof e=='undefined') e=window.event;
   if(typeof e.pageY=='undefined' &&  typeof e.clientX=='number' && document.documentElement){
    e.pageX=e.clientX+document.documentElement.scrollLeft;
    e.pageY=e.clientY+document.documentElement.scrollTop;
   };
   var ox=oy=0;
   var elem=this;
   if(elem.offsetParent){
    ox=elem.offsetLeft;
    oy=elem.offsetTop;
    while(elem=elem.offsetParent){
     ox+=elem.offsetLeft;
     oy+=elem.offsetTop;
    };
   };
  };
 },
 stylizeAll:function(){
  if(!this.fini){this.init();};
  if(!this.able){return;};
 }
};
