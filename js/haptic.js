function hapticTick() {
  const sw = document.createElement('input');
  sw.type = 'checkbox';
  sw.setAttribute('switch', '');
  sw.style.cssText = 'position:fixed;opacity:0;pointer-events:none;width:0;height:0;';
  document.body.appendChild(sw);
  sw.click();
  sw.remove();
}

document.querySelectorAll('.num-button, .operator-button, .special-button')
  .forEach(btn => {
    btn.addEventListener('pointerdown', () => {
      navigator.vibrate(15);
    });
  });

let lastTouchEnd = 0;
document.addEventListener('touchend', function(event) {
let now = new Date().getTime();
    if (now - lastTouchEnd <= 300) {
        event.preventDefault(); 
    }
    lastTouchEnd = now; 
}, false);