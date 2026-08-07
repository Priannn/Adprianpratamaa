AOS.init({
  duration: 1000,
  once: false,
  mirror: true
 
});
const openBtn = document.getElementById("openCertificate");
const modal = document.getElementById("certificateModal");
const closeBtn = document.getElementById("closeCertificate");

openBtn.onclick = () => {
  modal.classList.remove("hidden");
  modal.classList.add("flex");
};

closeBtn.onclick = () => {
  modal.classList.add("hidden");
  modal.classList.remove("flex");
};

modal.onclick = (e) => {
  if (e.target === modal) {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
  }
};


// const menuBtn = document.getElementById("menu-btn");
// const mobileMenu = document.getElementById("mobile-menu");

// menuBtn.addEventListener("click", function(){

// })
// mobileMenu.addEventListener("click", function(){

// })









const menuIcon = document.getElementById("menu-icon");
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const mobileLinks = document.querySelectorAll(".mobile-link");

menuBtn.addEventListener("click", function(){
  mobileMenu.classList.toggle("hidden");
  if(mobileMenu.classList.contains("hidden")) {
    menuIcon.classList.add("bx-menu")
    menuIcon.classList.remove("bx-x")
  }else{
    menuIcon.classList.add("bx-x")
    menuIcon.classList.remove("bx-menu")
  };
});

mobileLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    mobileMenu.classList.add("hidden");

    menuIcon.classList.remove("bx-x");
    menuIcon.classList.add("bx-menu");
  });
});