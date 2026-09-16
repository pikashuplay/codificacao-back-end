<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g @nestjs/mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Observability

In production applications, observability is essential for understanding how your system behaves, detecting issues early, and maintaining reliable performance.

[NestJS Observe](https://observe.nestjs.com) automatically instruments your NestJS application, giving you deep visibility into your system with minimal setup:

- **Distributed tracing:** Follow requests across services and understand how they flow through your system.
- **Waterfall analysis:** Visualize request execution and identify slow operations, bottlenecks, and unexpected delays.
- **Performance analysis:** Analyze application performance in real time and quickly pinpoint areas that need optimization.
- **Metrics:** Track key application and infrastructure metrics to understand system health and performance trends.
- **Logging:** Centralize and correlate logs with traces and other telemetry to make debugging easier.
- **Error tracking:** Detect errors quickly and investigate their root causes with the surrounding context.
- **SLA monitoring:** Track service-level objectives and identify when your application is approaching or exceeding defined thresholds.
- **Alarms and alerts:** Set up alerts for critical errors, performance degradation, SLA violations, and other anomalies so your team can react quickly.

This project is already instrumented. Create a free account at [observe.nestjs.com](https://observe.nestjs.com), add an application, and paste the generated app key and secret into the `ObserveModule.forRoot()` call in `src/app.module.ts`.

The free plan needs no payment details and covers 300,000 events a month. You can also browse the [live demo](https://www.observe-demo.nestjs.com/dashboard) first - the whole dashboard over a busy service's data, with nothing to install.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Auto-instrument your application with [NestJS Observe](https://observe.nestjs.com). Distributed tracing, metrics, and logging made easy. Error tracking and performance monitoring for your NestJS applications.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).

/////

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