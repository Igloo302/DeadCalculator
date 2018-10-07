$(document).ready(function(){
  $(window).resize(function(){
    renderM();
  });
  renderM();
  
  
  
  
  //限制文本框为正整数和0
  $("body").on("propertychange input", ":text[pi]",
  function() {
      $(this).val($(this).val().replace(/[^\d]/g, ''));
      $(this).css("ime-mode", "disabled");
  });
  //限制文本框为正数和0
  $("body").on("propertychange input", ":text[p]",
  function() {
      $(this).val($(this).val().replace(/[^\d.]/g, ''));
      $(this).css("ime-mode", "disabled");
  });
  //限制文本框为数字,正数,负数,小数
  $("body").on("propertychange input", ":text[ps]",
  function() {
      $(this).val($(this).val().replace(/[^\- \d.]/g, ''));
      $(this).css("ime-mode", "disabled");
  });
    
  //日期选择器
  $('[jd]').datetimepicker({
      format: 'yyyy-mm-dd',
      language: 'zh-CN',
      weekStart: 1,
      todayBtn: 1,
      autoclose: 1,
      todayHighlight: 1,
      startView: 2,
      minView: 2,
      forceParse: 0
  });
  $('[jd],[jt],[jdt]').next().click(function(){
    $(this).prev().focus();
  });
  //时间选择器
  $('[jt]').datetimepicker({
      format: 'hh:ii',
      language: 'zh-CN',
      weekStart: 1,
      todayBtn: 1,
      autoclose: 1,
      todayHighlight: 1,
      startView: 2,
      minView: 2,
      forceParse: 0
  });
  //日期时间选择器
  $('[jdt]').datetimepicker({
      format: 'yyyy-mm-dd hh:ii',
      language: 'zh-CN',
      weekStart: 1,
      todayBtn: 1,
      autoclose: 1,
      todayHighlight: 1,
      startView: 2,
      minView: 2,
      forceParse: 0
  });
  //IP输入框校验
  $(".ipinput").on("propertychange input", ":text",
  function() {
      $(this).val($(this).val().replace(/[^\d]/g, ''));
      if ($(this).val()>255){$(this).val("0");}
      $(this).css("ime-mode", "disabled");
  });

    //点击计算按钮后进行是否填写的校验
  $("body").on("click", "#main input[c]",function() {
    $('#jieguo').hide();
    var error=0;
    $("#tianxie [m]:enabled:visible").each(function() {
        if ($(this).val() == "") {
          var m=$(this).attr('m')||$(this).prev('.e:first').html();
          if ($(this).is('select')){
            ititle="请选择“"+m+"”";
          }else{
            ititle="请输入“"+m+"”";
          }
          error++;
          pushtip(ititle,this);
          return false;
        }
    });
    
    if(error==0){
      $(this).attr("disabled",true); 
      var thisbtn=this;
      $('#jieguo').fadeIn('slow');
      eval($(thisbtn).attr("on"));
      $(thisbtn).attr("disabled",false);
    } 

  });
  
  //如果此计算已经被加入收藏，则给星星加上颜色
  if(store.has('fa'+$('#lead').attr('rel'))){
    $('#favorite').addClass('active');
  }
  
  //加入取消收藏
  $("#favorite").click(function(){
    var id=$('#lead').attr('rel');
    if(!($(this).hasClass('active'))){
      var title=$('#title').html();
      var jieshao=$('#memo').html();
      var enid=$('#lead').attr('enid');
      var item={};
      item.title=title;
      item.jieshao=jieshao;
      item.enid=enid;
      item.id=id;
      item=JSON.stringify(item);
      store.set('fa'+id,item);
      $(this).addClass('active');
    }else{
      $(this).removeClass('active');
      store.set('fa'+id);
    }
  });

});

//提示函数
function pushtip(text,target){
  $('#jieguo').hide();
  $('#message').remove();
  $(target).trigger('focus');
  $('body').append('<div id="message">'+text+'</div>');
  $('#message').fadeIn('slow').delay(1500).fadeOut('slow',function(){$('#message').remove();});
}

var renderM=function(){
  //处理填写
  var width=parseInt($('#main').width());
  $('.r1,.r2,.r3,.r4').each(function(){
    var all_width=$(this).width();//总宽度
    var fix_width=0;//初始化需要扣除的宽度
    var fix_element=$(this).find('.e,.u');
    fix_element.each(function(){
      fix_width+=parseInt($(this).css('width'))+1;
    });
    var less=all_width-fix_width; //扣除元素的宽度
    var other_element_a=$(this).find('.k[per]'); //处理定义了宽度的元素
    var fix_per=0;
    other_element_a.each(function(){
      $(this).css('width',(less*$(this).attr('per')/100)+'px');
      fix_per+=parseInt($(this).attr('per'));
      less2=less-parseInt($(this).css('width'));
    });
    var other_element_b=$(this).find('.k:not([per])'); //处理没有定义宽度的元素
    var less_per=100-fix_per;
    other_element_b.each(function(){
      $(this).css('width',(less*(less_per/other_element_b.length)/100)+'px');
      less2=less-parseInt($(this).css('width'));
    });
    if($(this).find('.m').length>0){
      $(this).css('margin-bottom','20px');
    }
  });
  //处理计算结果
  $('.s1,.s2,.s3,.s4').each(function(){
    var all_width=$(this).width();//总宽度
    var fix_width=0;//初始化需要扣除的宽度
    var fix_element=$(this).find('.e,.u');
    fix_element.each(function(){
      fix_width+=parseInt($(this).css('width'))+1;
    });
    var less=all_width-fix_width; //扣除元素的宽度
    $(this).find('.z').css('width',less+'px');
  });
  //处理placeholder
  $('#main').find('input[type=number]').each(function(){
    if(!$(this).attr('placeholder')){
      $(this).attr('placeholder','请填写');
    }
  });
  //实现文本框点击全选
  $('#main').find('input[type=number]').focus(function(){
    //$(this).select();
  });
  $('#main').find('input[type=number]').mouseup(function(e){
    e.preventDefault();
  });
  //$('#jieguo').hide();
  $('#main').css('visibility','visible');
}

//HTML转义
function HTMLEnCode(str) {
  var s = "";
  if (str.length == 0) return "";
  s = str.replace(/&/g, "&amp;");
  s = s.replace(/</g, "&lt;");
  s = s.replace(/>/g, "&gt;");
  s = s.replace(/    /g, "&nbsp;");
  s = s.replace(/\'/g, "'");
  s = s.replace(/\"/g, "&quot;");
  s = s.replace(/\n/g, "<br>");
  return s;
}

setInterval('renderM();',1000);
