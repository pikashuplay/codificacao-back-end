## 📚 Aula 08 — Route Handlers: Métodos GET e POST

Nesta aula, foram estudados os Route Handlers do NestJS, trabalhando com métodos HTTP, Controllers, Services e DTOs. Foi criada uma funcionalidade para trabalhar com convidados e realizada a execução e teste das rotas da aplicação.

### 🎯 Objetivo da aula

Aprender como criar e organizar rotas no NestJS utilizando decorators como `@Controller()` e `@Get()`, além de trabalhar com Services e DTOs para estruturar os dados recebidos pela aplicação.

### 🔹 1. Criação do projeto da aula

Foi criado o projeto:

`aula08-route-handlers-metodo-get-post`

A aplicação foi desenvolvida utilizando NestJS e TypeScript.

### 🔹 2. Organização da estrutura

Dentro da pasta `src`, foram utilizados arquivos como:

- `app.controller.ts`
- `app.service.ts`
- `app.module.ts`
- `convidados.controller.ts`
- `dto/criar-convidados.dto.ts`
- `main.ts`

Essa estrutura permite separar as responsabilidades da aplicação.

### 🔹 3. Configuração do Service

No arquivo `app.service.ts`, foi criado o `AppService`.

Foi implementado o método:

```typescript
getHello(): string {
  return 'Status Ativo';
}

Esse método retorna uma mensagem indicando que o serviço está ativo.

🔹 4. Configuração do Controller principal

No app.controller.ts, foi utilizado o decorator:

@Controller('status')

Isso define o caminho base da rota como:

/status

Também foi utilizado o decorator:

@Get()

para criar uma rota que responde às requisições HTTP GET.

🔹 5. Injeção do Service no Controller

O AppService foi utilizado dentro do controller através de injeção de dependência:

constructor(private readonly appService: AppService) {}

Dessa forma, o controller consegue utilizar os métodos disponibilizados pelo service.

🔹 6. Criação do método GET

Foi criado o método:

getHello(): string {
  return this.appService.getHello();
}

Esse método utiliza o AppService para retornar a mensagem:

Status Ativo

Assim, a lógica fica separada entre Controller e Service.

🔹 7. Criação do Controller de convidados

Foi criado o arquivo:

src/convidados.controller.ts

Esse controller foi utilizado para trabalhar especificamente com as rotas relacionadas aos convidados.

A criação de um controller separado permite organizar melhor as funcionalidades da aplicação.

🔹 8. Criação do DTO

Foi criada a pasta:

src/dto/

e dentro dela o arquivo:

criar-convidados.dto.ts

Foi criada a classe:

export class CriarConvidadoDto {
  nome: string;
  idade: number;
}

O DTO define a estrutura dos dados de um convidado, especificando:

nome como string;
idade como number.
🔹 9. Organização do módulo

No arquivo app.module.ts, o ConvidadosController foi importado e registrado junto ao AppController.

O controller foi adicionado à configuração:

controllers: [AppController, ConvidadosController]

Dessa forma, o NestJS reconhece e disponibiliza as rotas criadas para os convidados.

🔹 10. Trabalhando com Route Handlers

Foram praticados os Route Handlers do NestJS, que permitem definir como a aplicação deve responder às diferentes requisições HTTP.

Entre os conceitos trabalhados estão:

@Controller()
@Get()
Controllers
Services
DTOs
Métodos HTTP
Rotas
Requisições e respostas
🔹 11. Teste da aplicação

A aplicação foi executada localmente e testada através do navegador.

Foi acessada a rota:

http://localhost:3000/convidados

O navegador apresentou uma lista de convidados em formato JSON:

["Amanda", "Davi", "Adam", "Gabrielly", "Yuri"]

Esse teste confirmou o funcionamento da rota de convidados.

🔹 12. Verificação do funcionamento

Durante os testes, foi possível acessar a aplicação pelo servidor local e verificar as respostas das rotas criadas.

A utilização do navegador permitiu visualizar diretamente os dados retornados pela API.

🛠️ Tecnologias e conceitos utilizados
Node.js
NestJS
TypeScript
Controllers
Services
DTO (Data Transfer Object)
Route Handlers
HTTP GET
HTTP POST
Decorators
@Controller()
@Get()
Injeção de dependência
API
JSON
Rotas
Servidor local
📌 Resumo da aula

Nesta aula, foram estudados os Route Handlers do NestJS e a utilização dos métodos HTTP GET e POST. Foi criada uma estrutura organizada utilizando Controllers, Services e DTOs. Também foi criada uma funcionalidade para trabalhar com convidados, definindo a estrutura dos dados através de um DTO e realizando testes da API pelo navegador.

✅ Resultado

Ao final da aula, foi possível:

Criar Controllers no NestJS;
Criar e utilizar Services;
Utilizar o decorator @Controller();
Criar rotas com @Get();
Trabalhar com métodos HTTP;
Criar um DTO para convidados;
Definir tipos para os dados;
Registrar controllers no módulo principal;
Criar uma estrutura organizada para a API;
Executar e testar as rotas localmente;
Retornar dados em formato JSON.