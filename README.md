# CountMoney - Calculadora de Dinheiro Moderna 💰

Uma aplicação PWA (Progressive Web App) moderna e responsiva para calcular diferentes denominações de dinheiro com um design elegante e UX aprimorada.

![CountMoney](https://img.shields.io/badge/CountMoney-PWA-blue)
![React](https://img.shields.io/badge/React-19.0-61dafb)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178c6)
![Vite](https://img.shields.io/badge/Vite-6.3-646cff)

## ✨ Características Principais

### 🎨 Design Moderno
- **Paleta de cores 2024-2025**: Cores vibrantes e modernas baseadas em tendências atuais
- **Glass Morphism**: Efeitos de vidro e transparência para uma aparência sofisticada
- **Gradientes dinâmicos**: Animações sutis e transições suaves
- **Dark/Light Mode**: Alternância perfeita entre temas escuro e claro

### 📱 Responsividade Avançada
- **Mobile First**: Otimizado prioritariamente para dispositivos móveis
- **Breakpoints modernos**: Suporte completo para xs, sm, md, lg, xl, 2xl
- **Touch Friendly**: Botões e áreas de toque otimizadas para dedos
- **Feedback tátil**: Vibração sutil em dispositivos móveis compatíveis

### 🔧 PWA (Progressive Web App)
- **Instalável**: Pode ser instalada como um app nativo
- **Offline Ready**: Funciona sem conexão com internet
- **Service Worker**: Cache inteligente para carregamento rápido
- **Manifest**: Configurado para aparecer como app nativo

### 🚀 Performance
- **Lazy Loading**: Componentes carregados sob demanda
- **Bundle Otimizado**: Código minificado e comprimido
- **CSS-in-JS**: Styled Components para estilos performáticos
- **TypeScript**: Tipagem estática para maior confiabilidade

## 🛠️ Tecnologias Utilizadas

### Core
- **React 19.0** - Framework principal
- **TypeScript 5.7** - Tipagem estática
- **Vite 6.3** - Build tool moderna e rápida
- **Styled Components 6.1** - CSS-in-JS

### PWA & Build
- **Vite PWA Plugin** - Configuração automática de PWA
- **Workbox** - Service Worker e cache strategies
- **Web App Manifest** - Configuração de instalação

### Funcionalidades
- **i18next** - Internacionalização
- **React Helmet** - Meta tags dinâmicas
- **Geolocation API** - Detecção de localização

## 🎯 Funcionalidades

### Calculadora Principal
- ✅ Cálculo automático de totais
- ✅ Denominações brasileiras (R$ 200 até R$ 0,01)
- ✅ Interface intuitiva com feedback visual
- ✅ Botões de limpeza individual e geral
- ✅ Formatação automática de moeda

### Interface Moderna
- ✅ Header com localização automática
- ✅ Toggle dark/light mode
- ✅ Footer informativo
- ✅ Banner de cookies LGPD compliant
- ✅ Animações e transições suaves

### Acessibilidade
- ✅ Navegação por teclado
- ✅ Screen reader friendly
- ✅ Alto contraste
- ✅ Focus indicators visíveis
- ✅ ARIA labels apropriados

## 🚀 Como Executar

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn

### Instalação
```bash
# Clone o repositório
git clone [url-do-repositorio]

# Entre no diretório
cd countmoney

# Instale as dependências
npm install

# Execute em modo desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview da build
npm run preview
```

### Scripts Disponíveis
```bash
npm run dev          # Servidor de desenvolvimento
npm run build        # Build para produção
npm run build:pwa    # Build PWA otimizada
npm run preview      # Preview da build
npm run lint         # Análise de código
```

## 📱 Instalação como PWA

### Android
1. Abra a aplicação no Chrome
2. Toque no menu (⋮) 
3. Selecione "Instalar aplicativo"
4. Confirme a instalação

### iOS (Safari)
1. Abra a aplicação no Safari
2. Toque no botão de compartilhar
3. Selecione "Adicionar à Tela de Início"
4. Confirme a adição

### Desktop
1. Abra a aplicação no Chrome/Edge
2. Clique no ícone de instalação na barra de endereços
3. Confirme a instalação

## 🎨 Sistema de Cores

### Paleta Principal
```css
/* Primary - Roxo vibrante */
--primary-500: #6366f1
--primary-600: #4f46e5
--primary-700: #4338ca

/* Secondary - Verde moderno */
--secondary-500: #22c55e
--secondary-600: #16a34a

/* Accent - Laranja energético */
--accent-500: #f97316
--accent-600: #ea580c

/* Neutral - Cinzas equilibrados */
--neutral-50: #fafafa
--neutral-900: #171717
```

### Gradientes
- **Primary**: `linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #a855f7 100%)`
- **Dark**: `linear-gradient(135deg, #1e293b 0%, #0f172a 100%)`
- **Glass**: `linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)`

## 📐 Breakpoints Responsivos

```css
xs: 475px   /* Smartphones pequenos */
sm: 640px   /* Smartphones */
md: 768px   /* Tablets */
lg: 1024px  /* Laptops */
xl: 1280px  /* Desktops */
2xl: 1536px /* Telas grandes */
```

## 🌟 Melhorias Implementadas

### Design & UX
- [x] Paleta de cores moderna (2024-2025)
- [x] Glass morphism effects
- [x] Animações e micro-interactions
- [x] Dark/Light mode aprimorado
- [x] Typography melhorada (Inter font)

### Responsividade
- [x] Mobile-first approach
- [x] Breakpoints otimizados
- [x] Touch targets adequados
- [x] Viewport otimizado
- [x] Orientação portrait/landscape

### PWA
- [x] Service Worker configurado
- [x] Web App Manifest
- [x] Ícones para todas as plataformas
- [x] Offline functionality
- [x] Install prompts

### Performance
- [x] Bundle size otimizado
- [x] Lazy loading
- [x] Tree shaking
- [x] CSS crítico inline
- [x] Compressão gzip

### Acessibilidade
- [x] ARIA labels
- [x] Navegação por teclado
- [x] Alto contraste
- [x] Screen reader support
- [x] Focus management

## 🔮 Próximas Funcionalidades

- [ ] Múltiplas moedas (USD, EUR, etc.)
- [ ] Histórico de cálculos
- [ ] Export/Import de dados
- [ ] Calculadora de troco
- [ ] Temas customizáveis
- [ ] Compartilhamento de resultados
- [ ] Modo landscape otimizado
- [ ] Sincronização na nuvem

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 🤝 Contribuições

Contribuições são bem-vindas! Por favor:

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📞 Suporte

Se você encontrar algum problema ou tiver sugestões:

- Abra uma [issue](../../issues)
- Entre em contato via email
- Acesse nossa [documentação](../../wiki)

---

**Moncoy** - Calculando o futuro, uma moeda de cada vez! 💰✨
