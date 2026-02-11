const menuToggle = document.getElementById("menu-toggle");
const sidebar = document.getElementById("sidebar");
const sidebarLinks = [
    {title: "Dashboard"},
    {title: "Chat", href: "https://openweb.fwh.is/chat_index.php"},
    {title: "OJT Attendance", href: "https://openweb.fwh.is/ojt_attendance_index.php"},
    {title: "POS System", href: "#pos-system"},
    {title: "Upload", href: "https://openweb.fwh.is/upload_index.php"},
    {title: "About", href: "#about"},
];
const hash = window.location.hash;

sidebarLinks.forEach(element => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    if (element.href) {
        a.href = element.href;
    }
    a.textContent = element.title;
    li.appendChild(a);
    document.getElementById("navigation-links").appendChild(li);
});

function toggleSidebar(){
    sidebar.classList.toggle("active");
    if (sidebar.classList.contains("active")) {
        menuToggle.innerHTML = "✕ Close";
    } else {
        menuToggle.innerHTML = "☰ Menu";
    }
}

function showContent(target){
    if (sidebarLinks[target].title.toLowerCase() == "dashboard"){
        window.history.replaceState(null, document.title, window.location.pathname + window.location.search);
    }
    const mainContents = document.getElementsByClassName("main-content");
    Array.from(mainContents).forEach(content => {
        content.style.display = "none";
    });
    const targetContent = document.querySelector(`.main-content.${sidebarLinks[target].title.toLowerCase().replace(/ /g, "-")}`);
    if (targetContent) {
        targetContent.style.display = "flex";
    }
}

menuToggle.addEventListener("click", toggleSidebar);
showContent(hash ? sidebarLinks.findIndex(link => link.href && link.href.substring(1) == hash.substring(1)) : 0);

const navigationLinks = document.getElementsByClassName("navigation-links");
for (let a = 0; a < navigationLinks.length; a++) {
    navigationLinks[a].addEventListener("click", (event) => {
        if (event.target.tagName.toLowerCase() == "a") {
            const target = event.target.textContent.toLowerCase();
            showContent(sidebarLinks.findIndex(link => link.title.toLowerCase() == target));
            if (window.getComputedStyle(document.getElementById("mobile-header")).getPropertyValue("display") != "none"){
                toggleSidebar();
            } else {
                if (sidebar.classList.contains("active")) {
                    toggleSidebar();
                }
            }
        }
    });
}

function searchSidebar(){
    const tempSidebarLinks = document.getElementById("navigation-links");
    tempSidebarLinks.innerHTML = "";
    sidebarLinks.forEach(element => {
        if (!element.title.toLowerCase().includes(document.getElementById("searchbar").value.toLowerCase()) && element.title.toLowerCase() != "dashboard"){
            return;
        } else {
            const li = document.createElement("li");
            const a = document.createElement("a");
            if (element.href) {
                a.href = element.href;
            }
            a.textContent = element.title;
            li.appendChild(a);
            tempSidebarLinks.appendChild(li);
        }
    });
}