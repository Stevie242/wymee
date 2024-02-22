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
  const pageReg = document.getElementById('pageReg');
  pageReg.style.height =  '100vh';
  if (btnTalent != null || btnBusiness != null) {
    btnTalent.addEventListener('click', function (event) {
      event.stopPropagation();
      pageReg.style.height =  'inherit';
      btnBusiness.classList.remove('active');
      btnTalent.classList.add('active');
      var showTalent = document.getElementById('for-talent');
      var showBusiness = document.getElementById('for-business');
      showBusiness.classList.remove('active');
      showTalent.classList.add('active');
    });
    btnBusiness.addEventListener('click', function (event) {
      event.stopPropagation();
      pageReg.style.height =  'inherit';
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
  if (navbar != null) {
    if (window.scrollY > 100) {
      navbar.classList.add('sticky');
    } else {
      navbar.classList.remove('sticky');
    }
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
  /*
  myForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Ajoutez ici la logique de soumission du formulaire si nécessaire
    alert('Form submitted!');
  });
  */
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
        if (myForm != null) {
          setTimeout(() => {
            myForm.submit();
          }, 3000);
        }
      } else {
        alert('Veuillez sélectionner un fichier PDF.');
      }
    }
  }

}

/* *Register page* */

const skillAddBtn = document.getElementById('addSkill');

if (skillAddBtn != null) {
  const listSkills = document.getElementById('skillList');
  const skillText = document.getElementById('skillText');

  skillAddBtn.addEventListener('click', function () {
    const taskText = skillText.value.trim();

    if (taskText !== '') {
      addSkillTask(taskText);
      skillText.value = '';
    }
  });


  skillText.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      const taskSkillText = skillText.value.trim();

      if (taskSkillText !== '') {
        addSkillTask(taskSkillText);
        skillText.value = '';
      }
    }
  });

  function addSkillTask(text) {
    const taskSkillItem = document.createElement('div');
    taskSkillItem.className = 'skill-detail';
    taskSkillItem.innerHTML = `
    <input type="text" class="d-none" value="${text}" name="skill">
    <span>${text}</span>
    <button class="deleteSkill" type="button"><i class="fa-solid fa-xmark"></i>
    `;

    // Ajout de l'écouteur d'événement click au nouveau bouton de suppression
    const newDeleteSkillTaskButton = taskSkillItem.querySelector('.deleteSkill');
    newDeleteSkillTaskButton.addEventListener('click', () => {
      const taskElement = newDeleteSkillTaskButton.parentNode;
      taskElement.parentNode.removeChild(taskElement);
    });

    listSkills.appendChild(taskSkillItem);
  }

  var deleteSkillTaskButton = document.querySelectorAll('.deleteSkill');

  deleteSkillTaskButton.forEach((button) => {
    button.addEventListener('click', () => {
      const taskElement = button.parentNode;
      taskElement.parentNode.removeChild(taskElement);
    });
  });

  const delSkill = document.getElementById('delSkill');
  delSkill.addEventListener('click', function () {
    skillText.value = '';
  })
}

const xpAddBtn = document.getElementById('add-xp');

if (xpAddBtn != null) {
  const listXps = document.getElementById('list-xp');
  const xpTitle = document.getElementById('title-add');
  const xpSociaty = document.getElementById('sociaty-add');
  const xpAddress = document.getElementById('address-add');
  const xpdescription = document.getElementById('description-add');
  const xpDateStart = document.getElementById('date-start-add');
  const xpDateEnd = document.getElementById('date-end-add');

  xpAddBtn.addEventListener('click', function () {
    const xpTitleText = xpTitle.value.trim();
    const xpSociatyText = xpSociaty.value.trim();
    const xpAddressText = xpAddress.value.trim();
    const xpdescriptionText = xpdescription.value.trim();
    const xpDateStartText = xpDateStart.value.trim();
    const xpDateEndText = xpDateEnd.value.trim();

    if (xpTitleText !== '' || xpSociatyText !== '' || xpAddressText !== '' || xpdescriptionText !== '' || xpDateStartText !== '' || xpDateEndText !== '') {
      addXpTask(xpTitleText, xpSociatyText, xpAddressText, xpdescriptionText, xpDateStartText, xpDateEndText);
      xpTitle.value = '';
      xpSociaty.value = '';
      xpAddress.value = '';
      xpdescription.value = '';
      xpDateStart.value = '';
      xpDateEnd.value = '';
    }
  });

  function addXpTask(xpTitle, xpSociaty, xpAddress, xpdescription, xpDateStart, xpDateEnd) {
    const taskXpItem = document.createElement('div');
    taskXpItem.className = 'experience-detail';
    taskXpItem.innerHTML = `
    <div class="group-input">
        <div class="input-form">
            <label>${xpTitle}</label>
            <label>${xpDateStart} - ${xpDateEnd}</label>
            <input type="text"name="title" value="${xpTitle}">
            <input type="text" name="date" value="${xpDateStart} - ${xpDateEnd}}">
        </div>
        <div class="input-form">
            <label>${xpSociaty}</label>
            <label>${xpAddress}</label>
            <input type="text" name="sociaty" value="${xpSociaty}">
            <input type="text" name="address" value="${xpAddress}">
        </div>
        <div class="input-form">
            <span>${xpdescription}</span>
            <textarea name="description" value="${xpdescription}"></textarea>
        </div>
    </div>
    <div class="action">
        <button type="button">
            <i class="fa-solid fa-ellipsis"></i>
        </button>
        <div class="menu-action"></div>
    </div>
    `;

    // Ajout de l'écouteur d'événement click au nouveau bouton de suppression
    /*
    const newDeleteSkillTaskButton = taskXpItem.querySelector('.deleteSkill');
    newDeleteSkillTaskButton.addEventListener('click', () => {
      const taskElement = newDeleteSkillTaskButton.parentNode;
      taskElement.parentNode.removeChild(taskElement);
    });
    */
    listXps.appendChild(taskXpItem);
  }
  /*
  var deleteSkillTaskButton = document.querySelectorAll('.deleteSkill');

  deleteSkillTaskButton.forEach((button) => {
    button.addEventListener('click', () => {
      const taskElement = button.parentNode;
      taskElement.parentNode.removeChild(taskElement);
    });
  });
  */
  const delXp = document.getElementById('del-xp');
  delXp.addEventListener('click', function () {
    xpTitle.value = '';
    xpSociaty.value = '';
    xpAddress.value = '';
    xpdescription.value = '';
    xpDateStart.value = '';
    xpDateEnd.value = '';
  })
}


const trainingAddBtn = document.getElementById('addTraining');

if (trainingAddBtn != null) {
  const listTraining = document.getElementById('list-training');
  const nameSchool = document.getElementById('school-add');
  const trainingSpeciality = document.getElementById('speciality-add');
  const trainingLevel = document.getElementById('level-add');
  const trainingAddress = document.getElementById('training-address-add');
  const trainingdescription = document.getElementById('description-b-add');
  const trainingDateStart = document.getElementById('training-date-start-add');
  const trainingDateEnd = document.getElementById('training-date-end-add');

  trainingAddBtn.addEventListener('click', function () {
    const nameSchoolText = nameSchool.value.trim();
    const trainingSpecialityText = trainingSpeciality.value.trim();
    const trainingLevelText = trainingLevel.value.trim();
    const trainingAddressText = trainingAddress.value.trim();
    const trainingdescriptionText = trainingdescription.value.trim();
    const trainingDateStartText = trainingDateStart.value.trim();
    const trainingDateEndText = trainingDateEnd.value.trim();    
    console.log([nameSchoolText,
      trainingAddressText,
      trainingLevelText,
      trainingAddressText,
      trainingdescriptionText,
      trainingDateStartText,
      trainingDateEndText
    ])
    if (nameSchoolText !== '' || trainingSpecialityText !== '' || trainingLevelText !== '' || trainingAddressText !== '' || trainingdescriptionText !== '' || trainingDateStartText !== '' || trainingDateEndText !== '') {
      addTrainingTask(nameSchoolText, trainingSpecialityText, trainingLevelText, trainingAddressText, trainingdescriptionText, trainingDateStartText, trainingDateEndText);
      nameSchool.value = '';
      trainingSpeciality.value = '';
      trainingLevel.value = '';
      trainingAddress.value = '';
      trainingdescription.value = '';
      trainingDateStart.value = '';
      trainingDateEnd.value = '';
    }
  });


  function addTrainingTask(nameSchoolText, trainingSpecialityText, trainingLevelText, trainingAddressText, trainingdescriptionText, trainingDateStartText, trainingDateEndText) {
    const taskTrainingItem = document.createElement('div');
    taskTrainingItem.className = 'training-detail';
    taskTrainingItem.innerHTML = `
    <div class="group-input">
      <div class="input-form">
          <label>${nameSchoolText}</label>
          <label>${trainingDateStartText} - ${trainingDateEndText}</label>
          <input type="text"name="school" value="${nameSchoolText}">
          <input type="text" name="date" value="${trainingDateStartText} - ${trainingDateEndText}">
      </div>
      <div class="input-form">
          <label>${trainingSpecialityText}</label>
          <label>${trainingLevelText}</label>
          <input type="text" name="speciality" value="${trainingSpecialityText}">
          <input type="text" name="level" value="${trainingLevelText}">
      </div>
      <div class="input-form">
          <label class="none">${trainingAddressText}</label>
          <input type="text" name="address" value="${trainingAddressText}">
      </div>
      <div class="input-form">
          <span>${trainingdescriptionText}</span>
          <textarea name="description-b" value="${trainingdescriptionText}"></textarea>
      </div>
    </div>
    <div class="action">
      <button type="button">
        <i class="fa-solid fa-ellipsis"></i>
      </button>
      <div class="menu-action"></div>
    </div>
    `;

    // Ajout de l'écouteur d'événement click au nouveau bouton de suppression
    /*
    const newDeleteSkillTaskButton = taskTrainingItem.querySelector('.deleteSkill');
    newDeleteSkillTaskButton.addEventListener('click', () => {
      const taskElement = newDeleteSkillTaskButton.parentNode;
      taskElement.parentNode.removeChild(taskElement);
    });
    */
    listTraining.appendChild(taskTrainingItem);
  }
  /*
  var deleteTrainingTaskButton = document.querySelectorAll('.deleteSkill');

  deleteSkillTaskButton.forEach((button) => {
    button.addEventListener('click', () => {
      const taskElement = button.parentNode;
      taskElement.parentNode.removeChild(taskElement);
    });
  });
  */
  const delTraining = document.getElementById('delTraining');
  delSkill.addEventListener('click', function () {
    skillText.value = '';
  })
}


/* *Register page* */

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
if (loader != null) {
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
    }
  }, 15);
}


let currentFormStep = 1;

function showStep(stepNumber) {
    // Masquer toutes les étapes
    document.querySelectorAll('.register-info-step').forEach(step => step.style.display = 'none');

    // Afficher l'étape actuelle
    document.getElementById(`info-step-${stepNumber}`).style.display = 'block';
}

function nextStep() {
  if (currentFormStep < 3) {
      currentFormStep++;
      showStep(currentFormStep);
  }
}

function prevStep() {
  if (currentFormStep > 1) {
      currentFormStep--;
      showStep(currentFormStep);
  }
}

// Afficher la première étape au chargement de la page
showStep(currentFormStep);
