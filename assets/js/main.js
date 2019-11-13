// Code highlightBlock
var activateHighlight = function() {
    document
        .querySelectorAll('pre code')
        .forEach(function(currentValue, currentIndex, listObj) {
            hljs.highlightBlock(currentValue)
        })
}
if (window.attachEvent) {
    window.attachEvent('onload', loadHighlight)
} else {
    if (window.onload) {
        var originalOnload = window.onload
        var newOnload = function(evt) {
            originalOnload(evt)
            activateHighlight(evt)
        }
        window.onload = newOnload
    } else {
        window.onload = activateHighlight
    }
}



/**
 * AnchorJs
 */
var selector = `
        .doc-content-area h1, 
        .doc-content-area h2, 
        .doc-content-area h3
    `
anchors.options = {
    placement: 'left',
    class: 'bb-anchor',
}
anchors.add(selector)

/**
 * Medium Zoom
 */
const images = [...document.querySelectorAll('.doc-content-area img')]
mediumZoom(images)


$(document).ready(function(){
    $('.doc-nav a, .anchorjs-link').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top - 90
            }, 1000); // The number here represents the speed of the scroll in milliseconds
            return false;
          }
        }
      });
})