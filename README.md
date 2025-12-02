# 🚀 Landing Page React

Uma landing page moderna, responsiva e totalmente acessível construída com React e Vite.

## ✨ Características

- **100% Responsivo** - Otimizado para mobile, tablet e desktop
- **Acessibilidade Completa** - Navegação por teclado, leitores de tela, ARIA labels
- **Performance Otimizada** - Carregamento rápido e animações suaves
- **SEO Ready** - Meta tags, Open Graph, estrutura semântica
- **Design Moderno** - Gradientes, sombras e transições elegantes

## 🛠️ Tecnologias Utilizadas

- **React 18** - Biblioteca de interface
- **Vite 4.5.3** - Build tool e dev server
- **CSS3** - Estilos modernos com variáveis CSS
- **HTML5 Semântico** - Estrutura acessível

## 🚀 Como Executar

### Pré-requisitos
- Node.js 20.9.0+ (compatível com a versão atual)
- npm ou yarn

### Instalação e Execução

1. **Instalar dependências:**
   ```bash
   npm install
   ```

2. **Executar em modo desenvolvimento:**
   ```bash
   npm run dev
   ```

3. **Acessar no navegador:**
   ```
   http://localhost:5173
   ```

## 📱 Recursos Mobile

- Menu hambúrguer animado
- Layout adaptativo
- Touch-friendly buttons
- Navegação otimizada
- Carregamento rápido

## ♿ Acessibilidade

- Navegação completa por teclado
- Suporte a leitores de tela
- Contraste WCAG AA
- Foco visível
- Skip links
- ARIA labels apropriados

## 🎨 Personalização

### Cores
Edite as variáveis CSS em `src/index.css`:
```css
:root {
  --primary-color: #667eea;
  --secondary-color: #764ba2;
  --accent-color: #ffd700;
  /* ... */
}
```

### Conteúdo
- **Header**: Edite `src/components/Header.jsx`
- **Hero**: Edite `src/components/Hero.jsx`
- **Serviços**: Edite `src/components/Services.jsx`

### Imagens
Substitua o placeholder na seção Hero por sua imagem:
```jsx
// Em src/components/Hero.jsx
<div className="image-placeholder">
  <img src="sua-imagem.jpg" alt="Descrição" />
</div>
```

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── Header.jsx          # Cabeçalho com navegação
│   ├── Header.css          # Estilos do cabeçalho
│   ├── Hero.jsx            # Seção principal
│   ├── Hero.css            # Estilos da seção hero
│   ├── Services.jsx        # Seção de serviços
│   └── Services.css        # Estilos dos serviços
├── App.jsx                 # Componente principal
├── App.css                 # Estilos globais da app
├── index.css               # Reset e variáveis CSS
└── main.jsx                # Ponto de entrada
```

## 🔧 Scripts Disponíveis

- `npm run dev` - Servidor de desenvolvimento
- `npm run build` - Build para produção
- `npm run preview` - Preview do build de produção

## 🌐 Deploy

Para fazer deploy em produção:

1. **Build do projeto:**
   ```bash
   npm run build
   ```

2. **Upload da pasta `dist/` para seu servidor**

## 📞 Suporte

Se encontrar algum problema:

1. Verifique se o Node.js está na versão correta
2. Delete `node_modules` e `package-lock.json`
3. Execute `npm install` novamente
4. Execute `npm run dev`

---

**Desenvolvido com ❤️ para máxima acessibilidade e performance**