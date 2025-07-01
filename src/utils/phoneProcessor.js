/**
 * Utilitários para processamento de números de telefone
 */

/**
 * Remove todos os caracteres não numéricos de uma string
 * @param {string} phone - Número de telefone com formatação
 * @returns {string} Apenas os dígitos do número
 */
export function cleanPhoneNumber(phone) {
    if (typeof phone !== 'string') return '';
    return phone.replace(/\D/g, '');
}

/**
 * Processa e formata o número de telefone para o padrão brasileiro
 * @param {string} phone - Número de telefone em qualquer formato
 * @returns {string|null} Número processado ou null se inválido
 */
export function processPhoneNumber(phone) {
    const cleanPhone = cleanPhoneNumber(phone);

    if (cleanPhone.length === 0) {
        return null;
    }

    let processedPhone = cleanPhone;

    // Se o número já começa com 55 (código do Brasil)
    if (cleanPhone.startsWith('55')) {
        processedPhone = cleanPhone;
    }
    // Se o número tem 11 dígitos (DDD + 9 dígitos do celular)
    else if (cleanPhone.length === 11) {
        processedPhone = '55' + cleanPhone;
    }
    // Se o número tem 10 dígitos (DDD + 8 dígitos do celular - formato antigo)
    else if (cleanPhone.length === 10) {
        const ddd = cleanPhone.substring(0, 2);
        const numero = cleanPhone.substring(2);
        processedPhone = '55' + ddd + '9' + numero;
    }
    // Se o número tem 9 dígitos (sem DDD, apenas o celular)
    else if (cleanPhone.length === 9) {
        processedPhone = '5511' + cleanPhone;
    }
    // Se o número tem 8 dígitos (sem DDD, formato antigo)
    else if (cleanPhone.length === 8) {
        processedPhone = '55119' + cleanPhone;
    }
    // Para números com mais de 13 dígitos, assume que já está completo
    else if (cleanPhone.length >= 12) {
        processedPhone = cleanPhone;
    }
    // Para outros casos, adiciona o código do país
    else {
        processedPhone = '55' + cleanPhone;
    }

    return processedPhone;
}

/**
 * Valida se um número de telefone tem o tamanho mínimo aceitável
 * @param {string} phone - Número de telefone
 * @returns {boolean} True se válido
 */
export function isValidPhoneLength(phone) {
    const cleanPhone = cleanPhoneNumber(phone);
    return cleanPhone.length >= 8;
}

/**
 * Formata o número processado para exibição amigável
 * @param {string} processedPhone - Número já processado
 * @returns {string} Número formatado para exibição
 */
export function formatPhoneDisplay(processedPhone) {
    if (!processedPhone) return '';

    let displayPhone = processedPhone;
    if (displayPhone.startsWith('55')) {
        displayPhone = displayPhone.substring(2);
    }

    if (displayPhone.length >= 11) {
        const ddd = displayPhone.substring(0, 2);
        const firstPart = displayPhone.substring(2, 7);
        const secondPart = displayPhone.substring(7);
        return `+55 (${ddd}) ${firstPart}-${secondPart}`;
    } else if (displayPhone.length >= 10) {
        const ddd = displayPhone.substring(0, 2);
        const firstPart = displayPhone.substring(2, 6);
        const secondPart = displayPhone.substring(6);
        return `+55 (${ddd}) ${firstPart}-${secondPart}`;
    }

    return `+55 ${displayPhone}`;
}
