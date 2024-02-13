document.addEventListener('DOMContentLoaded', function () {
  var menuToggle = document.getElementById('toggle-menu');
  var menu = document.querySelector('.header .menu-nav');
  var closeMenu = document.getElementById('close-menu');

  if (menuToggle != null) {
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
  }

  var btnTalent = document.getElementById('talent');
  var btnBusiness = document.getElementById('business');

  if (btnTalent != null || btnBusiness != null) {
    btnTalent.addEventListener('click', function (event) {
      event.stopPropagation();
      btnBusiness.classList.remove('active');
      btnTalent.classList.add('active');
      var showTalent = document.getElementById('for-talent');
      var showBusiness = document.getElementById('for-business');
      showBusiness.classList.remove('active');
      showTalent.classList.add('active');
    });
    btnBusiness.addEventListener('click', function (event) {
      event.stopPropagation();
      btnTalent.classList.remove('active');
      btnBusiness.classList.add('active');
      var showTalent = document.getElementById('for-talent');
      var showBusiness = document.getElementById('for-business');
      showTalent.classList.remove('active');
      showBusiness.classList.add('active');
    });
  }

});


document.addEventListener('scroll', function() {
  var navbar = document.getElementById('topBar');
  
  if (window.scrollY > 100) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
});

const dragContainer = document.getElementById('drag-container');

if (dragContainer != null) {
  const draggableElement = document.getElementById('draggable-element');
  const fileInput = document.getElementById('fileInputCv');
  const myForm = document.getElementById('matchingForm');

  dragContainer.addEventListener('dragover', (e) => {
    e.preventDefault();
    dragContainer.classList.add('drag-over');
    const fileNameText = document.getElementById('file-name-text');
    fileNameText.textContent = 'Déposer votre Cv';
  });

  dragContainer.addEventListener('dragleave', () => {
    dragContainer.classList.remove('drag-over');
    const fileNameText = document.getElementById('file-name-text');
    fileNameText.textContent = 'Ajoutez votre cv on s\'occupe du reste';
  });

  dragContainer.addEventListener('drop', (e) => {
    e.preventDefault();
    dragContainer.classList.remove('drag-over');
    const files = e.dataTransfer.files || fileInput.files;
    handleFiles(files);
  });

  fileInput.addEventListener('change', (e) => {
    const files = e.target.files;
    handleFiles(files);
  });

  myForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Ajoutez ici la logique de soumission du formulaire si nécessaire
    alert('Form submitted!');
  });

  function handleFiles(files) {
    const spinner = document.getElementById('spinner');
    const fileNameText = document.getElementById('file-name-text');
  
    if (files.length > 0) {
      const file = files[0];
      if (file.type === 'application/pdf') {
        const fileName = file.name;
  
        // Affiche le spinner pendant le traitement
        spinner.style.display = 'inline-block';
        fileNameText.style.display = 'none';
  
        // Simulation d'un délai (remplacez cela par votre logique réelle)
        setTimeout(() => {
          // Affiche le nom du fichier et cache le spinner une fois le traitement terminé
          fileNameText.textContent = `PDF File: ${fileName}`;
          spinner.style.display = 'none';
          fileNameText.style.display = 'inline-block';
        }, 2000); // Remplacez 2000 par la durée réelle de votre traitement
      } else {
        alert('Veuillez sélectionner un fichier PDF.');
      }
    }
  }
  
}