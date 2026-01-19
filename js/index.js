const menuToggle = document.getElementById("menu-toggle");
const sidebar = document.getElementById("sidebar");
const sidebarLinks = Array.from(document.getElementsByClassName("navigation-links")[0].children);
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
    if (target == "dashboard"){
        window.history.replaceState(null, document.title, window.location.pathname + window.location.search);
    }
    const mainContents = document.getElementsByClassName("main-content");
    Array.from(mainContents).forEach(content => {
        content.style.display = "none";
    });
    const targetContent = document.querySelector(`.main-content.${target}`);
    if (targetContent) {
        targetContent.style.display = "flex";
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

function searchSidebar(){
    const tempSidebarLinks = document.getElementById("navigation-links");
    tempSidebarLinks.innerHTML = "";
    sidebarLinks.forEach(element => {
        const text = element.textContent;
        if (!text.toLowerCase().includes(document.getElementById("search-items").value.toLowerCase()) && text.toLowerCase() != "dashboard"){
            return;
        } else {
            const li = document.createElement("li");
            const a = document.createElement("a");
            a.href = "#" + text.toLowerCase();
            a.textContent = text;
            li.appendChild(a);
            tempSidebarLinks.appendChild(li);
        }
    });
}