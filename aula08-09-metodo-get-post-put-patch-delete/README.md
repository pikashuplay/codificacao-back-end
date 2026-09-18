# Aulas 08 e 09 — Métodos HTTP com NestJS

## 📚 Sobre as aulas

Nas Aulas 08 e 09, desenvolvi uma API utilizando **NestJS**, aprendendo a trabalhar com rotas, Controllers, Services, DTOs e os principais métodos HTTP utilizados no desenvolvimento de APIs.

Durante as aulas, foi criado um sistema simples de gerenciamento de convidados, permitindo consultar, cadastrar, atualizar e remover informações.

---

## 🎯 Objetivo

Aprender a criar e organizar rotas em uma aplicação NestJS, utilizando os métodos HTTP:

- GET
- POST
- PUT
- PATCH
- DELETE

Além disso, foi trabalhada a separação de responsabilidades entre:

- Controller
- Service
- DTO

---

# 🚀 Aula 08 — Route Handlers e métodos GET/POST

## 1. Criação do projeto

Foi criada a aplicação utilizando o **NestJS**, seguindo a estrutura padrão do framework.

A estrutura principal ficou organizada em:

```text
src/
├── dto/
├── app.controller.ts
├── app.module.ts
├── app.service.ts
├── convidados.controller.ts
└── main.ts
2. Criação do DTO

Foi criada a pasta:

src/dto/

Dentro dela foi criado o arquivo:

criar-convidados.dto.ts

O DTO foi utilizado para definir os dados necessários para criar um convidado.

Os campos utilizados foram:

nome
idade

Exemplo:

export class CriarConvidadoDto {
  nome: string;
  idade: number;
}
3. Criação do Service

Foi criado o ConvidadosService para concentrar a lógica relacionada aos convidados.

Foi criada uma lista inicial de convidados contendo:

ID
Nome
Idade

Também foram criados métodos para trabalhar com esses dados.

4. Implementação do método GET

Foi criado um Controller específico para os convidados.

O método GET foi utilizado para consultar a lista de convidados.

Através da rota:

GET /convidados

foi possível visualizar os convidados cadastrados.

O Controller utiliza o Service para buscar os dados.

5. Implementação do método POST

Foi criada uma rota POST para receber novos convidados.

Foi utilizado:

@Body()

para receber os dados enviados na requisição.

O DTO CriarConvidadoDto foi utilizado para definir a estrutura dos dados recebidos.

A operação também possui um registro no console informando quando um novo convidado é recebido.

6. Organização do NestJS

O ConvidadosController foi registrado no:

app.module.ts

O ConvidadosService também foi disponibilizado através do sistema de injeção de dependências do NestJS.

🛠️ Aula 09 — GET, POST, PATCH e DELETE

Na Aula 09, a aplicação foi ampliada para permitir operações adicionais sobre os convidados.

7. Busca de um convidado pelo ID

No ConvidadosService, foi criado o método:

findOne(id: number)

Esse método utiliza find() para localizar um convidado pelo seu ID.

Quando o ID não é encontrado, é utilizado:

NotFoundException

para informar que o convidado não existe.

8. Atualização da idade com PATCH

Foi implementada uma rota utilizando:

PATCH /convidados/:id

O ID do convidado é recebido através de:

@Param('id')

e a nova idade é recebida através de:

@Body('idade')

No Service, o convidado é localizado pelo ID e sua idade é atualizada.

Foi criado o método:

atualizarIdade(id: number, idade: number)
9. Implementação do DELETE

Também foi criada uma rota para excluir convidados:

DELETE /convidados/:id

O ID é recebido através do parâmetro da URL.

No Service, foi utilizado:

findIndex()

para localizar a posição do convidado na lista.

Depois, foi utilizado:

splice(index, 1)

para remover somente o convidado selecionado.

Dessa forma, os outros convidados permanecem na lista.

10. Tratamento de erros

Foi utilizado:

NotFoundException

quando o ID informado não corresponde a nenhum convidado cadastrado.

Exemplo de situação tratada:

Convidado com ID 10 não encontrado

Isso permite que a API retorne uma resposta adequada quando um recurso não existe.

11. Status HTTP 204

No método DELETE foi utilizado:

@HttpCode(204)

O código:

204 No Content

indica que a operação foi realizada com sucesso e não existe conteúdo adicional para retornar no corpo da resposta.

12. Logs das operações

Foram adicionados registros no console para acompanhar as operações realizadas pela API.

Exemplos de informações registradas:

Novo convidado recebido
Atualização da idade
Remoção de convidado
ID utilizado na operação

Isso facilita o acompanhamento e a identificação de possíveis problemas durante os testes.

🧪 Testes realizados

A aplicação foi executada localmente e as rotas foram testadas através do navegador e das requisições HTTP.

Foi realizado teste da rota:

http://localhost:3000/convidados

O resultado apresentou a lista de convidados cadastrados em formato JSON.

Exemplo:

["Amanda", "Davi", "Adal", "Gabrielly", "Yuri"]

Também foram realizados testes das operações de atualização e exclusão através dos respectivos métodos HTTP.

📁 Estrutura final do projeto

A estrutura principal da aplicação ficou organizada da seguinte forma:

aula08-09-metodo-get-post-put-patch-delete/
│
├── src/
│   ├── dto/
│   │   └── criar-convidados.dto.ts
│   │
│   ├── app.controller.ts
│   ├── app.module.ts
│   ├── app.service.ts
│   ├── convidados.controller.ts
│   ├── convidados.service.ts
│   └── main.ts
│
├── test/
├── package.json
├── package-lock.json
├── tsconfig.json
├── nest-cli.json
├── README.md
└── .gitignore
📖 Conceitos aprendidos

Durante as Aulas 08 e 09, foram praticados os seguintes conceitos:

NestJS
Criação de projetos com NestJS
Controllers
Services
DTOs
Injeção de dependências
Route Handlers
Rotas HTTP
Método GET
Método POST
Método PUT
Método PATCH
Método DELETE
@Controller()
@Get()
@Post()
@Patch()
@Delete()
@Body()
@Param()
@HttpCode()
NotFoundException
find()
findIndex()
splice()
Status HTTP 204
Testes de API localmente
Organização de uma aplicação backend
✅ Resultado

Ao finalizar as Aulas 08 e 09, desenvolvi uma API de gerenciamento de convidados utilizando NestJS.

A aplicação passou a possuir uma estrutura organizada entre Controller, Service e DTO, permitindo trabalhar com diferentes operações HTTP e manipular os convidados de forma individual.

O projeto também foi executado localmente para verificar o funcionamento das rotas e das operações implementadas.