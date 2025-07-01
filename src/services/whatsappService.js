/**
 * Serviço para geração de links do WhatsApp
 */

import { processPhoneNumber } from '../utils/phoneProcessor.js';

/**
 * Gera um link do WhatsApp para o número fornecido
 * @param {string} phone - Número de telefone em qualquer formato
 * @returns {string|null} URL do WhatsApp ou null se inválido
 */
export function generateWhatsAppLink(phone) {
    const processedPhone = processPhoneNumber(phone);

    if (!processedPhone) {
        return null;
    }

    return `https://api.whatsapp.com/send?phone=${processedPhone}`;
}

/**
 * Abre o link do WhatsApp em uma nova aba
 * @param {string} link - URL do WhatsApp
 */
export function openWhatsAppLink(link) {
    if (link) {
        window.open(link, '_blank', 'noopener,noreferrer');
    }
}
