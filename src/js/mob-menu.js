const openMenuBtn = document.querySelector('.menu-open-btn');
const closeMenuBtn = document.querySelector('.menu-close-btn');
const menuSection = document.querySelector('.section-mobile-menu');
const menuLinks = document.querySelectorAll('.menu-nav-list-link');

export default function openMenu() {
  function openMenu() {
    menuSection.classList.add('menu-open');
  }

  function closeMenu() {
    menuSection.classList.remove('menu-open');
  }

  openMenuBtn.addEventListener('click', event => {
    openMenu();
    event.stopPropagation();
  });

  closeMenuBtn.addEventListener('click', event => {
    closeMenu();
    event.stopPropagation();
  });

  document.addEventListener('click', event => {
    if (
      menuSection.classList.contains('menu-open') &&
      !menuSection.contains(event.target)
    ) {
      closeMenu();
    }
  });

  menuLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });
}

document.addEventListener('DOMContentLoaded', openMenu);
