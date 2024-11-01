const openMenuBtn = document.querySelector('.menu-open-btn');
const closeMenuBtn = document.querySelector('.menu-close-btn');
const menuSection = document.querySelector('.section-mobile-menu');
const menuLinks = document.querySelectorAll('.menu-nav-list-link');
const menuWrap = document.querySelector('.mobile-menu-wrap');

export default function openMenu() {
  function toggleMenu() {
    if (menuSection.style.transform === 'translateY(0%)') {
      menuSection.style.transform = 'translateY(-100%)';
    } else {
      menuSection.style.transform = 'translateY(0%)';
    }
  }

  function closeMenu() {
    menuSection.style.transform = 'translateY(-100%)';
  }

  openMenuBtn.addEventListener('click', function (event) {
    toggleMenu();
    event.stopPropagation();
  });

  closeMenuBtn.addEventListener('click', function (event) {
    closeMenu();
    event.stopPropagation();
  });

  document.addEventListener('click', function (event) {
    if (
      menuSection.style.transform === 'translateY(0%)' &&
      !menuWrap.contains(event.target)
    ) {
      closeMenu();
    }
  });

  menuLinks.forEach(link => {
    link.addEventListener('click', function () {
      closeMenu();
    });
  });
}

document.addEventListener('DOMContentLoaded', openMenu);
