"use strict";


// require
var Swiper         = require('swiper');
var $              = require('jquery');
var InsertSpanTag  = require('./modules/insertspan');
var svgSprite      = require('./modules/svgSprite');
var scrollAddClass = require('./modules/scrollAddClass');
var toTop          = require('./modules/toTop');


// swiper
var swiper = new Swiper('.swiper-container', {
  pagination: '.swiper-pagination',
  nextButton: '.swiper-button-next',
  prevButton: '.swiper-button-prev',
  paginationClickable: true,
  loop: true,
  slidesPerView: 'auto',// autoにすることでループのラグがなくなる
  autoplay: 3000,
  autoplayDisableOnInteraction: false,
  speed: 1000
});


// InsertSpanTag
var testId = document.getElementById('js-testId');
var insertSpan = new InsertSpanTag(testId, {
  margin: '10px',
  space: '20px'
});


// jquery
$(function() {

  var _window = $(window);

  _window.on({
    load: function () {
      scrollAddClass();
    },
    scroll: function () {
      scrollAddClass();
    }
  });

  toTop();
  svgSprite();

});
