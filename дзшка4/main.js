document.addEventListener("mousemove", function(event) {
    document.body.textContent = `X: ${event.clientX}, Y: ${event.clientY}`;
});