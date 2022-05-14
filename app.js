const scrollTopBtn = document.querySelector("#scrollTop");

window.onscroll = () => {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    scrollTopBtn.style.display = "flex";
  } else {
    scrollTopBtn.style.display = "none";
  }
};

scrollTopBtn.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
