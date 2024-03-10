document.addEventListener('DOMContentLoaded', function () {
    var menuToggle = document.getElementById('toggleMenu');
    var menu = document.querySelector('.head-profil');
    var closeMenu = document.getElementById('closeMenu');

    if (menuToggle != null) {
        menuToggle.addEventListener('click', function (event) {
            // Inverser l'état du menu (ouvrir/fermer)
            event.stopPropagation();
            menu.classList.add('show');
            //menuToggle.style.display = 'none';
        });
        closeMenu.addEventListener('click', function (event) {
            // Inverser l'état du menu (ouvrir/fermer)
            event.stopPropagation();
            menu.classList.remove('show');
            //menuToggle.style.display = 'block';
        });
    }

    /* Chat box */
    const showChat = document.getElementById('showChat');
    if (showChat != null) {
        const closeChat = document.getElementById('closeChat');
        const chatView = document.getElementById('chatView');
        showChat.addEventListener('click', function (event) {
            event.stopPropagation();
            chatView.style.display = 'block';
        })
        closeChat.addEventListener('click', function (event) {
            event.stopPropagation();
            chatView.style.display = 'none';
        })
    }

    const showNotif = document.getElementById('showNotif');
    const viewNotif = document.getElementById('viewNotif');
    if (showNotif != null) {
        const closeNotif = document.getElementById('closeNotif');
        showNotif.addEventListener('click', function (event) {
            event.stopPropagation();
            viewMsg.style.display = 'none';
            viewNotif.style.display = 'block';
        })
        closeNotif.addEventListener('click', function (event) {
            event.stopPropagation();
            viewNotif.style.display = 'none';
        })
    }
    const showMsg = document.getElementById('showMsg');
    const viewMsg = document.getElementById('viewMsg');
    if (showMsg != null) {
        const closeMsg = document.getElementById('closeMsg');
        showMsg.addEventListener('click', function (event) {
            event.stopPropagation();
            viewNotif.style.display = 'none';
            viewMsg.style.display = 'block';
        })
        closeMsg.addEventListener('click', function (event) {
            event.stopPropagation();
            viewMsg.style.display = 'none';
        })
    }

    document.addEventListener('click', function (event) {
        var notifContent = document.getElementById('viewNotif');
        var isClickInsideNotif = notifContent.contains(event.target);

        if (!isClickInsideNotif) {
            notifContent.style.display = 'none';
        }

        var msgContent = document.getElementById('viewMsg');
        var isClickInsideMsg = msgContent.contains(event.target);

        if (!isClickInsideMsg) {
            msgContent.style.display = 'none';
        }
    })
})
function updateValue() {
    var value = document.getElementById("work-around").value;
    document.getElementById("rangeValue").innerHTML = value;
}