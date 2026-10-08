# 🚨 Aula 15 — Tratamento de Erros e Status Codes

Nesta aula, foi desenvolvido um endpoint de **produtos** utilizando NestJS, com tratamento de erros, validação de parâmetros e utilização de diferentes **Status Codes HTTP**.

O objetivo foi aprender como a aplicação pode identificar situações inválidas e retornar respostas adequadas para cada tipo de erro.

---

## 🎯 Objetivos da Aula

- Criar um serviço para gerenciamento de produtos.
- Criar um Controller para disponibilizar os produtos através de uma API.
- Buscar produtos pelo ID.
- Validar o ID recebido pela URL.
- Utilizar `BadRequestException`.
- Utilizar `NotFoundException`.
- Implementar logs com `Logger`.
- Trabalhar com diferentes Status Codes HTTP.
- Testar os endpoints utilizando o Insomnia.

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Utilização |
|---|---|
| 🟢 NestJS | Desenvolvimento da API |
| 🔷 TypeScript | Linguagem utilizada |
| 📡 HTTP | Comunicação com a API |
| 🧪 Insomnia | Testes das requisições |
| 📝 Logger | Registro de ocorrências |

---

## 📁 Estrutura Desenvolvida

```text
aula-15-tratamento-erros-status-codes/
│
├── src/
│   ├── produtos.controller.ts
│   ├── produtos.service.ts
│   ├── app.module.ts
│   ├── app.controller.ts
│   ├── app.service.ts
│   └── main.ts
│
├── package.json
├── nest-cli.json
└── README.md
📦 Serviço de Produtos

Foi criado o ProdutoService, responsável por armazenar e disponibilizar uma lista de produtos.

Produtos cadastrados
[
  { id: 1, nome: 'Arroz Namorados', preco: 9.99 },
  { id: 2, nome: 'Preto com dente', preco: 3.99 },
  { id: 3, nome: 'Quero Quero', preco: 4.99 },
  { id: 4, nome: 'Sal Iamã', preco: 2.99 }
]

O método listaProdutos() retorna todos os produtos cadastrados.

🌐 Controller de Produtos

Foi criado o ProdutosController com a rota:

GET /produtos

Também foi criado um endpoint para buscar um produto específico pelo ID:

GET /produtos/:id

Exemplo:

GET http://localhost:3000/produtos/1
🔎 Busca de Produto por ID

O ID recebido pela URL é convertido para número antes da busca.

const id = Number(idproduto);

Também foi realizada uma validação para verificar se o valor informado é realmente numérico.

⚠️ Tratamento de Erro — ID Inválido

Quando um valor que não representa um número é informado, a aplicação retorna um erro 400 Bad Request.

Exemplo:

GET /produtos/abcde
Resposta
{
  "message": "O ID do produto deve ser um número inteiro.",
  "error": "Bad Request",
  "statusCode": 400
}

Além disso, uma mensagem de aviso é registrada no console:

Tentativa de buscar com ID abcde não numérico.
❌ Tratamento de Produto Não Encontrado

Quando o ID informado é numérico, mas não corresponde a nenhum produto cadastrado, é utilizado o NotFoundException.

Exemplo:

GET /produtos/67
Resposta
{
  "message": "Produto com ID 67 não encontrado",
  "error": "Not Found",
  "statusCode": 404
}

O evento também é registrado no Logger:

Produto com 67 não localizado
✅ Busca Realizada com Sucesso

Quando o ID corresponde a um produto existente, a API retorna 200 OK.

Exemplo:

GET /produtos/1
Resposta
{
  "id": 1,
  "nome": "Arroz Namorados",
  "preco": 9.99
}
📊 Status Codes Utilizados
Status	Significado	Situação
200 OK	Requisição realizada com sucesso	Produto encontrado
400 Bad Request	Requisição inválida	ID não numérico
404 Not Found	Recurso não encontrado	Produto inexistente
🧪 Testes no Insomnia

Foram realizados testes para verificar diferentes situações da API.

🟢 Produto encontrado
GET /produtos/1

Resultado:

200 OK
🟡 ID inválido
GET /produtos/abcde

Resultado:

400 Bad Request
🔴 Produto inexistente
GET /produtos/67

Resultado:

404 Not Found
📝 Logs

A aplicação utiliza o Logger do NestJS para registrar situações importantes durante as requisições.

Exemplos:

Tentativa de buscar com ID abcde não numérico.
Produto com 67 não localizado

Isso permite acompanhar o comportamento da aplicação diretamente pelo terminal.

▶️ Executando o Projeto

Instale as dependências:

npm install

Inicie o projeto em modo de desenvolvimento:

npm run start:dev

A API ficará disponível em:

http://localhost:3000
🚀 Resumo

Nesta aula, foi implementado o tratamento de erros na API de produtos utilizando recursos do NestJS.

Foram trabalhados:

✅ Criação do ProdutoService
✅ Criação do ProdutosController
✅ Busca de produtos por ID
✅ Validação de parâmetros
✅ BadRequestException
✅ NotFoundException
✅ Logger
✅ Status Codes 200, 400 e 404
✅ Testes utilizando Insomnia