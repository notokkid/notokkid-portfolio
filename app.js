const scrollTopBtn = document.querySelector("#scrollTop");
const navButtonGroup = document.querySelector("#navBtnGroup");

const aboutSection = document.querySelector("#about-section");
const portfolioSection = document.querySelector("#portfolio-section");

// Scroll To Top Functionality
window.onscroll = () => {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    scrollTopBtn.style.display = "flex";
  } else {
    scrollTopBtn.style.display = "none";
  }
};

scrollTopBtn.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

// Navigation Functionality

navButtonGroup.addEventListener("click", (event) => {
  switch (event.target.id) {
    case "btn-about":
      document.body.scrollTop = aboutSection.offsetTop;
      document.documentElement.scrollTop = aboutSection.offsetTop;
      break;
    case "btn-portfolio":
      document.body.scrollTop = portfolioSection.offsetTop;
      document.documentElement.scrollTop = portfolioSection.offsetTop;
      break;
  }
});
