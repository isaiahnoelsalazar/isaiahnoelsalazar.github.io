const menuToggle = document.getElementById("menu-toggle");
const sidebar = document.getElementById("sidebar");
const sidebarLinks = [
    {title: "Dashboard"},
    {title: "Automatic System Service", href: "https://ass-olive.vercel.app/"},
    {title: "Bad Phone Number Inputs", href: "https://isaiahnoelsalazar.github.io/bad-phone-number-inputs/"},
    {title: "Basabasa: Free Manga Reader App (Android 7.1+)", href: "https://isaiahnoelsalazar.github.io/basabasa-download/"},
    {title: "Basalt (Android 7.1+)", href: "https://github.com/isaiahnoelsalazar/Basalt/"},
    {title: "Bill Calculator (Android 4.1+)", href: "https://isaiahnoelsalazar.github.io/billcalculator-download/"},
    {title: "Black", href: "https://isaiahnoelsalazar.github.io/black/"},
    {title: "Blog Next", href: "https://blog-next-psi-seven.vercel.app/"},
    {title: "BusSeatingArrangementExample (Android 4.1+)", href: "https://github.com/isaiahnoelsalazar/BusSeatingArrangementExample/"},
    {title: "Captain's Cup POS (Android 7.0+)", href: "https://github.com/isaiahnoelsalazar/CaptainsCupPOS/"},
    {title: "Chat", href: "https://openweb.fwh.is/chmsg.php"},
    {title: "Chatbot", href: "https://isaiahnoelsalazar.github.io/chatbot/"},
    {title: "Code Notes", href: "https://isaiahnoelsalazar.github.io/codenotes/"},
    {title: "Code Chatbot", href: "https://isaiahnoelsalazar.github.io/code-chatbot/"},
    {title: "Compass (Android 4.2+)", href: "https://isaiahnoelsalazar.github.io/compass-download/"},
    {title: "Didactic Carrot Ideas", href: "https://didactic-carrot-ideas.vercel.app/"},
    {title: "DOC to PDF", href: "https://isaiahnoelsalazar.github.io/doc-to-pdf/"},
    {title: "E-Commerce Prototype", href: "http://openweb.fwh.is/e-commerce.php"},
    {title: "ECStyleSheet Demo", href: "#ecstylesheet-demo"},
    {title: "Electronic Gadget Store", href: "https://isaiahnoelsalazar.github.io/electronic-gadget-store/"},
    {title: "Expenses and Savings", href: "https://isaiahnoelsalazar.github.io/expenses-and-savings/"},
    {title: "Flask Web App", href: "https://flask-web-app-peach.vercel.app/"},
    {title: "HTML Editor (Android 4.2+)", href: "https://isaiahnoelsalazar.github.io/htmleditor-download/"},
    {title: "Increment Decrement (Android 7.0+)", href: "https://github.com/isaiahnoelsalazar/IncrementDecrement/"},
    {title: "Live HTML", href: "https://isaiahnoelsalazar.github.io/live-html/"},
    {title: "Live PHP Pages", href: "http://openweb.fwh.is/"},
    {title: "Live PHP Pages 2", href: "http://saiaweb.fwh.is/"},
    {title: "Match Up Game (Android 7.0+) | School Work", href: "https://isaiahnoelsalazar.github.io/matchupgame-download/"},
    {title: "Monay (Android 7.0+) | School Work", href: "https://github.com/isaiahnoelsalazar/Monay/"},
    {title: "Multiplication Table", href: "https://isaiahnoelsalazar.github.io/multiplication-table/"},
    {title: "My old HTML practice website", href: "https://isaiahnoelsalazar.github.io/thml/"},
    {title: "My old code collection", href: "https://isaiahnoelsalazar.github.io/old-code/"},
    {title: "Note (Android 4.1+)", href: "https://isaiahnoelsalazar.github.io/note-download/"},
    {title: "Number Memory Game", href: "https://isaiahnoelsalazar.github.io/number-memory-game/"},
    {title: "OJT Attendance", href: "https://openweb.fwh.is/ojt_attendance_index.php"},
    {title: "OTP Generator (Android 7.0+)", href: "https://isaiahnoelsalazar.github.io/otp-generator-download/"},
    {title: "PacmanAndroid (Android 4.4+)", href: "https://github.com/isaiahnoelsalazar/PacmanAndroid/"},
    {title: "Personal Webpage", href: "https://isaiahnoelsalazar.github.io/personal-webpage/"},
    {title: "PDF to DOC", href: "https://isaiahnoelsalazar.github.io/pdf-to-doc/"},
    {title: "POS System", href: "#pos-system"},
    {title: "QR Generator", href: "https://isaiahnoelsalazar.github.io/qr-generator/"},
    {title: "QR Generator (Android 7.0+)", href: "https://isaiahnoelsalazar.github.io/qr-generator-download/"},
    {title: "Rainbow", href: "https://isaiahnoelsalazar.github.io/rainbow/"},
    {title: "React Web App", href: "https://react-web-app-six.vercel.app/"},
    {title: "saia_ProjectA (Android 6.0+)", href: "https://github.com/isaiahnoelsalazar/saia_ProjectA/"},
    {title: "sAP (Android 6.0+)", href: "https://github.com/isaiahnoelsalazar/sAP/"},
    {title: "sAPModule_OBXR (Android 6.0+)", href: "https://github.com/isaiahnoelsalazar/sAPModule_OBXR/"},
    {title: "sAPModule_QRGN (Android 6.0+)", href: "https://github.com/isaiahnoelsalazar/sAPModule_QRGN/"},
    {title: "sAPModule_QRSC (Android 6.0+)", href: "https://github.com/isaiahnoelsalazar/sAPModule_QRSC/"},
    {title: "sAPModule_SHPL (Android 6.0+)", href: "https://github.com/isaiahnoelsalazar/sAPModule_SHPL/"},
    {title: "Shopping List App (Android 7.0+)", href: "https://isaiahnoelsalazar.github.io/shoppinglist-download/"},
    {title: "Simple Field Checker (Android 7.0+)", href: "https://github.com/isaiahnoelsalazar/SimpleFieldChecker/"},
    {title: "Simple Web Calculator", href: "https://isaiahnoelsalazar.github.io/simple-web-calculator/"},
    {title: "Site", href: "https://isaiahnoelsalazar.github.io/site/"},
    {title: "SkillSwap (Android 7.0+)", href: "https://github.com/isaiahnoelsalazar/SkillSwap/"},
    {title: "SQuuLite (Android 7.0+)", href: "https://isaiahnoelsalazar.github.io/squulite-download/"},
    {title: "Student Registration App (Android 7.0+)", href: "https://isaiahnoelsalazar.github.io/studentregistrationapp-download/"},
    {title: "This website's old version", href: "https://isaiahnoelsalazar.github.io/my-website_old/"},
    {title: "Test Website", href: "https://isaiahnoelsalazar.github.io/test-website/"},
    {title: "Typey", href: "https://isaiahnoelsalazar.github.io/typey/"},
    {title: "Ulap (Android 7.0+)", href: "https://github.com/isaiahnoelsalazar/Ulap/"},
    {title: "Upload", href: "https://openweb.fwh.is/upload_index.php"},
    {title: "WebBook", href: "https://isaiahnoelsalazar.github.io/webbook/"},
    {title: "Web OTP", href: "https://isaiahnoelsalazar.github.io/web-otp/"},
    {title: "Website Observation 1 | School Work", href: "https://isaiahnoelsalazar.github.io/website-observation-1/"},
    {title: "Women with Baskets | School Work", href:"https://isaiahnoelsalazar.github.io/women-with-baskets/"},
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