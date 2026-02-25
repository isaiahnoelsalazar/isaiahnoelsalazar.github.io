class ECModal {
    constructor({title="Modal", content="Content", buttonAmount=1} = {}) {
        this.modal = document.createElement("div");
        this.modal.classList.add("ecmodal", "position-absolute", "height-100%", "width-100%", "display-flex", "backgroundColor-rgba(0,0,0,0.5)", "alignItems-center", "justifyContent-center");
        this.modal.innerHTML = `
        <div class="ecmodal-content backgroundColor-white minWidth-300px padding-16px borderRadius-12px position-relative eclistv">
            <div class="ecmodal-header eclisth alignItems-center justifyContent-[space-between] width-100% borderBottom-[solid_#eee_1px] paddingBottom-8px marginBottom-8px">
                <h3 class="margin-0">${title}</h3>
                <a class="ecmodal-close close-button ecbounceanimation-5 width-24px height-24px alignItems-center justifyContent-center display-flex borderRadius-8px backgroundColor-#eee hover:backgroundColor-#ddd color-black cursor-pointer">&times;</a>
            </div>
            <div class="ecmodal-body eclisth margin-[8px_0]">
                <p class="margin-0">${content}</p>
            </div>
            <div class="ecmodal-footer eclisthf-8 marginTop-8px justifyContent-end">
            </div>
        </div>`;
        for (let a = 0; a < buttonAmount; a++) {
            this.modal.querySelector(".ecmodal-footer").insertAdjacentHTML("beforeend", `<a class="ecmodal-button ecbounceanimation-5 padding-[12px_16px] backgroundColor-#1f1f1f hover:backgroundColor-#3f3f3f color-white cursor-pointer">Button ${a+1}</a>`);
        }
        document.body.appendChild(this.modal);
        this.closeButton = this.modal.querySelector('.close-button');
        this.closeButton.addEventListener('click', () => this.hide());
    }
    show() {
        this.modal.style.display = 'flex';
    }
    hide() {
        this.modal.style.display = 'none';
    }
}