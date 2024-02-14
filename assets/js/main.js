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


document.addEventListener('scroll', function () {
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

        // Simulation d'un délai
        setTimeout(() => {
          // Affiche le nom du fichier et cache le spinner une fois le traitement terminé
          fileNameText.textContent = `PDF File: ${fileName}`;
          spinner.style.display = 'none';
          fileNameText.style.display = 'inline-block';
        }, 2000); // La durée réelle de votre traitement
        //Redirection vers la page matching
        setTimeout(() => {
          myForm.submit();
        }, 3000);
      } else {
        alert('Veuillez sélectionner un fichier PDF.');
      }
    }
  }

}

document.addEventListener('DOMContentLoaded', function () {
  const addSkillBtn = document.getElementById('addSkillBtn');

  if (addSkillBtn != null) {
    const listSkills = document.getElementById('listSkills');
    const addSkillText = document.getElementById('addSkillText');

    addSkillBtn.addEventListener('click', function () {
      const taskText = addSkillText.value.trim();

      if (taskText !== '') {
        addTask(taskText);
        addSkillText.value = '';
      }
    });


    addSkillText.addEventListener('keypress', function (event) {
      if (event.key === 'Enter') {
        const taskText = addSkillText.value.trim();

        if (taskText !== '') {
          addTask(taskText);
          addSkillText.value = '';
        }
      }
    });

    function addTask(text) {
      const taskItem = document.createElement('li');
      taskItem.className = '';
      taskItem.innerHTML = `
        <span>${text}</span><button class="deleteSkillBtn"><i class="fa-solid fa-xmark"></i></button>
      `;

      // Ajout de l'écouteur d'événement click au nouveau bouton de suppression
      const newDeleteTaskButton = taskItem.querySelector('.deleteSkillBtn');
      newDeleteTaskButton.addEventListener('click', () => {
        const taskElement = newDeleteTaskButton.parentNode;
        taskElement.parentNode.removeChild(taskElement);
      });

      listSkills.appendChild(taskItem);
    }

    var deleteSkillBtn = document.querySelectorAll('.deleteSkillBtn');

    deleteSkillBtn.forEach((button) => {
      button.addEventListener('click', () => {
        const taskElement = button.parentNode;
        taskElement.parentNode.removeChild(taskElement);
      });
    });
  }
  //------------------------------------------------------------//
  const addLocationBtn = document.getElementById('addSkillBtn');

  if (addLocationBtn != null) {
    const listLocation = document.getElementById('listLocation');
    const addLocationText = document.getElementById('addLocationText');

    addLocationBtn.addEventListener('click', function () {
      const taskText = addLocationText.value.trim();

      if (taskText !== '') {
        addTask(taskText);
        addLocationText.value = '';
      }
    });


    addLocationText.addEventListener('keypress', function (event) {
      if (event.key === 'Enter') {
        const taskText = addLocationText.value.trim();

        if (taskText !== '') {
          addTask(taskText);
          addLocationText.value = '';
        }
      }
    });

    function addTask(text) {
      const taskItem = document.createElement('li');
      taskItem.className = '';
      taskItem.innerHTML = `
        <span>${text}</span><button class="deleteLocationBtn"><i class="fa-solid fa-xmark"></i></button>
      `;

      // Ajout de l'écouteur d'événement click au nouveau bouton de suppression
      const newDeleteTaskButton = taskItem.querySelector('.deleteLocationBtn');
      newDeleteTaskButton.addEventListener('click', () => {
        const taskElement = newDeleteTaskButton.parentNode;
        taskElement.parentNode.removeChild(taskElement);
      });

      listLocation.appendChild(taskItem);
    }

    var deleteLocationBtn = document.querySelectorAll('.deleteLocationBtn');

    deleteLocationBtn.forEach((button) => {
      button.addEventListener('click', () => {
        const taskElement = button.parentNode;
        taskElement.parentNode.removeChild(taskElement);
      });
    });
  }
  //-----------------------------------------//
  const addJobBtn = document.getElementById('addJobBtn');

  if (addJobBtn != null) {
    const listJob = document.getElementById('listJob');
    const addJobText = document.getElementById('addJobText');

    addJobBtn.addEventListener('click', function () {
      const taskText = addJobText.value.trim();

      if (taskText !== '') {
        addTask(taskText);
        addJobText.value = '';
      }
    });


    addJobText.addEventListener('keypress', function (event) {
      if (event.key === 'Enter') {
        const taskText = addJobText.value.trim();

        if (taskText !== '') {
          addTask(taskText);
          addJobText.value = '';
        }
      }
    });

    function addTask(text) {
      const taskItem = document.createElement('li');
      taskItem.className = '';
      taskItem.innerHTML = `
        <span>${text}</span><button class="deleteJobBtn"><i class="fa-solid fa-xmark"></i></button>
      `;

      // Ajout de l'écouteur d'événement click au nouveau bouton de suppression
      const newDeleteTaskButton = taskItem.querySelector('.deleteJobBtn');
      newDeleteTaskButton.addEventListener('click', () => {
        const taskElement = newDeleteTaskButton.parentNode;
        taskElement.parentNode.removeChild(taskElement);
      });

      listJob.appendChild(taskItem);
    }

    var deleteSkillBtn = document.querySelectorAll('.deleteJobBtn');

    deleteSkillBtn.forEach((button) => {
      button.addEventListener('click', () => {
        const taskElement = button.parentNode;
        taskElement.parentNode.removeChild(taskElement);
      });
    });
  }


});

const zSpinner = document.getElementById('zoneSpin');
const listOffer = document.getElementById('offerList');

if (zSpinner != null) {
  zSpinner.style.display = 'flex';
  listOffer.style.display = 'none';
  const paginate = document.getElementById('paginateWymee');
  paginate.style.display = 'none';


  setTimeout(() => {
    zSpinner.setAttribute('style', 'display: none !important');
    listOffer.style.display = 'grid';
    paginate.style.display = 'flex';
  }, 2000)

}


const loader = document.getElementById('loader');
if (loader !=null) {
  const progressBar = document.getElementById('progress-bar');
        const span = document.querySelector('#progress-bar span');

        let width = 0;
        let color = '#000';
        const interval = setInterval(() => {
            width += 1;
            span.style.width = `${width}%`;

            if (width <= 33) {
                color = '#000';
            } else if (width <= 66) {
                color = '#F0733B';
            } else {
                color = '#E32481';
            }
            
            span.style.backgroundColor = color;

            if (width === 115) {
                clearInterval(interval);
                loader.style.display = 'none';

                // Affichez le contenu du site ici
            }
        }, 15);
}