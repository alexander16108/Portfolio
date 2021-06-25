// var view =

// javascript object declarations
const data = {
  projects: [
    {
      key: 0,
      title: 'Multi-Post Stories ',
      image: './image/blank-img.png',
      description:  "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text..",
      tags: ['html', 'css', 'ruby', 'javaScript'],
      liveSource: '#',
      sourceCode: '#',
      link: '#'
    },
    {
      key: 1,
      title: 'Multi-Post Stories ',
      image: './image/blank-img.png',
      description:  "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text..",
      tags: ['html', 'css', 'ruby', 'javaScript'],
      liveSource: '#',
      sourceCode: '#',
      link: '#'
    },
    {
      key: 2,
      title: 'Multi-Post Stories ',
      image: './image/blank-img.png',
      description:  "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text..",
      tags: ['html', 'css', 'ruby', 'javaScript'],
      liveSource: '#',
      sourceCode: '#',
      link: '#'
    },

    {
      key: 3,
      title: 'Multi-Post Stories',
      image: './image/blank-img.png',
      description:  "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text..",
      tags: ['html', 'css', 'ruby', 'javaScript'],
      liveSource: '#',
      sourceCode: '#',
      link: '#'
    },
  ],
};

const popupDetails = document.createElement('div');
popupDetails.id = 'popup-details';
popupDetails.className = 'projects-details';

// const myproject = data.projects

function showDetails(projectIndex) {
  const projectsCode =  `
  <div class="popup-container">
  <span id="close-popup"><i class = "fas fa-times popup-close"></i></span>
  <h3 class=" popup-title">${projects[projectIndex].title}</h3>
  <div class = "popup-info">
  <p class = "popup-description">${projects[projectIndex].description}</p>
  <div class = "popup-img>
  <img src = "${projects[projectIndex].image}">
  </div>
<div class = "popup-list">
  <ul class = "tech">
  ${function languageUsed() {
return projects[projectIndex].tags.map((technologies) => `<li class = "tech-skills">${technologies}</li>`).join(' ');
}()}
  </ul>
  <div class = "popup-button">
  <a href="${projects[projectIndex].liveSource}" class="btn">See Live &nbsp; <i class="fas fa-external-link-alt"></i></a>
  <a href="${projects[projectIndex].sourceCode}" class="btn">See Live &nbsp; <i class="fas fa-github"></i></a>
  </div>
  </div>
  </div>
  </div>`;
  popupDetail.innerHTML += projectsCode;
  document.body.appendChild(popupDetail);
document.getElementById('close-popup').addEventListener('click', () =>{
  popupDetail.innerHTML = ' ';
document.body.removeChild(popupDetail)
})
}

const showButton = document.querySelectorAll('.openBtn');
showButton.forEach((btnBtn) => {
  btnBtn.addEventListener('click', (event) => {
  showDetails(event.target.dataset.id);
  }
  );
});