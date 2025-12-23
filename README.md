<div align="center">

# 🍔 DevBurger

### Cardápio Digital com React

[![React](https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![Styled Components](https://img.shields.io/badge/Styled--Components-5.x-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)](https://styled-components.com/)
[![React Router](https://img.shields.io/badge/React_Router-6.x-CA4245?style=for-the-badge&logo=react-router&logoColor=white)](https://reactrouter.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](LICENSE)

Uma aplicação web moderna desenvolvida em **React**, voltada para o **gerenciamento de um cardápio digital de hamburgueria** com funcionalidades de **e-commerce**.
O projeto oferece uma experiência completa de navegação, autenticação e gerenciamento de carrinho, sendo uma excelente demonstração de boas práticas em frontend moderno.

[🚀 Demo](#-demonstração) • [✨ Features](#-principais-características) • [🛠️ Tecnologias](#️-tecnologias-utilizadas) • [📦 Instalação](#-instalação) • [👨‍💻 Autor](#-autor)

</div>

---

## 🎬 Demonstração

https://github.com/user-attachments/assets/a55c65cd-8fed-4159-b6f5-d37a56e7c87b

---

## 📑 Índice

- [Principais Características](#-principais-características)
- [Demonstração](#-demonstração)
- [Tecnologias Utilizadas](#️-tecnologias-utilizadas)
- [Estrutura de Pastas](#-estrutura-de-pastas)
- [Pré-requisitos](#-pré-requisitos)
- [Instalação](#-instalação)
- [Variáveis de Ambiente](#-variáveis-de-ambiente)
- [Fluxo do Usuário](#-fluxo-do-usuário)
- [Objetivo do Projeto](#-objetivo-do-projeto)
- [Próximas Implementações](#-próximas-implementações)
- [Contribuindo](#-contribuindo)
- [Licença](#-licença)
- [Autor](#-autor)

---

## 🚀 Principais Características

- **Frontend em React** — Estruturado com componentes funcionais e hooks modernos.
- **Styled-components** — Estilização modular e responsiva, garantindo um visual moderno.
- **Gerenciamento de Estado com Context API** — Controle global do usuário e do carrinho de compras.
- **Roteamento com React Router DOM** — Navegação fluida entre as páginas da aplicação.
- **Carrinho de Compras Completo** — Adição, remoção, alteração de quantidades e persistência no localStorage.
- **Autenticação de Usuário** — Telas de login e cadastro integradas.
- **Organização Modular** — Componentes reutilizáveis para botões, cards, carrosséis, header, footer e mais.
- **Consumo de API** — Integração com backend para listagem de produtos e categorias.
- **Layout Responsivo** — Interface adaptável para diferentes tamanhos de tela.

---

## 🧱 Estrutura de Pastas

```
src/
├── assets/          # Imagens e SVGs utilizados na interface
├── components/      # Componentes reutilizáveis (botões, cards, carrosséis, header, footer)
├── containers/      # Páginas principais (Home, Login, Menu, Cart, Register)
├── hooks/           # Contextos de usuário e carrinho
├── routes/          # Definição das rotas da aplicação
├── services/        # Configuração e consumo da API
├── styles/          # Estilos globais
└── utils/           # Funções utilitárias (ex: formatação de preço)
```

---

## 🧭 Fluxo do Usuário

- **Home:** Exibe ofertas e categorias principais.
- **Login / Register:** Autenticação de usuários.
- **Menu:** Listagem de produtos filtrados por categoria, com opção de adicionar ao carrinho.
- **Carrinho:** Exibição e gerenciamento dos itens selecionados.
- **Finalização:** *(Em desenvolvimento)* Função de checkout dos pedidos.

---

## 🛠️ Tecnologias Utilizadas

### Core
- **[React](https://react.dev/)** - Biblioteca JavaScript para construção de interfaces
- **[React Router DOM](https://reactrouter.com/)** - Roteamento para aplicações React
- **[Context API](https://react.dev/reference/react/useContext)** - Gerenciamento de estado global

### Estilização
- **[Styled-components](https://styled-components.com/)** - CSS-in-JS para estilização de componentes

### Funcionalidades
- **[Axios](https://axios-http.com/)** - Cliente HTTP para requisições à API
- **[React Hook Form](https://react-hook-form.com/)** - Gerenciamento de formulários
- **[React Toastify](https://fkhadra.github.io/react-toastify/)** - Notificações elegantes
- **[Stripe](https://stripe.com/)** - Processamento de pagamentos

### Armazenamento
- **LocalStorage** - Persistência de dados no navegador

### Build & Dev Tools
- **[Vite](https://vitejs.dev/)** - Build tool e dev server rápido
- **[Biome](https://biomejs.dev/)** - Linter e formatter

---

## � Pré-requisitos

Antes de começar, você precisará ter instalado em sua máquina as seguintes ferramentas:

- **[Node.js](https://nodejs.org/)** (versão 16.x ou superior)
- **[npm](https://www.npmjs.com/)** ou **[yarn](https://yarnpkg.com/)** ou **[pnpm](https://pnpm.io/)**
- **[Git](https://git-scm.com/)** (para clonar o repositório)

Além disso, é recomendável ter um editor de código como o **[VSCode](https://code.visualstudio.com/)** para melhor experiência de desenvolvimento.

---

## 📦 Instalação

### 1️⃣ Clone o repositório

```bash
git clone https://github.com/eduardobm0708/devburger-frontEnd.git
```

### 2️⃣ Acesse a pasta do projeto

```bash
cd devburger-frontEnd
```

### 3️⃣ Instale as dependências

Escolha seu gerenciador de pacotes preferido:

**Usando npm:**
```bash
npm install
```

**Usando yarn:**
```bash
yarn install
```

**Usando pnpm:**
```bash
pnpm install
```

### 4️⃣ Configure as variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto baseado no arquivo `.env.example` (se houver) e configure as variáveis necessárias. Veja a seção [Variáveis de Ambiente](#-variáveis-de-ambiente) para mais detalhes.

### 5️⃣ Inicie o servidor de desenvolvimento

**Usando npm:**
```bash
npm run dev
```

**Usando yarn:**
```bash
yarn dev
```

**Usando pnpm:**
```bash
pnpm dev
```

O aplicativo estará disponível em **http://localhost:5173** (ou a porta configurada pelo Vite).

---

## 🔐 Variáveis de Ambiente

Para o correto funcionamento da aplicação, você precisará configurar as seguintes variáveis de ambiente:

```env
# API Backend
VITE_API_URL=http://localhost:3001

# Stripe (Pagamentos)
VITE_STRIPE_PUBLIC_KEY=sua_chave_publica_stripe
```

> **Nota:** Certifique-se de ter o backend da aplicação rodando ou configure a URL da API de produção.

---

## �💡 Objetivo do Projeto

Este projeto foi desenvolvido como parte do aprendizado e prática em **desenvolvimento Front-End com React**, demonstrando:
- Uso de **Context API** para estados globais,
- **Componentização** e **reutilização de UI**,
- Integração com **API REST**,
- **Persistência de dados** e gerenciamento de carrinho,
- E **boas práticas de organização de código**.

Ideal para hamburguerias, restaurantes ou negócios que desejam oferecer um **cardápio digital interativo e funcional**, com experiência de compra online.

---

## 📈 Próximas Implementações

- [ ] Finalização completa do checkout com Stripe
- [ ] Dashboard administrativo para gerenciamento de pedidos
- [ ] Sistema de avaliações e comentários de produtos
- [ ] Notificações em tempo real de status do pedido
- [ ] Animações e microinterações avançadas
- [ ] Modo escuro (Dark Mode)
- [ ] PWA (Progressive Web App)
- [ ] Integração com sistema de delivery
- [ ] Testes unitários e de integração

---

## 🤝 Contribuindo

Contribuições são sempre bem-vindas! Se você tem alguma sugestão para melhorar este projeto, sinta-se à vontade para criar um fork e enviar um pull request.

### Como contribuir:

1. Faça um **fork** do projeto
2. Crie uma **branch** para sua feature (`git checkout -b feature/MinhaFeature`)
3. Faça **commit** das suas alterações (`git commit -m 'Adiciona MinhaFeature'`)
4. Faça **push** para a branch (`git push origin feature/MinhaFeature`)
5. Abra um **Pull Request**

Você também pode simplesmente abrir uma issue com a tag "enhancement".

---

## 👨‍💻 Autor

<div align="center">
  <img src="https://github.com/eduardobm0708.png" width="150" style="border-radius: 50%;" alt="Eduardo Bruno Marquezini"/>
  <br><br>
  <strong>Eduardo Bruno Marquezini</strong>
  <br>
  Desenvolvedor Front-End | React | JavaScript
  <br><br>

  [![GitHub](https://img.shields.io/badge/GitHub-eduardobm0708-181717?style=for-the-badge&logo=github)](https://github.com/eduardobm0708)
  [![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0077B5?style=for-the-badge&logo=linkedin)](https://linkedin.com/in/eduardobm0708)
  [![Portfolio](https://img.shields.io/badge/Portfolio-Visit-FF5722?style=for-the-badge&logo=google-chrome&logoColor=white)](https://eduardobm0708.github.io)

</div>

---

## 🧾 Licença

Este projeto está sob a licença **MIT**. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

<div align="center">

  ### ⭐ Se este projeto te ajudou, considere dar uma estrela!

  Feito com ❤️ por [Eduardo Bruno Marquezini](https://github.com/eduardobm0708)

</div>
