const data = {
  projects: [
    {
      key: 0,
      title: "Multi-Post Stories ",
      image: "./image/Snapshoot portfolio.png",
      description:
        "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text..",
      tags: ["html", "css", "ruby", "javaScript"],
      liveSource: "#",
      sourceCode: "#",
      link: "#",
    },
    {
      key: 1,
      title: "Multi-Post Stories ",
      image: "./image/Snapshoot portfolio.png",
      description:
        "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text..",
      tags: ["html", "css", "ruby", "javaScript"],
      liveSource: "#",
      sourceCode: "#",
      link: "#",
    },
    {
      key: 2,
      title: "Multi-Post Stories ",
      image: "./image/Snapshoot portfolio.png",
      description:
        "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text..",
      tags: ["html", "css", "ruby", "javaScript"],
      liveSource: "#",
      sourceCode: "#",
      link: "#",
    },

    {
      key: 3,
      title: "Multi-Post Stories",
      image: "./image/Snapshoot portfolio.png",
      description:
        "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text..",
      tags: ["html", "css", "ruby", "javaScript"],
      liveSource: "#",
      sourceCode: "#",
      link: "#",
    },
  ],
};

const myProjects = data.projects;
// IMPLEMENT PORTFOLIO PROJECTS
function implementProjects() {
  const projectsWrap = document.querySelector(".multi-post ul");
  const tagsWrap = document.querySelector(".multi-post ul .list ul");
  data.projects.forEach((project) => {
    const projectCard = `
  <li>
    <div class="multi-story-${project.key + 1}">
      <div class="image blank-image">
        <img class="blank portfolio" src="${
          project.image
        }" alt="project image">
      </div>
      <div class="destop-split">
        <h3>${project.title}</h3>
        <p class="text">${project.description}</p>
        <div class="list list-align">
          <ul>
          ${(function technoUsed() {
            return project.tags
              .map((tag) => `<li class='${tag}'>${tag}</li>`)
              .join("");
          })()}
          </ul>
        </div>
        <button type="submit" data-key='${
          project.key
        }' class="view openBtn btnBtn" >see project</button>
      </div>
    </div>
  </li>`;
    projectsWrap.innerHTML += projectCard;
  });
}
implementProjects();
const popupDetails = document.createElement("div");
popupDetails.id = "popup-details";
popupDetails.className = "projects-details";

function showDetails(projectIndex) {
  const myIndex = Number(projectIndex);
  const projectsCode = `
  <div class="popup container">
  <div class = "popup-content">
  <h3 class=" popup-title">${myProjects[myIndex].title}</h3>
  <span id="close-popup"><i class = "fas fa-times popup-close"></i></span>
  </div>
  <div class = "popup-img">
  <img src="${myProjects[myIndex].image}" alt="">
</div>
  <div class = "popup-info">
  <p class = "popup-description">${myProjects[myIndex].description}</p>
<div class = "popup-list">
  <ul class = "tech">
  ${(function languageUsed() {
    return myProjects[myIndex].tags
      .map((technologies) => `<li class = "tech-skills">${technologies}</li>`)
      .join(" ");
  })()}
  </ul>
  <div class = "popup-button">
  <a href="${
    myProjects[myIndex].liveSource
  }" class="btn">See Live &nbsp; <i class="fas fa-external-link-alt"></i></a>
  <a href="${
    myProjects[myIndex].sourceCode
  }" class="Btn">See Code &nbsp; <i class="fas fa-github"></i></a>
  </div>
  </div>
  </div>
  </div>`;
  popupDetails.innerHTML = projectsCode;
  document.body.appendChild(popupDetails);
  document.getElementById("close-popup").addEventListener("click", () => {
    popupDetails.innerHTML = "";
    document.body.removeChild(popupDetails);
  });
}

const showButton = [...document.querySelectorAll(".openBtn")];
showButton.forEach((btnBtn) => {
  btnBtn.addEventListener("click", (event) => {
    showDetails(event.target.dataset.key);
  });
});

const body = document.querySelector('.blur');
function blurfunction() {
  body.classList.add('filter');
}

function displaynoneblur() {
  body.classList.remove('filter');
}