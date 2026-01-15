let randomNumber = Math.floor(Math.random() * 9) + 1;
let mainHeader = document.getElementById("main-header");
if (randomNumber == 7){
    mainHeader.textContent = "This is not what you are looking for.";
}

const menuToggle = document.getElementById('menu-toggle');
const sidebar = document.getElementById('sidebar');

menuToggle.addEventListener('click', () => {
    sidebar.classList.toggle('active');
    
    if (sidebar.classList.contains('active')) {
        menuToggle.innerHTML = "✕ Close";
    } else {
        menuToggle.innerHTML = "☰ Menu";
    }
});