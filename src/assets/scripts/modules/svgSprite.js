var $ = require('jquery');

var svgSprite = function () {

  $.ajax({
    type: 'get',
    // url: document.URL.match('/publish/') ? '../spfj/assets/images/svg/sprite.min.svg' : './assets/images/svg/sprite.min.svg'
    url: '../assets/images/svg/sprite.min.svg'
  }).done(function(data) {
    var svg = $(data).find('svg');
    $('body').prepend(svg);
  });

};

module.exports = svgSprite;
