## 📚 Aula 06 — Servidor Web HTTP com Node.js

Nesta aula, foi desenvolvido um servidor web HTTP utilizando Node.js e o módulo nativo `http`. Foram trabalhados conceitos de criação de servidor, requisições, respostas, rotas, códigos de status HTTP, cabeçalhos e testes das rotas.

### 🎯 Objetivo da aula

Aprender a criar um servidor HTTP básico utilizando Node.js, identificar as requisições recebidas e retornar respostas diferentes de acordo com a URL acessada.

### 🔹 1. Criação da estrutura da aula

Foi criada a pasta:

`aula06-servidor-web-http`

Dentro dela foram utilizados os arquivos:

- `servidor.js`
- `package.json`
- `README.md`

### 🔹 2. Importação do módulo HTTP

No arquivo `servidor.js`, foi utilizado o módulo nativo `http` do Node.js:

```javascript
import http from 'http';

Esse módulo permite criar servidores HTTP sem a necessidade de instalar bibliotecas externas.

🔹 3. Criação do servidor

Foi criado um servidor utilizando:

const servidor = http.createServer((req, res) => {

A função recebe dois objetos principais:

req — representa a requisição recebida;
res — representa a resposta que será enviada ao cliente.
🔹 4. Registro das requisições

Foi utilizado console.log() para visualizar no terminal o método HTTP e a URL acessada:

console.log(`[LOG Método recebido: ${req.method} | ${req.url}`);

Com isso, foi possível acompanhar requisições como:

GET /
GET /status
GET /teste
GET /local
GET /favicon.ico
🔹 5. Configuração dos cabeçalhos

Foi criado um objeto chamado cabecalhoPadrao para definir cabeçalhos de segurança:

const cabecalhoPadrao = {
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY',
};

Esses cabeçalhos são adicionados às respostas do servidor.

🔹 6. Criação da rota /status

Foi criada uma condição para identificar quando o usuário acessa:

/status

Quando essa rota é acessada, o servidor retorna o código HTTP 200:

res.writeHead(200, {
    ...cabecalhoPadrao,
    'Content-Type': 'application/json'
});

Também foi retornada uma resposta em formato JSON:

res.end(JSON.stringify({servidor: 'Online'}));

O resultado indica que o servidor está online.

🔹 7. Tratamento de rotas inexistentes

Para URLs que não possuem uma rota configurada, foi criado um tratamento utilizando o código HTTP 404:

res.writeHead(404, {
    ...cabecalhoPadrao,
    'Content-Type': 'application/json'
});

A resposta retornada informa:

{ erro: 'Página não encontrada' }

Dessa forma, o servidor consegue informar quando uma página ou rota não existe.

🔹 8. Configuração da porta

O servidor foi configurado para utilizar a porta 3000:

servidor.listen(3000, () => {
    console.log('Sentinela ativo na porta 3000');
});

Após iniciar o servidor, foi exibida no terminal a mensagem:

Sentinela ativo na porta 3000
🔹 9. Execução do servidor

O servidor foi executado pelo terminal utilizando:

node servidor.js

Após a execução, o servidor permaneceu ativo aguardando requisições HTTP.

🔹 10. Testes das requisições

Foram realizados testes acessando diferentes URLs e observando os registros exibidos no terminal.

Foram identificadas requisições para:

GET /
GET /favicon.ico
GET /status
GET /cu
GET /teste
GET /local

Esses testes permitiram verificar o comportamento do servidor para diferentes rotas.

🔹 11. Verificação do funcionamento

A rota /status foi utilizada para verificar se o servidor estava funcionando corretamente.

O servidor retornou:

{
    "servidor": "Online"
}

Também foi possível observar no terminal os métodos e caminhos das requisições recebidas.

🛠️ Tecnologias e conceitos utilizados
Node.js
JavaScript
ES Modules
Módulo nativo http
http.createServer()
Requisição HTTP
Resposta HTTP
Métodos HTTP
Rotas
JSON
Content-Type
Códigos HTTP 200 e 404
Cabeçalhos HTTP
console.log()
Execução de servidor pelo terminal
Testes de requisições
📌 Resumo da aula

Nesta aula, foi criado um servidor web HTTP utilizando Node.js e seu módulo nativo http. O servidor foi configurado para funcionar na porta 3000, registrar as requisições recebidas e fornecer respostas em JSON. Também foi criada a rota /status, que informa se o servidor está online, além do tratamento de rotas inexistentes utilizando o código HTTP 404. A aplicação foi executada e testada pelo terminal com diferentes requisições.

✅ Resultado

Ao final da aula, foi possível criar e executar um servidor HTTP básico capaz de:

Receber requisições;
Identificar método e URL;
Responder diferentes rotas;
Retornar dados em JSON;
Utilizar códigos de status HTTP;
Aplicar cabeçalhos de segurança;
Registrar as requisições no terminal.