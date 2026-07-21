const navLinks = document.querySelectorAll('.nav-link');
const pageLinks = document.querySelectorAll('[data-page]');
const pages = document.querySelectorAll('.page');

pageLinks.forEach(function (link) {
  link.addEventListener('click', function (event) {
    event.preventDefault();

    const targetPageId = link.getAttribute('data-page');

    navLinks.forEach(function (l) {
      l.classList.remove('active');
      if (l.getAttribute('data-page') === targetPageId) {
        l.classList.add('active');
      }
    });

    pages.forEach(function (page) {
      page.classList.remove('active-page');
    });
    document.getElementById(targetPageId).classList.add('active-page');

    window.scrollTo(0, 0);
  });
});
