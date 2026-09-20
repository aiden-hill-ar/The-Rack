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
      if (navigator.vibrate) {
        navigator.vibrate(15);
      } else {
        hapticTick();
      }
    });
  });