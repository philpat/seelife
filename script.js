
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const donateModal = document.querySelector("#donate-modal")
const donateBtn = document.querySelector("#donate")
const closeBtn = document.querySelector("#close-btn")

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-links").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

donateBtn.addEventListener("click", ()=>{
  donateModal.style.display ="block"
})
closeBtn.addEventListener("click", ()=>{
  donateModal.style.display ="hidden"
})