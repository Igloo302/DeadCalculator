$(document).ready(function(){
  //展开关闭分类选择层
  $("#right").click(function(){
    $('#mask').fadeIn('fast');
    $('html,body').addClass('ovfHiden');
    $("#classify").css({width:'200px'});
  });
  $("#classify_close,#mask").click(function(){
    $('#mask').fadeOut('fast');
    $('html,body').removeClass('ovfHiden'); 
    $("#classify").css({width:'0px'});
  });

  //点击搜索
  $("#search_btn").click(function(){
    var key=$('#search_text').val().trim();
    if(key==''){
      return false;
    }
    window.location.href='index.php?a=search&kw='+key; 
  });
  //回车搜索
  $('#search_text').keydown(function(e){
    var key=$('#search_text').val().trim();
    if(e.keyCode == 13){
    if(key==''){
      return false;
    }
    window.location.href='index.php?a=search&kw='+key; 
    }
  });
  
  
  //记录定制是否已经被阅读
  $("#custom").click(function(){
    window.location.href='custom.html'; 
  });
  $("#custom_close").click(function(){
    store.set('custom',1);
    $('#custom').hide();
    return false;
  });
  
  //用来处理固定底部条
  footerPosition();
  $(window).resize(footerPosition);
  
  //处理微信情况下的动作
  isWeiXin();
  
  //处理定制计算器留言
  if(store.get('custom')!=1){
    $('#custom').show();
    $('#custom').animate({width:'245px'},'3000');
  }
  
});


//用来固定底部条，可能有bug
function footerPosition(){
  $("#footer").removeClass("fixed-bottom");
  var contentHeight = document.body.scrollHeight,//网页正文全文高度
    winHeight = window.innerHeight;//可视窗口高度，不包括浏览器顶部工具栏
  if(!(contentHeight > winHeight)){
    //当网页正文高度小于可视窗口高度时，为footer添加类fixed-bottom
    $("#footer").addClass("fixed-bottom");
  } else {
    $("#footer").removeClass("fixed-bottom");
  }
}

//判断是否为微信访问
function isWeiXin(){
  var ua = window.navigator.userAgent.toLowerCase();
  if(ua.match(/MicroMessenger/i) == 'micromessenger'){
    //$('#header').hide('fast');
    return true;
  }else{
    return false;
  }
}

//用来返回顶部的处理
/* 
$(document).ready(function($) {
  $("<div id='toTop' class='iconfont icon-gotop'></div>").appendTo('body');
  $("#toTop").css({
    width: '45px',
    height: '45px',
    bottom: '20px',
    right: '10px',
    position: 'fixed',
    cursor: 'pointer',
    zIndex: '999999',
  });
  if ($(this).scrollTop() < 50) {
    $("#toTop").fadeOut();
  }
  $(window).scroll(function(event) {
    /* Act on the event */
    if ($(this).scrollTop() < 50) {
      $("#toTop").fadeOut();
    }
    if ($(this).scrollTop() > 50) {
      $("#toTop").fadeIn();
    }
  });
  $("#toTop").click(function(event) {
    /* Act on the event */
    $("html,body").animate({
      scrollTop: "0px"
    },
    666)
  });*/

  //移动端模拟hover事件
  $(document).on('touchstart touchmove','.list .item,#classify ul>li,#main #jisuan .b,#main #tianxie .r1,.r2,.r3,.r4,#subcat li',function (e){
    $('.list .item,#classify ul>li,#main #jisuan .b,#main #tianxie .r1,.r2,.r3,.r4,#subcat li').removeClass('hover');
    $(this).addClass('hover');
  });
  $(document).on('touchend','.list .item,#classify ul>li,#main #jisuan .b,#main #tianxie .r1,.r2,.r3,.r4,#subcat li',function (e){
    $(this).removeClass('hover');
  });
});


//本地存储插件
/* Copyright (c) 2010-2016 Marcus Westin */
(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.store = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
module.exports=function(){function e(){try{return o in n&&n[o]}catch(e){return!1}}var t,r={},n="undefined"!=typeof window?window:global,i=n.document,o="localStorage",a="script";if(r.disabled=!1,r.version="1.3.20",r.set=function(e,t){},r.get=function(e,t){},r.has=function(e){return void 0!==r.get(e)},r.remove=function(e){},r.clear=function(){},r.transact=function(e,t,n){null==n&&(n=t,t=null),null==t&&(t={});var i=r.get(e,t);n(i),r.set(e,i)},r.getAll=function(){},r.forEach=function(){},r.serialize=function(e){return JSON.stringify(e)},r.deserialize=function(e){if("string"==typeof e)try{return JSON.parse(e)}catch(t){return e||void 0}},e())t=n[o],r.set=function(e,n){return void 0===n?r.remove(e):(t.setItem(e,r.serialize(n)),n)},r.get=function(e,n){var i=r.deserialize(t.getItem(e));return void 0===i?n:i},r.remove=function(e){t.removeItem(e)},r.clear=function(){t.clear()},r.getAll=function(){var e={};return r.forEach(function(t,r){e[t]=r}),e},r.forEach=function(e){for(var n=0;n<t.length;n++){var i=t.key(n);e(i,r.get(i))}};else if(i&&i.documentElement.addBehavior){var c,u;try{u=new ActiveXObject("htmlfile"),u.open(),u.write("<"+a+">document.w=window</"+a+'><iframe src="/favicon.ico"></iframe>'),u.close(),c=u.w.frames[0].document,t=c.createElement("div")}catch(l){t=i.createElement("div"),c=i.body}var f=function(e){return function(){var n=Array.prototype.slice.call(arguments,0);n.unshift(t),c.appendChild(t),t.addBehavior("#default#userData"),t.load(o);var i=e.apply(r,n);return c.removeChild(t),i}},d=new RegExp("[!\"#$%&'()*+,/\\\\:;<=>?@[\\]^`{|}~]","g"),s=function(e){return e.replace(/^d/,"___$&").replace(d,"___")};r.set=f(function(e,t,n){return t=s(t),void 0===n?r.remove(t):(e.setAttribute(t,r.serialize(n)),e.save(o),n)}),r.get=f(function(e,t,n){t=s(t);var i=r.deserialize(e.getAttribute(t));return void 0===i?n:i}),r.remove=f(function(e,t){t=s(t),e.removeAttribute(t),e.save(o)}),r.clear=f(function(e){var t=e.XMLDocument.documentElement.attributes;e.load(o);for(var r=t.length-1;r>=0;r--)e.removeAttribute(t[r].name);e.save(o)}),r.getAll=function(e){var t={};return r.forEach(function(e,r){t[e]=r}),t},r.forEach=f(function(e,t){for(var n,i=e.XMLDocument.documentElement.attributes,o=0;n=i[o];++o)t(n.name,r.deserialize(e.getAttribute(n.name)))})}try{var v="__storejs__";r.set(v,v),r.get(v)!=v&&(r.disabled=!0),r.remove(v)}catch(l){r.disabled=!0}return r.enabled=!r.disabled,r}();
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}]},{},[1])(1)
});