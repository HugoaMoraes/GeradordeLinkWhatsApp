/**
 * Componente para notificações de erro
 */

export class ErrorNotification {
    constructor(parentElement) {
        this.parent = parentElement;
        this.currentError = null;
    }

    show(message, duration = 3000) {
        // Remove erro anterior se existir
        this.hide();

        // Cria nova notificação
        this.currentError = document.createElement('div');
        this.currentError.className = 'error-message';
        this.currentError.textContent = message;

        this.parent.appendChild(this.currentError);

        // Remove automaticamente após o tempo especificado
        setTimeout(() => {
            this.hide();
        }, duration);
    }

    hide() {
        if (this.currentError) {
            this.currentError.remove();
            this.currentError = null;
        }
    }
}
