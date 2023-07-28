<h1 align="center">NYT BestSellers Books</h1>

<p align="center">A simple project that has the purpose that displays lists of bestsellers from the New York Times
Books API.</p>

Content Table
=================
<!--ts-->
* [Install](#install)
* [Test](#test)
* [Tecnologies](#tech)
<!--te-->

<h3 id="install">📦 Install (server) </h3>
In the second step of the instalation you'll need NYT key that you can get by following these instructions in https://developer.nytimes.com/get-started

```bash

# Create an .env copying it from .env.example
$ mv .env.example .env

# Add your NYT API key to the .env file
# Replace "//your-key" with your actual NYT API key
$ NYT_API_KEY=your-nyt-api-key

# Install dependencies 
$ npm install

# Run front-end 
$ npm run dev

```

<h3 id="how-use">🔨 How to use </h3>
Open your browser and access the app by link http://localhost:3000

<h3 id="test">🧪 Cypress Integration Test  </h3>

```bash

# Run front-end 
$ npm run dev

# In another terminal tab run cypress integration test run the command
$ npm run cypress:open

# Chose the e2e option

# Run the home test cases 

```

<h3 id="tech">🖥️ Technologies </h3>

* [ReactJs](https://react.dev/)
* [NextJs](https://nextjs.org/)
* [Cypress](https://www.cypress.io/)
* [Styled Components](https://styled-components.com/)
* [Axios](https://axios-http.com/ptbr/docs/intro)
* [Material UI](https://mui.com/)

<h4>developed by James Amorim.</h4>