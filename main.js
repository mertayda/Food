
const searchButton = document.querySelector(".search-button");
const formSearch = document.querySelector(".form-search");
const navLinks = document.querySelector(".nav-links");
const navbarCol = document.querySelector(".navbar-collapse");
const navButton = document.querySelector(".navbar-toggler");
const navBar = document.querySelector(".navbar-nav");
const navbarToggler = document.querySelector(".navbar-toggler");
const toggleMenu = document.querySelector(".toggle-menu");
const foodSearch = document.querySelector(".food-search");
const foodSearchButton = document.querySelector(".search-button");


navbarToggler.addEventListener("click", function() {
  navBar.classList.toggle("show");
});


document.addEventListener("DOMContentLoaded", function() {
  const menuNavLiks = document.querySelectorAll(".menu-nav-link");
  const categoryContent = document.querySelectorAll(".category-content");
  

  searchButton.addEventListener("click", function(e) {
    e.preventDefault();
    formSearch.classList.toggle("open");
  });
  

  menuNavLiks.forEach((link) => {
    link.addEventListener("click", function(e) {
      e.preventDefault();
      
  
      menuNavLiks.forEach((I) => {
        I.classList.remove("active");
      });
      
  
      categoryContent.forEach((content) => {
        content.classList.remove("active");
      });
      
 
      this.classList.add("active");
      

      const kategori = this.getAttribute("data-category");
      const menukategori = document.getElementById(kategori);
      
      if (menukategori) {
        menukategori.classList.add("active");
      }
    });
  });
});