## Catálogo de super heróis da marvel
Uma aplicação web com a lista de diversos heróis da marvel, feito com React, Redux, Redux-Saga e Marvel API.

[![Build Status](https://travis-ci.com/fabriciojso/luizalabs-desafio.svg?token=3dZSp4x5xxwAqpKZDQTe&branch=master)](https://travis-ci.com/fabriciojso/luizalabs-desafio)

## Demonstração
Deseja ver a aplicação em funcionamento? [Clique aqui](https://fabriciojso.github.io/luizalabs-desafio/#/)
[![GIF](https://i.gyazo.com/b4bba2488184ebec38161d1799b973cc.gif)](https://fabriciojso.github.io/luizalabs-desafio/#/)

## Tecnologias
- [React](https://github.com/facebook/react/) `v16.4.1` para a componentização do projeto;
- [Create React App](https://github.com/facebook/create-react-app) `v1.1.4` para a criação do projeto React;
- [Redux](https://github.com/reduxjs/redux) `v4.0.0` para auxiliar no gerenciamento de estados compatilhados;
- [Redux Saga](https://github.com/redux-saga/redux-saga) `0.16.0` foi utilizado para auxiliar no gerenciamento de ações assíncronas;
- [Redux Multi](https://github.com/ashaffer/redux-multi) `0.1.12` utilizado para tornar possível o retorno de multiplos `dispatchs`;
- [ESLint Pagarme](https://github.com/pagarme/react-style-guide) `1.4.0` para auxiliar nas regras de escrita de código JavaScript;
- [React Infinite Scroller](https://github.com/CassetteRocks/react-infinite-scroller) `1.2.0` para auxiliar na implementação do scroll infinito;
- [Jest](https://github.com/facebook/jest/) `23.3` para implementar os testes automatizados;
- [Enzyme](https://github.com/airbnb/enzyme) `3.3.0` Biblioteca criada pelo Airbnb para auxiliar na criação de testes com React;
- [Puppeteer](https://github.com/GoogleChrome/puppeteer) `1.5.0` foi utilizado para auxiliar na implementação de testes e2e (end-to-end);
- [Travis CI](https://travis-ci.com/fabriciojso/luizalabs-desafio) ferramenta de integração continua.

## Importante
A `Marvel API` tem um **limite** de `3.000` solicitações por dia. Caso esse limite seja atingido é necessário alterar as chaves que se encontram no seguinte local, [clique aqui](https://www.marvel.com/signin?referer=https%3A%2F%2Fdeveloper.marvel.com%2Faccount) para criar sua conta no `Developer Marvel`:
```
/src/services/Marvel/api.js
```
Neste arquivo encontra-se a chave publica e privada:
```js
const publicKey  = 'xxxxxxxxx'
const privateKey = 'yyyyyyyyy'
```

## Testes End-to-End
Para a implementação dos testes End-to-End (e2e) foi utilizado a biblioteca `Puppeteer`, que permite acessar um website e executar ações no mesmo. Os testes e2e se encontram no seguinte caminho ([clique aqui](https://github.com/fabriciojso/luizalabs-desafio/blob/master/src/pages/e2e.test.js)):
```
/src/pages/e2e.test.js
```

Foi implementado tambem alguns testes de unidade, sendo alguns integrados com um `Mock` do `Redux`, os mesmos se encontram juntamente com seus respectivos componentes.

## Como executar
##### 1 - Clone do repositório:
```bash
$ git clone https://github.com/fabriciojso/luizalabs-desafio.git
```

#### 2 - Acesse a pasta e instale as dependências:
```bash
$ cd ./luizalabs-desafio && npm install
```

#### 3 - Inicie o servidor local para acessar a aplicação:
```bash
$ npm start
```

#### 4 - Para executar os testes execute o comando:
```bash
$ npm run test
```

## Checklist

- [ ] 100% de coverage nos testes.
- [ ] Usar [Typescript](https://www.typescriptlang.org/) para checagem estática de tipos.
- [ ] Ordenar lista de heróis por nome `asc|desc`.
- [x] Scroll infinito.
- [x] Implementação de Testes End-to-End.
- [x] Implementação de Testes de Unidade.
- [x] UI.
- [x] UX.
- [x] Opção para favoritar herói na pagina de listagem e detalhes.
- [x] Listagem personagens favoritados.
- [x] Integração com o Travis CI.
- [x] Listagem de super heróis.
- [x] Layout responsivo.
- [x] Redux com Redux Saga.

## Observações
1.  **A `Marvel API` no momento está com um alto delay de resposta.**

2.  Mesmo tendo experiência com o desenvolvimento com o [Typescript](https://www.typescriptlang.org/), optei por desenvolver com JavaScript puro. Porém é uma excelente vantagem utilizar a tipagem estática, prevenindo erros, um `autocomplete` eficaz e facilidade para manter o projeto.

## License
Este projeto foi desenvolvido com muito carinho por **[@fabriciojso](https://github.com/fabriciojso)** e o mesmo está licenciado sob a licença [MIT](https://opensource.org/licenses/MIT).