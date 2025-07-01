/**
 * Utilitários para operações de clipboard
 */

/**
 * Copia texto para o clipboard usando a API moderna ou fallback
 * @param {string} text - Texto a ser copiado
 * @returns {Promise<boolean>} True se copiado com sucesso
 */
export async function copyToClipboard(text) {
    try {
        // Tenta usar a API moderna do clipboard
        if (navigator.clipboard && window.isSecureContext) {
            await navigator.clipboard.writeText(text);
            return true;
        }

        // Fallback para navegadores mais antigos
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();

        const success = document.execCommand('copy');
        document.body.removeChild(textArea);

        return success;
    } catch (error) {
        console.error('Erro ao copiar para o clipboard:', error);
        return false;
    }
}
