let randomNumber = Math.floor(Math.random() * 9) + 1;
let mainHeader = document.getElementById("main-header");
if (randomNumber == 7){
    mainHeader.textContent = "This is not what you are looking for.";
}