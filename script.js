const html = document.querySelector('html');
const toggle = document.querySelector('#toggleBtn');
const hamburger = document.querySelector('#hamburger');
const closeMenu = document.querySelector('#btn-close-menu');
const menuMobile = document.querySelector('#menu-mobile');

toggle.addEventListener('click',() => html.classList.toggle('dark'));

hamburger.addEventListener('click',() => {
  menuMobile.classList.add('visible');
  menuMobile.classList.remove('hidden');
})

closeMenu.addEventListener('click',() => {
  menuMobile.classList.remove('visible');
  menuMobile.classList.add('hidden');
})
