const searchButton = document.querySelector(".search-button")
const formSearch = document.querySelector(".form-search")
const carousel = document.querySelector(".seller-carousel")
const carouselSlider = document.querySelector(".carousel-slider")
const nextButton = document.querySelector(".next")
const prevButton = document.querySelector(".prev")


searchButton.addEventListener("click", function() {
    formSearch.classList.toggle("active")
})


let currentIndex = 0
const totalIndex = carousel.length - 1
const slidesTotal = 3
const  remaingIndex = totalIndex - slidesTotal

function translate(){
    carouselSlider.style.transform = `translateX(-${currentIndex * 33.333}%)` 
}


nextButton.addEventListener("click", function() {
   if(currentIndex < totalIndex){
    currentIndex++

    translate()
   }
})

prevButton.addEventListener("click", function() {
    if(currentIndex > 0){
        currentIndex--

        translate()
    }
})




// Carousel making

// 1) first decide how many cards 
// 2) add buttons when you cicck the button it will translate 
// 3)carousel mantığı bir sayaç ayarlıar ve bu sayaç butona bastığında arttığında kartı sağa veya çekiyor