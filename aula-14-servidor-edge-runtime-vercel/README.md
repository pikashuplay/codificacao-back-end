# ⚡ Aula 14 — Serverless e Edge Functions

> Desenvolvimento de uma Edge Function utilizando o Vercel Edge Runtime para execução de funções diretamente na rede Edge.

---

## 🎯 Objetivo da Aula

Explorar o funcionamento de **Serverless e Edge Functions**, criando uma função capaz de retornar informações dinâmicas sobre o servidor, como horário, região de execução e tempo de execução.

---

## 🛠️ Tecnologias e Recursos

- ⚡ **Vercel**
- 🌐 **Edge Functions**
- 🚀 **Edge Runtime**
- 📡 **Fetch API / Response**
- 🟢 **Node.js**
- 🧪 **Insomnia**
- 📦 **TypeScript**

---

## 📂 Estrutura do Projeto

```text
aula-14-servidor-edge-runtime-vercel/
│
├── api/
│   └── hora-servidor.ts
│
├── .gitignore
└── package.json
⚙️ Configuração da Edge Function

A função foi configurada para utilizar o Edge Runtime:

export const config = {
  runtime: 'edge'
};

O arquivo hora-servidor.ts possui um handler responsável por receber a requisição e retornar os dados em formato JSON.

💻 Funcionamento

A função registra o momento inicial da execução:

const inicio = Date.now();

Em seguida, retorna informações como:

🕐 Horário do servidor
🌎 Região de execução
⏱️ Tempo de execução da função
✅ Mensagem de confirmação

A resposta utiliza a API Response:

return new Response(
  JSON.stringify({
    mensagem: 'FUNÇÃO executada com sucesso!',
    horarioServidor: new Date().toLocaleString('pt-BR'),
    regiao: 'local-dev',
    tempoExecução: `${Date.now() - inicio}`,
  }),
  {
    status: 200,
    headers: { 'content-type': 'application/json' },
  },
);
🧪 Testando com Insomnia
📌 Requisição

Método:

GET

URL:

http://localhost:3000/api/hora-servidor
✅ Resposta
{
  "mensagem": "FUNÇÃO executada com sucesso!",
  "horarioServidor": "06/10/2026, 15:50:49",
  "regiao": "local-dev",
  "tempoExecução": "10"
}
📊 Dados Retornados
Campo	Descrição
mensagem	Confirma que a função foi executada com sucesso
horarioServidor	Data e hora do servidor
regiao	Região onde a função está sendo executada
tempoExecução	Tempo utilizado para executar a função
🚀 Configuração da Vercel

O projeto foi configurado utilizando a CLI da Vercel:

vercel

Durante a configuração, foi criado o projeto e realizado o vínculo com a aplicação.

Para executar o ambiente local:

vercel dev

A aplicação fica disponível em:

http://localhost:3000
🌐 Deploy

Para realizar o deploy em produção:

vercel --prod

Após o deploy, a função pode ser acessada pela rota:

/api/hora-servidor
📚 O que foi desenvolvido

Nesta aula foram trabalhados:

⚡ Edge Functions
🚀 Edge Runtime
🌐 Vercel
📡 Respostas HTTP em JSON
🕐 Informações dinâmicas do servidor
⏱️ Tempo de execução
🧪 Testes utilizando Insomnia
💻 Execução local com vercel dev
🌎 Deploy da aplicação na Vercel
✅ Resultado

Ao final da aula, foi criada uma Edge Function funcional, capaz de processar requisições HTTP e retornar informações dinâmicas do ambiente de execução.