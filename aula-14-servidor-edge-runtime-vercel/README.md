⚡ Aula 14: Serverless e Edge Functions (/api/hora-servidor)

Nesta etapa, exploramos a execução de Edge Functions (Serverless) para obter respostas de alta performance e baixa latência. A função é executada diretamente nas bordas da rede (Vercel Edge Network), utilizando informações do ambiente de execução e retornando dados dinâmicos do servidor.

🛠️ Tecnologias e Recursos Aplicados
Edge Runtime (runtime: 'edge'): Configuração para execução da função no ambiente Edge.
Vercel: Utilização da plataforma para criação e implantação da função.
Response Nativa (Fetch API): Retorno de respostas no padrão HTTP com cabeçalho content-type: application/json.
Horário do servidor: Formatação da data e hora utilizando o padrão pt-BR.
Região de execução: Identificação da região do ambiente, utilizando local-dev durante a execução local.
Tempo de execução: Cálculo do tempo necessário para a execução da função.
📂 Arquivos Criados/Alterados
api/hora-servidor.ts: Edge Function responsável por retornar informações sobre o horário, região e tempo de execução do servidor.
package.json: Configuração do projeto utilizado com a Vercel.
⚙️ Configuração da Edge Function

A função foi configurada utilizando:

export const config = {
  runtime: 'edge'
};

O arquivo hora-servidor.ts possui um handler responsável por processar a requisição e retornar uma resposta em formato JSON.

🧪 Testando no Insomnia
🟢 Obter Horário e Região do Servidor
Método: GET
URL: http://localhost:3000/api/hora-servidor

Resposta esperada:

{
  "mensagem": "FUNÇÃO executada com sucesso!",
  "horarioServidor": "06/10/2026, 15:50:49",
  "regiao": "local-dev",
  "tempoExecução": "10"
}

A resposta apresenta:

mensagem: confirmação de que a função foi executada.
horarioServidor: horário atual do servidor.
regiao: região em que a função está sendo executada.
tempoExecução: tempo utilizado durante a execução da função.