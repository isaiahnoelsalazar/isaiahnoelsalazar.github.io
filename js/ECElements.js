class ECModal {
    constructor({title="Modal", content="Content", buttonAmount=1, buttonLabels=[], modalCurveAmount=12, modalButtonsCurveAmount=8, backgroundColor="white", color="#0f0f0f", darkMode=false} = {}) {
        this.darkMode = darkMode;
        this.instance_number = document.querySelectorAll(".ecmodal").length;
        this.modal = document.createElement("div");
        this.modal.classList.add("ecmodal", `ecmodalinstance${this.instance_number}`, "position-absolute", "height-100%", "width-100%", "display-none", "backgroundColor-rgba(0,0,0,0.5)", "alignItems-center", "justifyContent-center");
        this.modal.innerHTML = `
        <div class="ecmodal-content animationFillMode-forwards animationDuration-0.2s backgroundColor-[${backgroundColor}] color-[${color}] minWidth-300px padding-16px borderRadius-${modalCurveAmount}px position-relative eclistv">
            <div class="ecmodal-header eclisth alignItems-center justifyContent-[space-between] width-100% borderBottom-[solid_#eee_1px] paddingBottom-8px marginBottom-8px">
                <h3 class="margin-0">${title}</h3>
                <a class="ecmodal-close close-button ecbounceanimation-5 width-24px height-24px alignItems-center justifyContent-center display-flex borderRadius-8px backgroundColor-#eee hover:backgroundColor-#ddd color-#0f0f0f cursor-pointer" style="user-select: none; -webkit-user-select: none; -ms-user-select: none;">&times;</a>
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
        this.closeButton = this.modal.querySelector(`.ecmodalinstance${this.instance_number} .ecmodal-header .close-button`);
        this.closeButton.addEventListener('click', () => this.hide());
        document.body.appendChild(this.modal);
        if (this.instance_number == 0){
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
    }
    setTitle(newTitle) {
        const header = this.modal.querySelector('.ecmodal-header h3');
        header.textContent = newTitle;
    }
    setContent(newContent) {
        const body = this.modal.querySelector('.ecmodal-body');
        body.innerHTML = '';
        if (typeof newContent === "string") {
            body.innerHTML = `<p class="margin-0">${newContent}</p>`;
        } else {
            body.appendChild(newContent);
        }
    }
    addContent(newContent) {
        const body = this.modal.querySelector('.ecmodal-body');
        if (typeof newContent === "string") {
            body.innerHTML += `<p class="margin-0">${newContent}</p>`;
        } else {
            body.appendChild(newContent);
        }
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
            document.querySelector(`.ecmodalinstance${this.instance_number}`).style.display = 'none';
        }, 200);
    }
}

class ECToggle {
    constructor({content="Content", click=null, initialState=false} = {}) {
        this.instance_number = document.querySelectorAll(".ectoggle").length;
        if (this.instance_number == 0){
            let style = document.createElement("style");
            style.textContent = `
            .ectoggle input:checked + .slider {
                background-color: green;
            }
            .ectoggle input:checked + .slider:before {
                transform: translateX(26px);
            }`;
            document.body.appendChild(style);
        }
        this.toggle = document.createElement("div");
        this.toggle.classList.add("ectoggle", "eclisth", "justifyContent-[space-between]", "width-100%", "alignItems-center");
        this.toggle.innerHTML = `
        <p>${content}</p>
        <div class="switch position-relative display-inline-block width-60px height-34px">
            <input class="ectoggle-input opacity-0 width-0 height-0" type="checkbox">
            <span class="ectoggle-slider position-absolute top-0 left-0 right-0 bottom-0 backgroundColor-#ccc cursor-pointer transition-0.4s borderRadius-34px before:position-absolute before:transition-0.4s before:left-4px before:bottom-4px before:width-26px before:height-26px before:backgroundColor-white before:borderRadius-50% before:content-['']"></span>
        </div>`;
        const slider = this.toggle.querySelector(".ectoggle-slider");
        const input = this.toggle.querySelector(".ectoggle-input");
        slider.addEventListener("click", () => {
            input.checked = !input.checked;
        });
        if (click) {
            this.toggle.querySelector(".ectoggle-slider").setAttribute("onclick", click);
        }
        this.setToggleState(initialState);
    }
    build(){
        return this.toggle;
    }
    setToggleState(state){
        this.toggle.querySelector(".ectoggle-input").checked = state;
    }
    getToggleState(){
        return this.toggle.querySelector(".ectoggle-input").checked;
    }
}

class ECCheckbox {
    constructor({content="Content", click=null, initialState=false} = {}) {
        this.instance_number = document.querySelectorAll(".eccheckbox").length;
        if (this.instance_number == 0){
            let style = document.createElement("style");
            style.textContent = `
            .checkbox-wrapper-4 {
            	width: 100%;
            }
            .checkbox-wrapper-4 * {
                box-sizing: border-box;
            }
            .checkbox-wrapper-4 .cbx {
                -webkit-user-select: none;
                user-select: none;
                cursor: pointer;
                padding: 6px 8px;
                border-radius: 6px;
                overflow: hidden;
                transition: all 0.2s ease;
                display: flex;
                flex-direction: row-reverse;
                justify-content: space-between;
                width: 100%;
            }
            .checkbox-wrapper-4 .cbx:not(:last-child) {
                margin-right: 6px;
            }
            .checkbox-wrapper-4 .cbx:hover {
                background: rgba(0,119,255,0.06);
            }
            .checkbox-wrapper-4 .cbx span {
                float: left;
                vertical-align: middle;
                transform: translate3d(0, 0, 0);
            }
            .checkbox-wrapper-4 .cbx span:first-child {
                position: relative;
                width: 18px;
                height: 18px;
                border-radius: 4px;
                transform: scale(1);
                border: 1px solid #cccfdb;
                transition: all 0.2s ease;
                box-shadow: 0 1px 1px rgba(0,16,75,0.05);
            }
            .checkbox-wrapper-4 .cbx span:first-child svg {
                position: absolute;
                top: 3px;
                left: 2px;
                fill: none;
                stroke: #fff;
                stroke-width: 2;
                stroke-linecap: round;
                stroke-linejoin: round;
                stroke-dasharray: 16px;
                stroke-dashoffset: 16px;
                transition: all 0.3s ease;
                transition-delay: 0.1s;
                transform: translate3d(0, 0, 0);
            }
            .checkbox-wrapper-4 .cbx span:last-child {
                line-height: 18px;
            }
            .checkbox-wrapper-4 .cbx:hover span:first-child {
                border-color: #07f;
            }
            .checkbox-wrapper-4 .inp-cbx {
                position: absolute;
                visibility: hidden;
            }
            .checkbox-wrapper-4 .inp-cbx:checked + .cbx span:first-child {
                background: #07f;
                border-color: #07f;
                animation: wave-4 0.4s ease;
            }
            .checkbox-wrapper-4 .inp-cbx:checked + .cbx span:first-child svg {
                stroke-dashoffset: 0;
            }
            .checkbox-wrapper-4 .inline-svg {
                position: absolute;
                width: 0;
                height: 0;
                pointer-events: none;
                user-select: none;
            }
            @media screen and (max-width: 640px) {
                .checkbox-wrapper-4 .cbx {
                    width: 100%;
                    display: inline-block;
                }
            }
            @-moz-keyframes wave-4 {
                50% {
                transform: scale(0.9);
                }
            }
            @-webkit-keyframes wave-4 {
                50% {
                transform: scale(0.9);
                }
            }
            @-o-keyframes wave-4 {
                50% {
                transform: scale(0.9);
                }
            }
            @keyframes wave-4 {
                50% {
                transform: scale(0.9);
                }
            }`;
            document.body.appendChild(style);
        }
        this.checkbox = document.createElement("div");
        this.checkbox.classList.add("eccheckbox", "eclisth", "justifyContent-[space-between]", "width-100%", "alignItems-center");
        this.checkbox.innerHTML = `
        <div class="checkbox-wrapper-4">
            <input class="inp-cbx" id="morning" type="checkbox"/>
            <label class="cbx" for="morning"><span>
            <svg width="12px" height="10px">
                <use xlink:href="#check-4"></use>
            </svg></span><span>Morning</span></label>
            <svg class="inline-svg">
                <symbol id="check-4" viewbox="0 0 12 10">
                <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                </symbol>
            </svg>
        </div>`;
        if (click) {
            this.checkbox.querySelector(".switch").setAttribute("onclick", click);
        }
        this.setToggleState(initialState);
    }
    build(){
        return this.checkbox;
    }
    setToggleState(state){
        this.checkbox.querySelector("input").checked = state;
    }
    getToggleState(){
        return this.checkbox.querySelector("input").checked;
    }
}