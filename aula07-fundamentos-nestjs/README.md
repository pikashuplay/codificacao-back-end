📚 Aula 07 — Fundamentos do NestJS
Nesta aula, foram estudados os fundamentos do framework NestJS e realizada a criação da primeira aplicação utilizando a CLI do NestJS.

🎯 Objetivo da aula
Aprender a instalar e utilizar a CLI do NestJS, criar um novo projeto, compreender sua estrutura inicial e executar uma aplicação NestJS localmente.

🔹 1. Instalação da NestJS CLI
Foi instalada a CLI do NestJS de forma global utilizando o npm:

npm install -g @nestjs/cli

A instalação da CLI permite utilizar os comandos nest para criar e gerenciar projetos NestJS.

🔹 2. Criação do projeto NestJS

Foi criado um novo projeto utilizando:

nest new aula07-fundamentos-nestjs

Durante a criação, foram realizadas as seguintes configurações:

Gerenciador de pacotes: npm
@nestjs/observe: configurado como Yes
Sistema de módulos: ESM (ES Modules)
Modo de compilação: com Vite

A CLI gerou automaticamente a estrutura inicial da aplicação.

🔹 3. Estrutura inicial do projeto

Após a criação, o NestJS gerou diversos arquivos e pastas, incluindo:

src/
app.controller.ts
app.service.ts
app.module.ts
main.ts
Arquivos de configuração do TypeScript
Arquivos de testes
package.json
README.md

Essa estrutura inicial fornece a base para o desenvolvimento da aplicação.

🔹 4. Configuração do módulo principal

O arquivo:

src/app.module.ts

é utilizado como módulo principal da aplicação.

Ele organiza os componentes e dependências que fazem parte do projeto.

🔹 5. Controller

Foi utilizado o arquivo:

src/app.controller.ts

O controller é responsável por receber requisições HTTP e definir as respostas das rotas da aplicação.

A aplicação inicial possui uma rota configurada pelo NestJS.

🔹 6. Service

Também foi criado o arquivo:

src/app.service.ts

O service é utilizado para concentrar regras e funcionalidades que podem ser utilizadas pelos controllers.

🔹 7. Inicialização da aplicação

O arquivo:

src/main.ts

é responsável pelo ponto de entrada da aplicação NestJS.

A partir dele, a aplicação é inicializada e o servidor fica disponível para receber requisições.

🔹 8. Execução em modo de desenvolvimento

A aplicação foi executada em modo de desenvolvimento, utilizando o sistema de observação de alterações.

Durante a execução, o terminal apresentou:

Starting compilation in watch mode...
Found 0 errors. Watching for file changes.

Isso confirmou que a aplicação foi compilada sem erros.

🔹 9. Inicialização do NestJS

Após a compilação, o NestJS iniciou corretamente a aplicação.

O terminal apresentou informações sobre:

Inicialização do NestFactory;
Carregamento dos módulos;
Inicialização das dependências;
Resolução das rotas;
Aplicação iniciada com sucesso.

Também foi identificada a rota:

GET /api
🔹 10. Teste da aplicação no navegador

A aplicação foi executada localmente e acessada pelo navegador através da rota:

http://localhost:3000/api

O navegador apresentou a mensagem:

Servidor NestJS - Aula 07 Ativo!

Isso confirmou que o servidor NestJS estava funcionando corretamente.

🔹 11. Verificação de compilação

Durante a execução, foi verificado que não existiam erros de compilação:

Found 0 errors.

A aplicação também foi executada com sucesso pelo NestJS.

🔹 12. Observação dos logs

Durante a inicialização, o NestJS apresentou seus próprios logs no terminal, mostrando o carregamento da aplicação, módulos e rotas.

Também foi identificado um aviso relacionado ao sistema de observabilidade/telemetria, com erro 401 de autenticação.

Esse erro não impediu a inicialização da aplicação, que continuou funcionando normalmente.

🛠️ Tecnologias e conceitos utilizados
Node.js
npm
NestJS
NestJS CLI
TypeScript
ES Modules (ESM)
Vite
Controllers
Services
Modules
Rotas HTTP
API
Servidor local
Watch mode
Estrutura de projetos NestJS
📌 Resumo da aula

Nesta aula, foi realizada a instalação da NestJS CLI e criado o primeiro projeto utilizando o framework NestJS. Foram estudados os principais elementos da estrutura inicial, como módulos, controllers, services e o arquivo de inicialização da aplicação. O projeto foi executado localmente e testado pelo navegador através da rota /api, confirmando o funcionamento do servidor.

✅ Resultado

Ao final da aula, foi possível:

Instalar a NestJS CLI;
Criar um projeto NestJS;
Configurar o projeto utilizando ESM;
Conhecer a estrutura inicial do NestJS;
Trabalhar com Modules, Controllers e Services;
Executar a aplicação em modo de desenvolvimento;
Testar uma rota HTTP;
Verificar os logs da aplicação;
Acessar o servidor pelo navegador.