const openMenuBtn = document.getElementById('navbar-open');
const closeMenuBtn = document.getElementById('navbar-close');

window.addEventListener('click', handleWindowClick);
openMenuBtn.addEventListener('click', handleMenu);
closeMenuBtn.addEventListener('click', handleMenu);

function handleMenu() {
  const navbar = document.getElementById('navbar');
  navbar.classList.toggle('show-menu');
}

function handleWindowClick(e) {
  const navbar = document.getElementById('navbar');
  if(!navbar.contains(e.target) && !openMenuBtn.contains(e.target)) {
    navbar.classList.remove('show-menu');
  }
}