'use strict';

const toggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
const mobile = window.matchMedia('(max-width: 760px)');
function closeMenu() {
  toggle.setAttribute('aria-expanded', 'false');
  document.body.classList.remove('menu-open');
  navigation.hidden = mobile.matches;
}
toggle.hidden = false;
closeMenu();
mobile.addEventListener('change', closeMenu);
toggle.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') !== 'true';
  toggle.setAttribute('aria-expanded', String(open));
  navigation.hidden = !open;
  document.body.classList.toggle('menu-open', open);
});
navigation.addEventListener('click', event => {
  if (event.target.closest('a')) closeMenu();
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
    closeMenu(); toggle.focus();
  }
});
document.querySelector('#year').textContent = new Date().getFullYear();
