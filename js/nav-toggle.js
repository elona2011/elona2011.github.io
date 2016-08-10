$(document).ready(function () {
  $('.site-nav-toggle button').on('click', function () {
    var $siteNav = $('.site-nav');
    var ON_CLASS_NAME = 'site-nav-on';
    var isSiteNavOn = $siteNav.hasClass(ON_CLASS_NAME);
    var animateAction = isSiteNavOn ? 'slideUp' : 'slideDown';
    var animateCallback = isSiteNavOn ? 'removeClass' : 'addClass';

    $siteNav.stop()[animateAction]('fast', function () {
      $siteNav[animateCallback](ON_CLASS_NAME);
    });
  });
});

function scrollBg(){ 
  var offset = 1, scrollY = 0;

  return function (){ 
    window.scrollY < scrollY ? offset-- : offset++;
    scrollY = window.scrollY;
    $('#header').css('background-position', '0px -' + (window.scrollY / 15) + 'px');
    // $('#header').css('background-size', 100 + offset + '% auto');
  }
}

// document.addEventListener('scroll', scrollBg, false);

;(function() {
    var throttle = function(type, name, obj) {
        obj = obj || window;
        var running = false;
        var func = function() {
            if (running) { return; }
            running = true;
            requestAnimationFrame(function() {
                obj.dispatchEvent(new CustomEvent(name));
                running = false;
            });
        };
        obj.addEventListener(type, func);
    };

    /* init - you can init any event */
    throttle ("scroll", "optimizedScroll");
})();

// handle event
window.addEventListener("optimizedScroll", scrollBg());