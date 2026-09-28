📚 12ª AULA — Request, Response e Segurança de API
Objetivo da aula

Nesta aula foi desenvolvido um endpoint protegido no NestJS, utilizando uma chave de API enviada no cabeçalho da requisição. Também foi configurado um módulo de observabilidade e realizados testes da API utilizando o Insomnia.

1. Criação do projeto

Foi criada uma nova estrutura para a aula:

aula-12-request-response-advanced

O projeto foi desenvolvido utilizando NestJS e organizado dentro da pasta src.

A estrutura principal contém:

aula-12-request-response-advanced/
├── src/
│   ├── app.controller.ts
│   ├── app.module.ts
│   ├── app.service.ts
│   ├── main.ts
│   └── seguranca.controller.ts
├── test/
├── .gitignore
├── nest-cli.json
├── package.json
├── package-lock.json
└── README.md
2. Criação do Controller de Segurança

Foi criado o arquivo:

src/seguranca.controller.ts

Esse controller foi utilizado para trabalhar com a rota relacionada ao conteúdo protegido da aplicação.

O controller foi registrado no módulo principal da aplicação:

controllers: [AppController, SegurancaController]
3. Criação da rota protegida

Foi criada uma rota para acessar um conteúdo considerado secreto.

A requisição utilizada nos testes foi:

GET http://localhost:3000/secreto

Para acessar essa rota, foi utilizada uma chave de API enviada através do header:

x-api-key

No teste realizado, foi utilizada a chave:

neyma
4. Teste da autenticação pelo Insomnia

A API foi testada utilizando o Insomnia.

Na requisição GET, foi configurado o header:

x-api-key: neyma

Com a chave correta, a API retornou:

200 OK

E apresentou uma resposta semelhante a:

{
  "mensagem": "Acesso concedido ao conteúdo secreto!",
  "timestamp": "..."
}

Isso permitiu verificar o funcionamento do acesso ao conteúdo protegido.

5. Configuração do módulo de observabilidade

No app.module.ts, foi adicionada a configuração de observabilidade do NestJS:

import { createObserveModule } from '@nestjs/observe';

Também foram criados e exportados:

export const { ObserveModule, ObserveInstrument } = createObserveModule();

Essa configuração foi integrada ao projeto para possibilitar o uso dos recursos de observabilidade da aplicação.

6. Integração do Controller de Segurança

O SegurancaController foi importado no módulo principal:

import { SegurancaController } from './seguranca.controller.js';

E registrado no AppModule:

controllers: [AppController, SegurancaController]

Dessa forma, o NestJS passa a reconhecer e disponibilizar as rotas criadas no controller de segurança.

7. Teste da resposta da API

Por meio do Insomnia, foi possível verificar a comunicação entre cliente e servidor.

Foi realizada uma requisição:

GET /secreto

Utilizando o header:

x-api-key

A resposta recebida foi:

200 OK

confirmando o acesso quando a chave utilizada na requisição foi aceita pela aplicação.

8. Resultado da aula

Ao final da aula, foi implementada e testada uma rota protegida da API, utilizando uma chave enviada no cabeçalho da requisição.

Também foi configurado o recurso de observabilidade no projeto NestJS e realizados testes utilizando o Insomnia.