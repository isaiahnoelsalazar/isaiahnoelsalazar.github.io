const menuToggle = document.getElementById("menu-toggle");
const sidebar = document.getElementById("sidebar");

function toggleSidebar(){
    sidebar.classList.toggle("active");
    if (sidebar.classList.contains("active")) {
        menuToggle.innerHTML = "✕ Close";
    } else {
        menuToggle.innerHTML = "☰ Menu";
    }
}

menuToggle.addEventListener("click", toggleSidebar);

const navigationLinks = document.getElementsByClassName("navigation-links");
Array.from(navigationLinks).forEach(link => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        const target = event.target.textContent.toLowerCase();
        const mainContents = document.getElementsByClassName("main-content");
        Array.from(mainContents).forEach(content => {
            content.style.display = "none";
        });
        const targetContent = document.querySelector(`.main-content.${target}`);
        if (targetContent) {
            targetContent.style.display = "block";
        }
        toggleSidebar();
    });
});