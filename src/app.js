/**
 * Aplicação principal - Gerador de Link WhatsApp
 */

import { Header } from './components/Header.js';
import { PhoneInput } from './components/PhoneInput.js';
import { GenerateButton } from './components/GenerateButton.js';
import { ResultDisplay } from './components/ResultDisplay.js';
import { ErrorNotification } from './components/ErrorNotification.js';
import {
    generateWhatsAppLink,
    openWhatsAppLink,
} from './services/whatsappService.js';
import {
    isValidPhoneLength,
    processPhoneNumber,
    formatPhoneDisplay,
} from './utils/phoneProcessor.js';

/**
 * Classe principal da aplicação
 */
export class WhatsAppGenerator {
    constructor() {
        this.initializeDOM();
        this.initializeComponents();
        this.bindEvents();
        this.setupInitialFocus();
    }

    initializeDOM() {
        document.querySelector('#app').innerHTML = `
      <div class="container">
        <div class="card">
          <div id="header-container"></div>
          <div id="phone-input-container"></div>
          <div id="generate-button-container"></div>
          <div id="result-container"></div>                    
        </div>
      </div>
      
    `;

        this.card = document.querySelector('.card');
    }

    initializeComponents() {
        // Inicializa componentes
        this.header = new Header('header-container');

        this.phoneInput = new PhoneInput('phone-input-container');

        this.generateButton = new GenerateButton('generate-button-container');

        this.resultDisplay = new ResultDisplay('result-container');

        this.errorNotification = new ErrorNotification(this.card);
    }

    bindEvents() {
        // Eventos do input
        this.phoneInput
            .onInput(() => {
                this.resultDisplay.hide();
            })
            .onEnter(() => {
                this.handleGenerate();
            });

        // Evento do botão
        this.generateButton.onClick(() => {
            this.handleGenerate();
        });
    }

    setupInitialFocus() {
        this.phoneInput.focus();
    }

    handleGenerate() {
        const phone = this.phoneInput.getValue();

        // Validações
        if (!phone) {
            this.errorNotification.show(
                'Por favor, digite um número de telefone'
            );
            return;
        }

        if (!isValidPhoneLength(phone)) {
            this.errorNotification.show(
                'Número muito curto. Digite um número válido'
            );
            return;
        }

        // Processa o número e gera o link
        const whatsappLink = generateWhatsAppLink(phone);
        const processedPhone = processPhoneNumber(phone);

        if (whatsappLink && processedPhone) {
            const formattedPhone = formatPhoneDisplay(processedPhone);

            // Exibe o resultado
            this.resultDisplay.show(whatsappLink, formattedPhone);

            // Abre o link do WhatsApp
            openWhatsAppLink(whatsappLink);
        } else {
            this.errorNotification.show(
                'Erro ao processar o número. Verifique o formato'
            );
        }
    }
}
