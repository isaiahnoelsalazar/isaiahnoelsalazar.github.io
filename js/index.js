const menuToggle = document.getElementById("menu-toggle");
const sidebar = document.getElementById("sidebar");
const sidebarLinks = [
    {title: "Dashboard"},
    {title: "ECStyleSheet Demo", href: "#ecstylesheet-demo"},
    {title: "Links", href: "#links"},
    {title: "POS System", href: "#pos-system"},
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
    li.classList.add("borderBottomStyle-solid", "borderBottomColor-[var(--secondary-color)]", "borderBottomWidth-1px");
    a.classList.add("borderRadius-4px", "color-white", "cursor-pointer", "margin-[4px_0]", "display-block", "padding-[12px_6px]", "textDecoration-none", "hover:backgroundColor-[var(--secondary-color)]");
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

function addBox() {
    const container = document.getElementById('dynamic-area');
    const newBox = document.createElement('div');
    newBox.classList.add("padding-15px", "backgroundColor-#e74c3c", "color-white", "borderRadius-10px", "textAlign-center");
    newBox.innerText = "I was injected and styled dynamically!";
    container.appendChild(newBox);
}