document.addEventListener('DOMContentLoaded', function () {
  var menuToggle = document.getElementById('toggle-menu');
  var menu = document.querySelector('.header .menu-nav');
  var closeMenu = document.getElementById('close-menu');

  menuToggle.addEventListener('click', function (event) {
    // Inverser l'état du menu (ouvrir/fermer)
    event.stopPropagation();
    menu.classList.add('show');
    setTimeout(function () {
      menu.classList.add('open');
    }, 1);
    clearTimeout();  // Utilisez clearTimeout au lieu de clearInterval
  });

  closeMenu.addEventListener('click', function (event) {
    // Inverser l'état du menu (ouvrir/fermer)
    event.stopPropagation();
    menu.classList.remove('open');
    setTimeout(function () {
      menu.classList.remove('show');
    }, 1000);
    clearTimeout();
  });

  // Fermer le menu lorsqu'on clique en dehors de la zone du menu
  document.addEventListener('click', function (event) {
    var menuContent = document.querySelector('.menu-nav-content');
    var isClickInsideMenu = menuContent.contains(event.target);
    var isClickOnToggle = event.target === menuToggle;

    if (!isClickInsideMenu && !isClickOnToggle) {
      menu.classList.remove('open');
      setTimeout(function () {
        menu.classList.remove('show');
      }, 1);
      clearTimeout();
    }
  });
});


document.addEventListener('scroll', function() {
  var navbar = document.getElementById('topBar');
  
  if (window.scrollY > 100) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
});
