# Sugarcane
<p align="center">
  <img src="https://github.com/lagcrs/cyan_challenge/blob/master/sugarcane.png" width="400" title="Sugarcane" alt="Logo Sugarcane">
</p>
<h4 align="center"> 
	 Desafio <a href="https://cyan-agro.com/">Cyan</a> 🚀 
</h4>
<h1 align="center">Projeto Sugarcane</h1>
<p align="center">Plataforma de controle de usinas de cana-de-açucar :leaves:</p>

<p align="center"> 
  <img src="https://img.shields.io/github/languages/count/lagcrs/cyan_challenge" alt="Languages">
  <img src="https://img.shields.io/github/last-commit/lagcrs/cyan_challenge" alt="Last Commit">
  <img src="https://img.shields.io/github/repo-size/lagcrs/cyan_challenge" alt="Repo size">
</p>

## 💻 Sobre o projeto
Sugarcane é uma plataforma que auxilia agricultores a possuírem um melhor controle de suas produções. O usuário possuirá controle sobre usinas, safras, fazendas e talhões, podendo cadastrar essas funcionalidades, além de poder realizar filtragem para buscar as coordenadas dos talhões. :earth_americas:

- Frontend da Plataforma no [Vercel](https://sugarcane.lagcrs.vercel.app/) :sparkles: <br/>

## 🛠 Tecnologias utilizadas

Para o desenvolvimento das interfaces foi utilizado o React, - uma biblioteca JavaScript focada na criação de interfaces reaproveitaveis para o usuário - com Styled Components. Já para a aplicação das regras de negócios foi escolhido o Node.js, uma plataforma JavaScript que processa códigos JS no servidor. Para o armazenamento foi escolhido o PostgreSQL + PostGIS como banco de dados, com o ORM Sequelize. 

- [React](https://pt-br.reactjs.org/)
- [Styled Components](https://styled-components.com/)
- [Node.js](https://nodejs.org/en/)
- [PostgreSQL](https://www.postgresql.org/)
- [PostGIS](https://postgis.net/)
- [Sequelize](https://sequelize.org/)

### :paperclip: Pré-requisitos
Precisa ter as seguintes tecnologias instaladas para rodar o projeto:
- Node.js
- PostgreSQL com PostGIS
- NPM
- Git
- Editor de código

## 🎨 Layout
A seguir screenshots das telas desenvolvidas:

<span>Home</span>
<p align="center">
  <img src="https://github.com/lagcrs/cyan_challenge/blob/master/home.png" alt="Page Home">
</p>

<span>Registro</span>
<p align="center">
  <img src="https://github.com/lagcrs/cyan_challenge/blob/master/register.png" alt="Page Registro">
</p>

<span>Filtragem</span>
<p align="center">
  <img src="https://github.com/lagcrs/cyan_challenge/blob/master/maps.png" alt="Page Filtro">
</p>

> *Todas as telas são responsivas!* :ok_woman:

## :wrench: Rotas da API

**GET**
> /mills <br/>
> /harvests <br/>
> /farms <br/>
> /fields <br/>
> /filter-mill <br/>
> /filter-harvest <br/>
> /filter-farm <br/>
> /filter-field <br/>

**POST**
> /mills <br/>
> /harvests <br/>
> /farms <br/>
> /fields <br/>

## 🚀 Como executar o projeto

Podemos considerar este projeto como sendo divido em duas partes: 
1. Back-end (pasta server)
2. Front-end (pasta web)

> *O Frontend precisa que o Backend esteja sendo executado para funcionar. :wink:*

###  🎲 Banco de Dados
Primeira modelagem do banco de dados PostgreSQL
<p align="left">
  <img src="https://github.com/lagcrs/cyan_challenge/blob/master/database.png" width="400" title="Banco de Dados" alt="Banco de Dados">
</p>

Ferramenta utilizada para modelagem: [draw.io](https://app.diagrams.net/)

### :bulb: Rodando o Back-end (servidor)
Antes, você deve criar um banco de dados PostgreSQL 'cyan' em seu computador, com a extensão PostGIS. :thumbsup:

```bash
# Clone este repositório
$ git clone https://github.com/lagcrs/cyan_challenge.git

# Acesse a pasta do projeto no seu terminal/cmd
$ cd cyan_challenge

# Acesse a pasta do Back-end no seu terminal/cmd
$ cd server

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm run dev

# A aplicação será aberta na porta:3333 - acesse http://localhost:3333
```

### 🧭 Rodando a aplicação web (Front-end)
```bash
# Vá para a pasta da aplicação Front-end
$ cd web

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm start

# A aplicação será aberta na porta:3000 - acesse http://localhost:3000
```

## 📝 Licença

Este projeto esta sobe a licença Apache License Version 2.0
