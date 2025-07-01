<div align="center">
<img src="https://github.com/HugoaMoraes/IconDigital/assets/102623594/a6c43865-6821-472b-9c05-65878d4e8780" width="200px" />
</div>

# Gerador de Link WhatsApp

Uma aplicação web moderna e responsiva para gerar links diretos do WhatsApp a partir de números de telefone em qualquer formato.

## Autor

-   [@hugo.amoraes](https://github.com/HugoaMoraes)

## Versão

`v.1.0.0`

## Links

<div align="center">
  <a href="https://linktr.ee/hug.odesign" target="_blank">
    <img src="https://img.shields.io/static/v1?message=Linktree&logo=linktree&label=&color=1de9b6&logoColor=white&labelColor=&style=for-the-badge" height="25" alt="linktree logo"  />
  </a>
  <a href="https://www.linkedin.com/in/hugoamoraes/" target="_blank">
    <img src="https://img.shields.io/static/v1?message=LinkedIn&logo=linkedin&label=&color=0077B5&logoColor=white&labelColor=&style=for-the-badge" height="25" alt="linkedin logo"  />
  </a>
  <a href="https://api.whatsapp.com/send?phone=5561986391903" target="_blank">
    <img src="https://img.shields.io/static/v1?message=Whatsapp&logo=whatsapp&label=&color=25D366&logoColor=white&labelColor=&style=for-the-badge" height="25" alt="whatsapp logo"  />
  </a>
  <a href="https://www.instagram.com/hugo.amoraes/" target="_blank">
    <img src="https://img.shields.io/static/v1?message=Instagram&logo=instagram&label=&color=E4405F&logoColor=white&labelColor=&style=for-the-badge" height="25" alt="instagram logo"  />
  </a>
</div>

## 🚀 Funcionalidades

-   **Processamento Inteligente**: Aceita números em qualquer formato (+55, DDD, espaços, traços, parênteses)
-   **Validação Robusta**: Valida e corrige automaticamente números de telefone brasileiros
-   **Interface Moderna**: Design responsivo com animações suaves e feedback visual
-   **Cópia Rápida**: Botão para copiar o link gerado com feedback visual
-   **Abertura Automática**: Abre automaticamente o WhatsApp em nova aba
-   **Acessibilidade**: Suporte completo a navegação por teclado e leitores de tela

## 🏗️ Arquitetura

O projeto segue uma arquitetura modular e princípios de clean code:

```
src/
├── components/          # Componentes reutilizáveis
│   ├── Header.js
│   ├── PhoneInput.js
│   ├── GenerateButton.js
│   ├── ResultDisplay.js
│   └── ErrorNotification.js
├── services/           # Serviços de negócio
│   └── whatsappService.js
├── utils/             # Utilitários e helpers
│   ├── phoneProcessor.js
│   └── clipboard.js
└── app.js            # Aplicação principal
```

## 🛠️ Tecnologias

-   **HTML5**: Estrutura semântica
-   **CSS3**: Estilização moderna com variáveis CSS e grid/flexbox
-   **JavaScript ES6+**: Módulos, classes e async/await
-   **Vite**: Build tool e dev server

## 📱 Exemplos de Uso

A aplicação processa automaticamente diferentes formatos:

-   `+55 65 8463-0971` → `https://api.whatsapp.com/send?phone=556584630971`
-   `(11) 91234-5678` → `https://api.whatsapp.com/send?phone=5511912345678`
-   `11987654321` → `https://api.whatsapp.com/send?phone=5511987654321`
-   `987654321` → `https://api.whatsapp.com/send?phone=5511987654321`

## 🚀 Como Executar

### Desenvolvimento

```bash
npm install
npm run dev
```

### Produção

```bash
npm run build
npm run preview
```

## 🎨 Design System

O projeto utiliza um design system consistente com:

-   **Paleta de Cores**: Sistema de cores com 6 rampas principais
-   **Tipografia**: Hierarquia clara com 3 pesos máximos
-   **Espaçamento**: Sistema baseado em 8px
-   **Componentes**: Componentes reutilizáveis e modulares
-   **Responsividade**: Breakpoints otimizados para todos os dispositivos

## 🔧 Funcionalidades Técnicas

-   **Processamento de Números**: Algoritmo inteligente para diferentes formatos brasileiros
-   **Validação**: Validação robusta com feedback de erro
-   **Clipboard API**: Suporte moderno com fallback para navegadores antigos
-   **Acessibilidade**: ARIA labels, navegação por teclado e contraste adequado
-   **Performance**: Código otimizado e carregamento rápido

## Diagrama

<div align="center">
<img src="https://github.com/user-attachments/assets/202deae0-e36f-4a55-9f7b-6eccfa7c857a" width="auto" />
</div>

## Informações:

MVP em funcionamento!
