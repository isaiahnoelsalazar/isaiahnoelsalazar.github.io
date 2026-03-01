class ECModal {
    constructor({title="Modal", content="Content", buttonAmount=1, buttonLabels=[], modalCurveAmount=12, modalButtonsCurveAmount=8, backgroundColor="white", color="black", darkMode=false} = {}) {
        this.darkMode = darkMode;
        this.modal = document.createElement("div");
        this.modal.classList.add("ecmodal", "position-absolute", "height-100%", "width-100%", "display-none", "backgroundColor-rgba(0,0,0,0.5)", "alignItems-center", "justifyContent-center");
        this.modal.innerHTML = `
        <div class="ecmodal-content animationFillMode-forwards animationDuration-0.2s backgroundColor-[${backgroundColor}] color-[${color}] minWidth-300px padding-16px borderRadius-${modalCurveAmount}px position-relative eclistv">
            <div class="ecmodal-header eclisth alignItems-center justifyContent-[space-between] width-100% borderBottom-[solid_#eee_1px] paddingBottom-8px marginBottom-8px">
                <h3 class="margin-0">${title}</h3>
                <a class="ecmodal-close close-button ecbounceanimation-5 width-24px height-24px alignItems-center justifyContent-center display-flex borderRadius-8px backgroundColor-#eee hover:backgroundColor-#ddd color-black cursor-pointer" style="user-select: none; -webkit-user-select: none; -ms-user-select: none;">&times;</a>
            </div>
            <div class="ecmodal-body eclisth margin-[8px_0]">
                <p class="margin-0">${content}</p>
            </div>
            <div class="ecmodal-footer eclisthf-${modalButtonsCurveAmount} marginTop-8px justifyContent-end gap-4px">
            </div>
        </div>`;
        for (let a = 0; a < buttonAmount; a++) {
            this.modal.querySelector(".ecmodal-footer").insertAdjacentHTML("beforeend", `<a class="ecmodal-button${a+1} ecbounceanimation-5 padding-[12px_16px] backgroundColor-#1f1f1f hover:backgroundColor-#3f3f3f color-white cursor-pointer" style="user-select: none; -webkit-user-select: none; -ms-user-select: none;">${buttonLabels[a] || `Button ${a+1}`}</a>`);
        }
        document.body.appendChild(this.modal);
        this.closeButton = this.modal.querySelector('.close-button');
        this.closeButton.addEventListener('click', () => this.hide());
        let style = document.createElement("style");
        style.textContent = `
        @keyframes ecmodal-bounce {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
        }
        @keyframes ecmodal-fade {
            0% { opacity: 1; }
            100% { opacity: 0; }
        }
        .ecmodal-dark {
            background-color: #0f0f0f !important;
            color: white !important;
        }
        .ecmodal-dark .ecmodal-header {
            border-bottom-color: #1f1f1f !important;
        }
        .ecmodal-dark .close-button {
            background-color: #1f1f1f !important;
            color: white !important;
        }
        .ecmodal-dark .close-button:hover {
            background-color: #2f2f2f !important;
        }
        .ecmodal-dark .ecmodal-footer a {
            background-color: #1f1f1f !important;
            color: white !important;
        }
        .ecmodal-dark .ecmodal-footer a:hover {
            background-color: #2f2f2f !important;
        }`;
        document.body.appendChild(style);
    }
    setTitle(newTitle) {
        const header = this.modal.querySelector('.ecmodal-header h3');
        header.textContent = newTitle;
    }
    setContent(newContent) {
        const body = this.modal.querySelector('.ecmodal-body');
        body.innerHTML = `<p class="margin-0">${newContent}</p>`;
    }
    setButtonAction(buttonIndex, callback) {
        const button = this.modal.querySelector(`.ecmodal-button${buttonIndex}`);
        if (button) {
            button.addEventListener('click', callback);
        }
    }
    resetButtons({buttonAmount=1, buttonLabels=[]} = {}) {
        this.removeButtons();
        for (let a = 0; a < buttonAmount; a++) {
            this.addButton({label: buttonLabels[a]});
        }
    }
    addButton({index, label} = {}) {
        const footer = this.modal.querySelector('.ecmodal-footer');
        const buttonIndex = index || footer.children.length + 1;
        footer.insertAdjacentHTML("beforeend", `<a class="ecmodal-button${buttonIndex} ecbounceanimation-5 padding-[12px_16px] ${this.darkMode ? "backgroundColor-#1f1f1f hover:backgroundColor-#2f2f2f color-white" : "backgroundColor-#1f1f1f hover:backgroundColor-#3f3f3f color-white"} cursor-pointer" style="user-select: none; -webkit-user-select: none; -ms-user-select: none;">${label || `Button ${buttonIndex}`}</a>`);
    }
    removeButtons() {
        const footer = this.modal.querySelector('.ecmodal-footer');
        footer.innerHTML = '';
    }
    removeButton(buttonIndex) {
        const button = this.modal.querySelector(`.ecmodal-button${buttonIndex}`);
        if (button) {
            button.remove();
        }
    }
    enableDarkMode(){
        this.darkMode = true;
        this.modal.querySelector(".ecmodal-content").classList.add("ecmodal-dark");
    }
    disableDarkMode(){
        this.darkMode = false;
        this.modal.querySelector(".ecmodal-content").classList.remove("ecmodal-dark");
    }
    show() {
        this.modal.style.display = 'flex';
        this.modal.querySelector('.ecmodal-content').style.animationName = "ecmodal-bounce";
    }
    hide() {
        this.modal.querySelector('.ecmodal-content').style.animationName = "ecmodal-fade";
        setTimeout(() => {
            this.modal.style.display = 'none';
        }, 200);
    }
}

class ECToggle {
    constructor({content="Content", click=null} = {}) {
        this.toggle = document.createElement("div");
        this.toggle.classList.add("ectoggle", "eclisth", "justifyContent-[space-between]", "width-100%", "alignItems-center");
        this.toggle.innerHTML = `
        <style>
            input:checked + .slider {
                background-color: green;
            }
            input:checked + .slider:before {
                transform: translateX(26px);
            }
        </style>
        <p>${content}</p>
        <label class="switch position-relative display-inline-block width-60px height-34px">
            <input class="opacity-0 width-0 height-0" type="checkbox" id="toggle">
            <span class="slider position-absolute top-0 left-0 right-0 bottom-0 backgroundColor-#ccc cursor-pointer transition-0.4s borderRadius-34px before:position-absolute before:transition-0.4s before:left-4px before:bottom-4px before:width-26px before:height-26px before:backgroundColor-white before:borderRadius-50% before:content-['']"></span>
        </label>`;
        if (click) {
            this.toggle.querySelector(".slider").setAttribute("onclick", click);
        }
    }
    setToggleState(state){
        this.toggle.querySelector("input").checked = state;
    }
    getToggleState(){
        return this.toggle.querySelector("input").checked;
    }
    add(){
        document.body.appendChild(this.toggle);
    }
    getToggleHTML(){
        return this.toggle.outerHTML;
    }
}