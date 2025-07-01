/**
 * Componente para exibição do resultado
 */

import { copyToClipboard } from '../utils/clipboard.js';

export class ResultDisplay {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.isVisible = false;

        this.render();
        this.bindEvents();
    }

    render() {
        this.container.innerHTML = `
      <div id="result" class="result hidden">
        <div class="result-content">
          <p>Link gerado com sucesso!</p>
          <div class="generated-link">
            <span id="generated-url"></span>
            <button id="copy-btn" type="button" title="Copiar link">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>
              </svg>
            </button>
          </div>
          <div class="phone-display">
            <small>Número processado: <span id="processed-phone"></span></small>
          </div>
        </div>
      </div>
    `;

        this.result = this.container.querySelector('#result');
        this.generatedUrl = this.container.querySelector('#generated-url');
        this.processedPhoneDisplay =
            this.container.querySelector('#processed-phone');
        this.copyBtn = this.container.querySelector('#copy-btn');
    }

    bindEvents() {
        this.copyBtn.addEventListener('click', async () => {
            const success = await copyToClipboard(
                this.generatedUrl.textContent
            );

            if (success) {
                this.showCopyFeedback();
            }
        });
    }

    show(link, processedPhone) {
        this.generatedUrl.textContent = link;
        this.processedPhoneDisplay.textContent = processedPhone;
        this.result.classList.remove('hidden');
        this.isVisible = true;

        // Scroll suave para o resultado
        this.result.scrollIntoView({ behavior: 'smooth' });
    }

    hide() {
        this.result.classList.add('hidden');
        this.isVisible = false;
    }

    showCopyFeedback() {
        const originalIcon = this.copyBtn.innerHTML;

        this.copyBtn.innerHTML = `
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
      </svg>
    `;

        setTimeout(() => {
            this.copyBtn.innerHTML = originalIcon;
        }, 2000);
    }
}
