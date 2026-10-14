'use strict';
(() => {
  const mount = document.getElementById('solver-cube');
  if (!mount || typeof drawCube !== 'function') return;
  const size = window.matchMedia('(max-width: 760px)').matches ? '130px' : '180px';
  try {
    mount.replaceChildren();
    drawCube('solver-cube', false, size);
  } catch (error) {
    console.error('No se pudo dibujar el cubo 3D:', error);
    mount.textContent = 'Solver Hub';
  }
})();
