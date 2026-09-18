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

## 📚 Aula 09 — Métodos GET, POST, PUT, PATCH e DELETE
## Objetivo da aula

Nesta aula, desenvolvi uma API utilizando NestJS, trabalhando com os principais métodos HTTP e aprendendo a estruturar uma aplicação utilizando Controllers, Services e DTOs.

🛠️ Passo a passo do que foi realizado
Criação da estrutura da aplicação
Trabalhei no projeto aula08-09-metodo-get-post-put-patch-delete.
Utilizei o NestJS para estruturar a aplicação.
Criação do DTO
Criei a pasta dto dentro de src.
Criei o arquivo criar-convidados.dto.ts.
Defini os dados necessários para cadastrar um convidado:
nome
idade
Criação do Service
Criei o arquivo convidados.service.ts.
Utilizei uma lista em memória para armazenar os convidados.
Cadastrei inicialmente alguns convidados com id, nome e idade.
Implementação da consulta de convidados
Criei o método findAll() para retornar todos os convidados.
Criei também o método findOne() para localizar um convidado pelo id.
Caso o convidado não seja encontrado, utilizei NotFoundException.
Implementação do método GET
Criei uma rota GET no ConvidadosController.
A rota permite consultar a lista de convidados.
O Controller utiliza o ConvidadosService para buscar os dados.
Implementação do método POST
Criei uma rota POST para receber novos convidados.
Utilizei @Body() para receber os dados enviados na requisição.
Utilizei o CriarConvidadoDto para definir a estrutura dos dados.
Adicionei mensagens no console para acompanhar as operações.
Implementação do método PATCH
Criei uma rota PATCH para atualizar a idade de um convidado.
Utilizei @Param('id') para identificar o convidado.
Utilizei @Body('idade') para receber a nova idade.
O Service localiza o convidado e atualiza seu cadastro.
Implementação do método DELETE
Criei uma rota DELETE para remover um convidado.
O id é recebido através do parâmetro da URL.
No Service, utilizei findIndex() para localizar o convidado.
Depois utilizei splice() para remover somente o convidado selecionado.
Caso o ID não exista, a aplicação retorna NotFoundException.
Configuração do Controller
Registrei o ConvidadosController no app.module.ts.
Injetei o ConvidadosService no Controller através do construtor.
Utilização do código HTTP 204
No método DELETE, utilizei @HttpCode(204).
Dessa forma, quando a exclusão é realizada com sucesso, a API retorna o status HTTP 204 No Content.
Execução e testes
Executei a aplicação localmente.
Testei as rotas através do navegador e das requisições HTTP.
Verifiquei o funcionamento da API e o retorno dos convidados.
📌 Conceitos aprendidos
NestJS
Controllers
Services
DTOs
Injeção de dependência
Rotas HTTP
GET
POST
PUT
PATCH
DELETE
@Body()
@Param()
@HttpCode()
NotFoundException
Manipulação de arrays com find(), findIndex() e splice()
Organização e separação de responsabilidades em uma API
🎯 Resultado

Ao final da aula, consegui criar uma API de convidados organizada em Controller, Service e DTO, permitindo consultar, cadastrar, atualizar e excluir convidados através de diferentes métodos HTTP.