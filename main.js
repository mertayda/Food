const searchButton = document.querySelector(".search-button")
const formSearch = document.querySelector(".form-search")


searchButton.addEventListener("click", function() {
    formSearch.classList.toggle("active")
})