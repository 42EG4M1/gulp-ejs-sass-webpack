var $ = require('jquery');

var scrollAddClass = function () {

  var _window = $(window);
  var winH    = _window.height();
  var winTop  = _window.scrollTop();
  var wrap    = document.body;//('jswrapper');
  var header  = document.getElementById('js-header');

  if ( winTop > 100 ) {//winH / 4
    $(wrap).addClass( 'is-active' );
    $(header).addClass( 'is-fixed' );
  } else {
    $(wrap).removeClass( 'is-active' );
    $(header).removeClass( 'is-fixed' );
  }


  // if ( winTop >= 1 ) {
  //   $(header).addClass( 'is-fixed' );
  // } else {
  //   $(header).removeClass( 'is-fixed' );
  // }

};

module.exports = scrollAddClass;