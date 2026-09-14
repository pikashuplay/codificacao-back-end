## 📚 Aula 04 — Tratamento Global de Exceções

Nesta aula, foi desenvolvido um servidor utilizando **Node.js e Express**, com foco no tratamento global de erros e exceções. A atividade mostrou como identificar diferentes tipos de falhas e centralizar o tratamento dos erros da aplicação.

### 🔹 1. Configuração do projeto

Foi criada a pasta:

`aula04-tratamento-global-excecoes`

O projeto foi configurado utilizando o **Express** e possui os arquivos:

- `serve.js`
- `package.json`
- `package-lock.json`
- `node_modules`

### 🔹 2. Criação do servidor Express

No arquivo `serve.js`, foi importado o Express:

```javascript
import express from 'express';

Em seguida, foi criada a aplicação:

const app = express();

Também foi configurado o middleware para receber dados no formato JSON:

app.use(express.json());
🔹 3. Tratamento de exceções não capturadas

Foi utilizado o evento:

process.on('uncaughtException', ...)

Esse mecanismo permite identificar exceções que não foram capturadas durante a execução da aplicação.

Quando uma exceção desse tipo ocorre, uma mensagem de erro é exibida no console.

🔹 4. Tratamento de Promises rejeitadas

Também foi configurado o evento:

process.on('unhandledRejection', ...)

Ele permite identificar rejeições de Promises que não foram tratadas corretamente.

Dessa forma, foram trabalhados dois cenários importantes:

uncaughtException
unhandledRejection
🔹 5. Criação da rota de sucesso

Foi criada a rota:

/sucesso

Essa rota retorna uma resposta JSON informando que a operação foi realizada com sucesso.

Exemplo de resposta:

{
  "success": true,
  "message": "Operação Realizada com Sucesso!"
}
🔹 6. Simulação de erro síncrono

Foi criada a rota:

/erro-sincrono

Nessa rota, foi utilizado:

throw new Error(...)

para simular uma falha durante uma operação síncrona.

O erro é capturado pelo try/catch e enviado para o próximo middleware utilizando:

next(error);
🔹 7. Simulação de erro assíncrono

Também foi criada a rota:

/erro-assincrono

Essa rota simula um erro ocorrido em uma operação assíncrona através de uma Promise rejeitada.

Foi utilizado:

await Promise.reject(new Error(...));

O erro também é capturado pelo try/catch e encaminhado para o middleware de tratamento através do next(error).

🔹 8. Criação do middleware global de erros

Foi criado um middleware específico para tratar os erros da aplicação:

app.use((err, req, next) => {

Esse middleware centraliza o tratamento das exceções encaminhadas pelas rotas.

Assim, diferentes partes da aplicação podem enviar seus erros para um único ponto de tratamento.

🔹 9. Registro dos erros

Dentro do middleware global, foi utilizado:

console.error(...)

para registrar no console o erro ocorrido, incluindo informações do err.stack.

Isso facilita a identificação e investigação dos problemas durante o desenvolvimento.

🔹 10. Definição do status HTTP

Foi criada uma variável para determinar o status da resposta:

const status = err.status || 500;

Quando o erro possui um status específico, ele é utilizado. Caso contrário, o servidor utiliza o status:

500 - Internal Server Error
🔹 11. Resposta padronizada de erro

O servidor retorna uma resposta JSON contendo:

{
  "success": false,
  "message": "..."
}

Quando não existe uma mensagem definida no erro, é utilizado:

ERRO INTERNO DO SERVIDOR

Isso cria um padrão para as respostas de erro da API.

🔹 12. Inicialização do servidor

Por fim, foi configurado o servidor para executar na porta:

3000

através de:

app.listen(3000, ...)

Também foram adicionadas mensagens no console indicando que o servidor está funcionando e apresentando as rotas utilizadas para realizar os testes.

🛠️ Tecnologias e conceitos utilizados
Node.js
Express
JavaScript
ES Modules
Middleware
Tratamento de exceções
try/catch
throw new Error()
Promises
async/await
uncaughtException
unhandledRejection
next(error)
HTTP Status Code
Respostas JSON
Tratamento global de erros
📌 Resumo da aula

Nesta aula, foi desenvolvido um servidor Express com tratamento global de exceções. Foram criadas rotas para testar operações com sucesso, erros síncronos e erros assíncronos. Também foi implementado um middleware global responsável por capturar os erros, registrar as informações no console e retornar respostas JSON padronizadas para o cliente.