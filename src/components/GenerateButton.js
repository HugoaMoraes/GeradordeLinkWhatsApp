/**
 * Componente do botão de geração
 */

export class GenerateButton {
    constructor(containerId, options = {}) {
        this.container = document.getElementById(containerId);
        this.options = {
            text: 'Gerar Link do WhatsApp',
            icon: `<svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
      </svg>`,
            ...options,
        };

        this.callbacks = {
            onClick: null,
        };

        this.render();
        this.bindEvents();
    }

    render() {
        this.container.innerHTML = `
      <button id="generate-btn" type="button">
        <span class="btn-icon">
          ${this.options.icon}
        </span>
        ${this.options.text}
      </button>
    `;

        this.button = this.container.querySelector('#generate-btn');
    }

    bindEvents() {
        this.button.addEventListener('click', () => {
            if (this.callbacks.onClick) {
                this.callbacks.onClick();
            }
        });
    }

    onClick(callback) {
        this.callbacks.onClick = callback;
        return this;
    }

    setLoading(isLoading) {
        this.button.disabled = isLoading;
        if (isLoading) {
            this.button.classList.add('loading');
        } else {
            this.button.classList.remove('loading');
        }
    }
}
