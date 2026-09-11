📚 Aula 02 — Módulos CommonJS e ES Modules

Nesta aula, foram estudados conceitos de módulos em Node.js, trabalhando com a organização de arquivos, importação e exportação de funcionalidades e criação de um sistema simples de registro de logs.

🔹 1. Configuração do projeto

Foi criado/configurado o arquivo package.json, definindo as informações básicas do projeto:

Nome do projeto: aula02-modulos-commonjs-esm
Versão: 1.0.0
Arquivo principal: index.js
Tipo de módulo: "module"

A configuração "type": "module" permite utilizar a sintaxe moderna de módulos ES Modules (import e export).

🔹 2. Criação do módulo de utilidades

Foi criado o arquivo utils.js para armazenar uma função reutilizável chamada formatLog.

Essa função recebe uma mensagem e adiciona automaticamente:

A data atual;
O horário atual;
A mensagem informada.

O resultado é retornado no formato:

[DATA HORA] - Mensagem

Também foi utilizado o export para disponibilizar a função para outros arquivos do projeto.

🔹 3. Importação dos módulos

No arquivo index.js, foram utilizados módulos nativos do Node.js:

fs/promises para trabalhar com arquivos e diretórios;
path para manipulação de caminhos;
url para obter informações relacionadas ao arquivo atual;
utils.js para utilizar a função formatLog.