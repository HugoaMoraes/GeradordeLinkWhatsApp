/**
 * Ponto de entrada da aplicação
 */

import './style.css';
import { WhatsAppGenerator } from './src/app.js';

// Inicializa a aplicação quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', () => {
    new WhatsAppGenerator();
});

// Fallback para casos onde o DOMContentLoaded já foi disparado
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        new WhatsAppGenerator();
    });
} else {
    new WhatsAppGenerator();
}
