## 📚 Aula 05 — Variáveis de Ambiente e Configuração

Nesta aula, foram estudadas e aplicadas variáveis de ambiente em uma aplicação Node.js, utilizando o pacote `dotenv` para carregar configurações externas de forma mais segura e organizada.

### 🎯 Objetivo da aula

Aprender a utilizar variáveis de ambiente para armazenar configurações da aplicação, como porta do servidor, chave de API e URL do banco de dados, evitando deixar essas informações diretamente no código-fonte.

### 🔹 1. Criação e configuração do projeto

Foi criada a pasta:

`aula05-variaveis-ambiente-configuracao`

O projeto foi configurado com Node.js e recebeu suas dependências necessárias.

Também foram utilizados os arquivos:

- `app.js`
- `package.json`
- `.env`
- `.env.example`
- `.gitignore`

### 🔹 2. Instalação e utilização do dotenv

Foi utilizado o pacote `dotenv` para carregar as variáveis armazenadas no arquivo `.env`.

No arquivo `app.js`, foi feita a importação:

```javascript
import dotenv from 'dotenv';

Em seguida, o dotenv foi inicializado:

dotenv.config();

Dessa forma, as variáveis definidas no .env ficam disponíveis através de process.env.

🔹 3. Criação do arquivo .env

Foi criado o arquivo .env para armazenar as configurações da aplicação.

Foram definidas variáveis como:

PORT=3000
API_KEY_PAGAMENTO=...
DATABASE_URL=mongodb://localhost:27017/banco_meu

Essas informações ficam separadas do código principal da aplicação.

⚠️ O arquivo .env não deve ser enviado para o GitHub quando contém chaves ou informações privadas.

🔹 4. Criação do .env.example

Foi criado o arquivo .env.example como modelo das variáveis necessárias para executar o projeto.

Exemplo:

PORT=
API_KEY_PAGAMENTO=
DATABASE_URL=

O arquivo serve para mostrar quais configurações precisam ser preenchidas sem expor os valores reais.

🔹 5. Configuração do .gitignore

Foi configurado o .gitignore para impedir que arquivos desnecessários ou informações privadas sejam enviados para o repositório.

Foram adicionados:

.env
node_modules/
*.log

Assim, o arquivo .env, a pasta node_modules e arquivos de log ficam fora do controle de versão.

🔹 6. Criação da função de inicialização

No app.js, foi criada a função:

iniciarAplicacao()

Essa função é responsável por carregar e utilizar as configurações da aplicação.

🔹 7. Leitura das variáveis de ambiente

Foram utilizadas variáveis através do process.env:

const porta = process.env.PORT || 8080;
const apiKey = process.env.API_KEY_PAGAMENTO;
const dbUrl = process.env.DATABASE_URL;

Também foi configurado um valor padrão para a porta caso a variável PORT não esteja definida.

🔹 8. Validação da chave da API

Foi criada uma validação para verificar se a chave da API de pagamento foi configurada:

if (!apiKey) {
    console.error('ERRO CRÍTICO: a chave API_KEY_PAGAMENTO não está definida na variáveis de ambiente!');
    process.exit(1);
}

Caso a chave não exista, a aplicação encerra sua execução para evitar que o sistema funcione com uma configuração incompleta.

🔹 9. Exibição das configurações

Após carregar as variáveis, foram exibidas mensagens no console indicando:

A configuração do serviço;
A porta em que o servidor está configurado;
A conexão com o banco de dados;
O status da API de pagamento.

Para a chave da API, foi utilizado o tamanho da chave em vez de exibir seu conteúdo completo:

apiKey.length

Isso ajuda a evitar a exposição direta da chave no console.

🔹 10. Execução da aplicação

Por fim, a função foi executada com:

iniciarAplicacao();

Assim, ao iniciar a aplicação, as variáveis de ambiente são carregadas e utilizadas para configurar o sistema.

🛠️ Tecnologias e conceitos utilizados
Node.js
JavaScript
ES Modules
dotenv
process.env
Variáveis de ambiente
Arquivo .env
.env.example
.gitignore
Configuração de aplicação
Validação de configurações
Proteção de informações sensíveis
MongoDB
API de pagamento
📌 Resumo da aula

Nesta aula, foi implementado um sistema de configuração utilizando variáveis de ambiente em uma aplicação Node.js. Foi utilizado o dotenv para carregar as configurações do arquivo .env, criado um .env.example como modelo e configurado o .gitignore para evitar o envio de informações sensíveis ao repositório. Também foi criada uma função para inicializar a aplicação, validar configurações e exibir o status do serviço.