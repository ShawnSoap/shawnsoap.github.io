var pattern = Trianglify({
    width: window.innerWidth,
    height: window.innerHeight
});
document.body.style.backgroundImage = 'url(' + pattern.png() + ')';