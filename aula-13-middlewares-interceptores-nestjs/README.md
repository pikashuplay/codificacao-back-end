# 13° AULA — Middlewares e Interceptores no NestJS

Nesta aula foi desenvolvido um sistema utilizando **Middleware no NestJS**, com o objetivo de registrar informações das requisições e controlar o acesso a uma rota administrativa de acordo com a função do usuário.

Também foram realizados testes das rotas utilizando o **Insomnia**.

## 1. Criação do projeto

Foi criada a pasta:

```text
aula-13-middlewares-interceptores-nestjs

O projeto foi estruturado utilizando o NestJS e organizado dentro da pasta src.

A estrutura principal ficou composta por:

aula-13-middlewares-interceptores-nestjs/
├── src/
│   ├── logger/
│   │   ├── logger.middleware.ts
│   │   └── logger.middleware.spec.ts
│   ├── app.controller.ts
│   ├── app.controller.spec.ts
│   ├── app.module.ts
│   ├── app.service.ts
│   └── main.ts
├── test/
├── package.json
├── tsconfig.json
└── README.md
2. Criação do Logger Middleware

Foi criado o arquivo:

src/logger/logger.middleware.ts

O middleware foi implementado utilizando:

@Injectable()
export class LoggerMiddleware implements NestMiddleware

Também foram utilizados Request, Response e NextFunction do Express.

O middleware registra no console informações sobre a requisição, como:

Método HTTP;
Rota acessada.

Exemplo:

console.log(`[LOG] Método: ${req.method} | Rota: ${req.path}`);
3. Verificação da função do usuário

Além do registro das requisições, foi adicionada uma verificação utilizando o header:

x-user-role

Para acessar a rota administrativa, o usuário precisa possuir a função:

supervisor

Quando a função enviada no header não corresponde a supervisor, o middleware retorna:

403 - Forbidden

Com a mensagem:

Acesso Negado: Privilégio de Supervisor Necessário
4. Configuração do Middleware

O middleware foi registrado no AppModule utilizando MiddlewareConsumer.

Foi configurado para ser aplicado às rotas da aplicação:

export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}

Dessa forma, o middleware pode interceptar as requisições realizadas para as rotas configuradas.

5. Criação das rotas

No arquivo:

src/app.controller.ts

foi criada uma rota pública:

@Get()
getPublic() {
  return {
    mensagem: 'Rota Publica acessada com sucesso!',
    data: new Date(),
  };
}

Também foi criada uma rota administrativa:

@Get('admin')
getAdmin() {
  return {
    mensagem: 'Bem-vindo ao Painel administrativo!',
    data: new Date(),
  };
}
6. Testes utilizando o Insomnia

Foram realizados testes das rotas utilizando o Insomnia.

Rota pública

Requisição:

GET http://localhost:3000/

Resultado:

200 OK

Resposta:

{
  "mensagem": "Rota Publica acessada com sucesso!",
  "data": "data da requisição"
}
Rota administrativa sem permissão

Foi realizado um teste utilizando o header:

x-user-role: operador

A requisição retornou:

403 Forbidden

Com a mensagem:

Acesso Negado: Privilégio de Supervisor Necessário
Rota administrativa com permissão

Foi realizado outro teste utilizando:

x-user-role: supervisor

A requisição:

GET http://localhost:3000/admin

retornou:

200 OK

Com a mensagem:

Bem-vindo ao Painel administrativo!
7. Resultado da aula

Ao final da aula, foi implementado um Middleware no NestJS capaz de:

Registrar as requisições realizadas;
Identificar o método HTTP e a rota acessada;
Verificar a função do usuário através de um header;
Bloquear o acesso de usuários sem a função necessária;
Permitir o acesso de usuários com a função supervisor;
Testar o comportamento das rotas utilizando o Insomnia.
Tecnologias utilizadas
Node.js
NestJS
TypeScript
Express
Insomnia