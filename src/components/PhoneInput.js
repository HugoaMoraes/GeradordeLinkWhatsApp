/**
 * Componente de input para número de telefone
 */

export class PhoneInput {
    constructor(containerId, options = {}) {
        this.container = document.getElementById(containerId);
        this.options = {
            placeholder: '+55 65 8463-0971 ou (11) 91234-5678',
            maxLength: 25,
            label: 'Número do Celular',
            hint: 'Aceita qualquer formato: +55, DDD, espaços, traços, parênteses',
            ...options,
        };

        this.callbacks = {
            onInput: null,
            onEnter: null,
        };

        this.render();
        this.bindEvents();
    }

    render() {
        this.container.innerHTML = `
      <div class="form-group">
        <label for="phone-input">${this.options.label}</label>
        <input 
          type="text" 
          id="phone-input" 
          placeholder="${this.options.placeholder}"
          maxlength="${this.options.maxLength}"
        />
        <div class="input-hint">
          ${this.options.hint}
        </div>
      </div>
    `;

        this.input = this.container.querySelector('#phone-input');
    }

    bindEvents() {
        this.input.addEventListener('input', (e) => {
            if (this.callbacks.onInput) {
                this.callbacks.onInput(e.target.value);
            }
        });

        this.input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && this.callbacks.onEnter) {
                this.callbacks.onEnter(e.target.value);
            }
        });
    }

    getValue() {
        return this.input.value.trim();
    }

    focus() {
        this.input.focus();
    }

    onInput(callback) {
        this.callbacks.onInput = callback;
        return this;
    }

    onEnter(callback) {
        this.callbacks.onEnter = callback;
        return this;
    }
}
