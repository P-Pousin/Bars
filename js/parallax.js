(function (window) {
  'use strict';

  // requestAnimationFrame polyfill
  // http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/
  window.requestAnimFrame = (function () {
    return window.requestAnimationFrame  ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame    ||
      function (callback) {
        window.setTimeout(callback, 1000 / 60);
      };
  }());

  var $cover = $('.focus-header'),
    coverHeight = $cover.height(),
    scrollPos = 0,
    parallaxThreshold = 2;

  function parallax() {
    if (window.scrollY < coverHeight) {
      scrollPos = Math.round(window.scrollY / parallaxThreshold);
      $cover.css({
        transform: 'translate3d(0, ' + scrollPos + 'px, 0)'
      });
    }
  }

  window.addEventListener('scroll', function () {
    window.requestAnimFrame(parallax);
  }, false);

  window.requestAnimFrame(parallax);

}(this));