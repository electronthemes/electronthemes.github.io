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
