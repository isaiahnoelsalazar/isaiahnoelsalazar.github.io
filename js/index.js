const menuToggle = document.getElementById("menu-toggle");
const sidebar = document.getElementById("sidebar");
const hash = window.location.hash;

function toggleSidebar(){
    sidebar.classList.toggle("active");
    if (sidebar.classList.contains("active")) {
        menuToggle.innerHTML = "✕ Close";
    } else {
        menuToggle.innerHTML = "☰ Menu";
    }
}

function showContent(target){
    const mainContents = document.getElementsByClassName("main-content");
    Array.from(mainContents).forEach(content => {
        content.style.display = "none";
    });
    const targetContent = document.querySelector(`.main-content.${target}`);
    if (targetContent) {
        targetContent.style.display = "block";
    }
}

menuToggle.addEventListener("click", toggleSidebar);
showContent(hash ? hash.substring(1) : "dashboard");

const navigationLinks = document.getElementsByClassName("navigation-links");
Array.from(navigationLinks).forEach(link => {
    link.addEventListener("click", (event) => {
        const target = event.target.textContent.toLowerCase();
        showContent(target);
        if (window.getComputedStyle(document.getElementById("mobile-header")).getPropertyValue("display") != "none"){
            toggleSidebar();
        } else {
            if (sidebar.classList.contains("active")) {
                toggleSidebar();
            }
        }
    });
});