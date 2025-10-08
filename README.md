# 🍔 DevBurger – Cardápio Digital com React

O **DevBurger** é uma aplicação web moderna desenvolvida em **React**, voltada para o **gerenciamento de um cardápio digital de hamburgueria** com funcionalidades de **e-commerce**.  
O projeto oferece uma experiência completa de navegação, autenticação e gerenciamento de carrinho, sendo uma excelente demonstração de boas práticas em frontend moderno.

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

- [React](https://react.dev/)  
- [Styled-components](https://styled-components.com/)  
- [React Router DOM](https://reactrouter.com/)  
- [Context API](https://react.dev/reference/react/useContext)  
- [LocalStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)  
- [API REST](https://restfulapi.net/)  

---

## 💡 Objetivo do Projeto

Este projeto foi desenvolvido como parte do aprendizado e prática em **desenvolvimento Front-End com React**, demonstrando:  
- Uso de **Context API** para estados globais,  
- **Componentização** e **reutilização de UI**,  
- Integração com **API REST**,  
- **Persistência de dados** e gerenciamento de carrinho,  
- E **boas práticas de organização de código**.

Ideal para hamburguerias, restaurantes ou negócios que desejam oferecer um **cardápio digital interativo e funcional**, com experiência de compra online.

---

## ⚙️ Como Rodar o Projeto

```bash
# Clonar o repositório
git clone https://github.com/eduardobm0708/devburger-frontEnd.git

# Entrar na pasta do projeto
cd devburger-frontEnd

# Instalar dependências
npm install

# Rodar o servidor de desenvolvimento
npm start
```

O app será iniciado em:  
👉 **http://localhost:3000**

---

## 📈 Próximas Implementações
- Página de checkout e pagamento  
- Dashboard de pedidos  
- Animações e microinterações  
- Integração com API de autenticação real  

---

## 👨‍💻 Autor

**Eduardo Bruno Marquezini**  
Desenvolvedor Front-End | React | JavaScript  
📫 [github.com/eduardobm0708](https://github.com/eduardobm0708)

---

## 🧾 Licença

Este projeto está sob a licença MIT — sinta-se livre para usar e modificar.
