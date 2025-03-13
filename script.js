let iconSearch = document.querySelector(".icon-search");

iconSearch.addEventListener("click", toggleActive)

function toggleActive() {
    document.querySelector(".input-container").classList.toggle("active")
}
