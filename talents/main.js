document.addEventListener('DOMContentLoaded', function () {
    var menuToggle = document.getElementById('toggleMenu');
    var menu = document.querySelector('.head-profil');
    var closeMenu = document.getElementById('closeMenu');

    if (menuToggle != null) {
        menuToggle.addEventListener('click', function (event) {
            // Inverser l'état du menu (ouvrir/fermer)
            event.stopPropagation();
            menu.classList.add('show');
            menuToggle.style.display ='none';
        });
        closeMenu.addEventListener('click', function (event) {
            // Inverser l'état du menu (ouvrir/fermer)
            event.stopPropagation();
            menu.classList.remove('show');
            menuToggle.style.display ='block';
        });
    }
})