export function initNavbar() {
  const navbar = document.querySelector('.navbar');

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  });
}
