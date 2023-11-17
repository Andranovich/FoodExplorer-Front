# 🍝 Front End - Food Explorer.

## Sobre o Projeto

O Food Explorer é um aplicativo delivery de pratos gourmet. Através de uma experiência simples e intuitiva, voltada para o usuário intermediário e final. Esse aplicativo permite a navegação entre os pratos onde é possível ver as imagens, descrições e ingredientes dos pratos.   

##  📋  Neste desafio foram abordados os seguintes temas:

- React;
- Routes;
- components;
- Props;
- hooks;
- context;
---

## 💻 Funcionalidades

- [x] Um projeto estruturado, com uma boa organização das pastas, divisão de componentes no front-end, etc;
- [x] Os dados do admin, do restaurante e dos usuários serão armazenados em um banco de dados;
- [x] Os usuários deverão se autenticar para entrar na aplicação através da tela de login;
- [x] Dê nomes significativos para as suas funções e variáveis: trabalhe um pouco com os conceitos do Clean Code;
- [x] Possibilidade de fazer uma busca pelo nome do prato, pelos ingredientes ou por prato favorito;
- [x] O admin irá fazer upload de imagens para cadastrar e editar tanto os pratos quanto os ingredientes;
- [x] Interessante deixar a aplicação responsiva: utilize o conceito de Mobile First que foi aprendido em aula;
- [x] Deixe o código mais acessível e semântico usando as dicas que foram passadas em aula;
- [x] Fica a seu critério onde aplicar animações, transições e transformações;
- [x] É essencial que a sua interface consuma a sua API;
- [x] Para finalizar, faça o deploy da sua aplicação.

---

## 🎨 Layout

O layout da aplicação está disponível no Figma:

<a href="https://www.figma.com/file/PaoSORqirtSqjmTCQdjCq7/food-explorer-v2-(Community)-(Community)?node-id=5%3A980&mode=dev">
  <img alt="Made by tgmarinho" src="https://img.shields.io/badge/Acessar%20Layout%20-Figma-%2304D361">
</a>

## 🛠️ Instalação

Siga os passos abaixo para instalar e configurar a aplicação em um ambiente local:

1. 📥 **Clone o repositório:**

    ```bash
    git clone https://github.com/Andranovich/FoodExplorer-Front.git
    
    ```

2. 📂 **Navegue para o diretório do projeto:**

    ```bash
    cd ./FoodExplorer-Front
    ```

3. 📦 **Instale as dependências:**

    ```bash
    npm install
     ou
    npm i
    ```

4. ⚙️ **Crie um arquivo de configuração:**

    Crie um arquivo `.env` como mostra no arquivo `.env.local.example` na raiz do projeto e configure as variáveis de ambiente necessárias. Por exemplo:

    ```dotenv
    AUTH_SECRET=""
    PORT=""
    ```
    
    Certifique-se de adicionar url da **API** do backend no AUTH_SECRET="".

5. ▶️ **Inicie o servidor:**

   ```bash
   npm run dev
   ```

 

## 🛠 Tecnologias

Este projeto foi desenvolvido com as seguintes tecnologias:


- [**axios**](https://axios-http.com/)
- [**jwt-decode**](https://www.npmjs.com/package/jwt-decode)
- [**react**](https://reactjs.org/)
- [**react-dom**](https://reactjs.org/)
- [**react-router-dom**](https://reactrouter.com/web/guides/quick-start)
- [**styled-components**](https://styled-components.com/)

---
