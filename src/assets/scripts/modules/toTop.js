var $ = require('jquery');

var toTop = function () {
  $('a[href^="#"]').on('click', function() {
    var speed = 800,
        href = $(this).attr('href'),
        target = $(href === '#' || href === '' ? 'html' : href),
        jump = $('[id^=jump-]').length,
        position = target.offset().top,
        width = window.innerWidth,
        val = jump ? position - 60 : position;//60はheaderの高さ
    if ( width >= 1000 ) {
      $('html, body').animate({ scrollTop: val }, speed, 'swing');
    } else {
      $('html, body').animate({ scrollTop: position }, speed, 'swing');
    }
    return false;
  });
};

module.exports = toTop;