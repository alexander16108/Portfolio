const workData = [
  {
    id: 1,
    name: 'Awesome Books',
    photo: './Images/awesomebook.png',
    languages_list: ['CSS', 'Javascript', 'Html'],
    btn_text: 'See Project',
  },
  {
    id: 2,
    name: 'Math Magician',
    photo: './Images/calculator.png',
    languages_list: ['React', 'HTML', 'CSS'],
    btn_text: 'See Project',
  },
  {
    id: 3,
    name: 'Budget App',
    photo: './Images/budgetapp.png',
    languages_list: ['Ruby on Rails', 'Postgresql', 'Bootstrap'],
    btn_text: 'See Project',
  },
  {
    id: 4,
    name: 'Doctor Appointment App',
    photo: './Images/dctrapp.png',
    languages_list: ['React', 'Ruby on Rails', 'Postgresql'],
    btn_text: 'See Project',
  },
  {
    id: 5,
    name: 'Metrics Webapp',
    photo: './Images/metricsapp.png',
    languages_list: ['React', 'Redux', 'API', 'Html/CSS'],
    btn_text: 'See Project',
  },
  {
    id: 6,
    name: 'WorldFood App',
    photo: './Images/worldfood.png',
    languages_list: ['JavaScript', 'HTML/CSS'],
    btn_text: 'See Project',
  },
];

function languages(languages) {
  return `${languages.map((language) => `<li>${language}</li>`).join('')} `;
}

function workTemplate(work) {
  return `
    <li class="flex-box">
    <ul class="firstList">
      <li><img src=${work.photo} alt="My-Work"></li>
      <li><h1>${work.name}</h1></li>
    </ul>
  
  <div class="list-box">
 <ul>
 ${languages(work.languages_list)}
 </ul>
 </div>
  <ul class="See-btn" id="seeBtn-List">
    <li><button type="button" class="see-project" id=${work.id}>${work.btn_text}</button></li>
  </ul>
</li>
    `;
}

document.getElementById('dynamicWork').innerHTML = `${workData.map(workTemplate).join('')}`;

// Work Popup

const workPopUp = [
  {
    id: 1,
    photo: './Images/awesomebook.png',
    languages_list: ['HTML', 'CSS', 'Javascript'],
    desktoplist: ['Codekit', 'Github', 'Javascript', 'Bootstrap', 'Terminal'],
    btn_text: 'See Project',
    description: '`Awesome Books` is a simple website that allows the user to add and remove books and display them. This app also stores <strong>books</strong> in a local storage',
    heading: 'Awesome Books',
    firstBtn: 'See Live',
    secondBtn: 'See Source',
    liveLink: 'https://ridaarif98.github.io/awseomeBooks-m2/',
    sourceLink: 'https://github.com/ridaarif98/awseomeBooks-m2',
  },
  {
    id: 2,
    photo: './Images/calculator.png',
    languages_list: ['React', 'HTML', 'CSS'],
    desktoplist: ['Netlify', 'Github', 'Bootstrap', 'Terminal'],
    btn_text: 'See Project',
    description: '"Math magicians" is a website for all fans of mathematics. It is a Single Page App (SPA) that allows users to make simple calculations.',
    heading: 'Math Magician',
    firstBtn: 'See Live',
    secondBtn: 'See Source',
    liveLink: 'https://jovial-davinci-5da205.netlify.app/',
    sourceLink: 'https://github.com/ridaarif98/math-magician',
  },
  {
    id: 3,
    photo: './Images/budgetapp.png',
    languages_list: ['Ruby on Rails', 'Postgresql', 'Bootstrap'],
    desktoplist: ['Codekit', 'Github', 'Bootstrap', 'Terminal'],
    btn_text: 'See Project',
    description: 'A mobile web application where a user can manage their budget. The app also has a list of transactions associated with a category, so the user can view how much money they spent and on what.',
    heading: 'Budget App',
    firstBtn: 'See Live',
    secondBtn: 'See Source',
    liveLink: 'https://budget-app-177k.onrender.com/',
    sourceLink: 'https://github.com/ridaarif98/Budget-app',
  },
  {
    id: 4,
    photo: './Images/dctrapp.png',
    languages_list: ['React', 'Redux', 'Html/CSS', 'JavaScript', 'Ruby on Rails', 'Postgresql'],
    desktoplist: ['Codekit', 'Github', 'Bootstrap', 'Terminal'],
    btn_text: 'See Project',
    description: 'Doctor Appointment frontend is react frontend application for book an appointment with doctor. This applications is responsive and users can load, create, and delete doctors and appointments. Users need to sign up or sign in to access application. They can sign up or sign in using the sign up and login forms.',
    heading: 'Doctor Appointment App',
    firstBtn: 'See Live',
    secondBtn: 'See Source',
    liveLink: 'https://appointment-app-frontend.netlify.app/',
    sourceLink: 'https://github.com/ridaarif98/doctors_appointment_front_end',
  },
  {
    id: 5,
    photo: './Images/metricsapp.png',
    languages_list: ['React', 'Redux', 'API', 'Html/CSS'],
    desktoplist: ['Codekit', 'Github', 'Bootstrap', 'Terminal'],
    btn_text: 'See Project',
    description: 'Covid-19 metrics app collects information from different data sources to provide details about covid-19. You can filter data by continent and country.',
    heading: 'Metrics Webapp',
    firstBtn: 'See Live',
    secondBtn: 'See Source',
    liveLink: 'https://ridaarif98.github.io/metrics-webapp-capstone/',
    sourceLink: 'https://github.com/ridaarif98/metrics-webapp-capstone',
  },
  {
    id: 6,
    photo: './Images/worldfood.png',
    languages_list: ['JavaScript', 'Webpack', 'HTML/CSS'],
    desktoplist: ['Codekit', 'Github', 'Bootstrap', 'Terminal'],
    btn_text: 'See Project',
    description: 'The JavaScript capstone project (World Food) is about building our own web application based on an external API. The webapp have 2 user interfaces.',
    heading: 'WorldFood App',
    firstBtn: 'See Live',
    secondBtn: 'See Source',
    liveLink: 'https://medaminedev66.github.io/javascript-capstone/',
    sourceLink: 'https://github.com/ridaarif98/javascript-capstone',
  },
];

function languagesPopup(languages) {
  return `${languages.map((language) => `<li>${language}</li>`).join('')}`;
}

function languagesPopupDesktop(languages) {
  return `${languages.map((language) => `<li>${language}</li>`).join('')}`;
}

function workPopup(works) {
  return `
  <div class="workMainDiv">
    <span class="cl-tag fa fa-close" id="firstClose"></span>
    <div class="workImgDiv">
      <img src=${works.photo} alt="My-Work" id="closeTab">
    </div>
  <div class="workContentDiv">
    <div class="workHeadingDiv">
      <h1>${works.heading}</h1>
      <ul class="workButtonDiv">
        <li><a href=${works.liveLink} target="_blank"><button type="button" >${works.firstBtn}<i class="fa fa-external-link" aria-hidden="true"></i></button></a></li>
        <li><a href=${works.sourceLink} target="_blank"><button type="button">${works.secondBtn}<i class="fa fa-github" aria-hidden="true"></i></button></a></li>
      </ul>
    </div>
    <div class="list-boxPop">
      <ul>
          ${(window.innerWidth < 768) ? languagesPopup(works.languages_list) : languagesPopupDesktop(works.desktoplist)}
      </ul>
    </div>
    <p>${works.description}</p>
    <div class="mobileButtonDiv">
    <ul class="workButtonDiv">
        <li><a href=${works.liveLink} target="_blank"><button type="button" >${works.firstBtn}<i class="fa fa-external-link" aria-hidden="true"></i></button></a></li>
        <li><a href=${works.sourceLink} target="_blank"><button type="button">${works.secondBtn}<i class="fa fa-github" aria-hidden="true"></i></button></a></li>
    </ul>
    </div>
  </div>
  </div>
    `;
}

const modal = document.getElementById('firstPopup');

if (document.getElementById('1')) {
  document.getElementById('1').onclick = () => {
    modal.innerHTML = workPopup(workPopUp[0]);
    modal.style.display = 'block';
    const span = document.getElementById('firstClose');
    span.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  };
}

if (document.getElementById('2')) {
  document.getElementById('2').onclick = () => {
    modal.innerHTML = workPopup(workPopUp[1]);
    modal.style.display = 'block';
    const span = document.getElementById('firstClose');
    span.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  };
}

if (document.getElementById('3')) {
  document.getElementById('3').onclick = () => {
    modal.innerHTML = workPopup(workPopUp[2]);
    modal.style.display = 'block';
    const span = document.getElementById('firstClose');
    span.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  };
}

if (document.getElementById('4')) {
  document.getElementById('4').onclick = () => {
    modal.innerHTML = workPopup(workPopUp[3]);
    modal.style.display = 'block';
    const span = document.getElementById('firstClose');
    span.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  };
}

if (document.getElementById('5')) {
  document.getElementById('5').onclick = () => {
    modal.innerHTML = workPopup(workPopUp[4]);
    modal.style.display = 'block';
    const span = document.getElementById('firstClose');
    span.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  };
}

if (document.getElementById('6')) {
  document.getElementById('6').onclick = () => {
    modal.innerHTML = workPopup(workPopUp[5]);
    modal.style.display = 'block';
    const span = document.getElementById('firstClose');
    span.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  };
}

window.onclick = (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};