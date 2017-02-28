"use strict";

// require
var $ = require('jquery');
var InsertSpanTag = require('./modules/insertspan');


// svg icon
$(function() {
  $.ajax({
    type: 'get',
    url: './assets/images/svg/sprite.min.svg'
  }).done(function(data) {
    var svg = $(data).find('svg');
    $('body').prepend(svg);
  });
});


// InsertSpanTag
var testId = document.getElementById('js-testId');
var insertSpan = new InsertSpanTag(testId, {
  margin: '10px',
  space: '20px'
});

