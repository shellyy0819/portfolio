document.querySelectorAll(".nav-link").forEach(elem => elem.addEventListener("click",
 () => {
    document.getElementById("navbarNav").classList.remove("show")
}));