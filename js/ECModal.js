class ECModal {
    constructor() {
        this.modal = document.createElement('div');
        this.modal.classList.add('modal');
        this.modal.innerHTML = `
        <div class="modal-content">
            <span class="close-button">&times;</span>
            <p>This is a modal!</p>
        </div>`;
        document.body.appendChild(this.modal);
        this.closeButton = this.modal.querySelector('.close-button');
        this.closeButton.addEventListener('click', () => this.hide());
    }
}