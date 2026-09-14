## 📚 Aula 03 — Streams e Buffers no Node.js

Nesta aula, foram estudados os conceitos de **Streams e Buffers** no Node.js, utilizando streams para gerar, ler e processar grandes quantidades de dados de forma mais eficiente.

### 🔹 1. Criação da estrutura da aula

Foi criada a pasta:

`aula03-streams-buffers`

Dentro dela foram utilizados arquivos para geração e processamento dos logs, incluindo:

- `gerarLogGigante.js`
- `processarLogs.js`
- `servidor.log`
- `apenas_erros.log`
- `package.json`

### 🔹 2. Geração de um arquivo de log grande

No arquivo `gerarLogGigante.js`, foi utilizado o módulo nativo `fs` do Node.js.

Foi criado um `WriteStream` utilizando:

```javascript
fs.createWriteStream('servidor.log')

Esse stream foi utilizado para escrever uma grande quantidade de informações no arquivo servidor.log.

🔹 3. Simulação de registros do servidor

Foi criado um laço de repetição para gerar 200.000 registros de log.

Cada registro recebe um tipo:

ERROR
INFO

O tipo ERROR é gerado periodicamente para simular erros ocorrendo durante o funcionamento de um servidor.

As mensagens seguem um padrão contendo:

Data;
Número da linha;
Status HTTP;
Mensagem de teste;
Tipo do registro.
🔹 4. Finalização da escrita

Depois da geração dos registros, foi utilizado:

streamEscrita.end();

Esse comando encerra o processo de escrita no arquivo servidor.log.

🔹 5. Leitura do arquivo utilizando Stream

No arquivo processarLogs.js, foi utilizado novamente o módulo fs, juntamente com o módulo readline.

Foi criado um ReadStream para ler o arquivo:

fs.createReadStream('servidor.log')

Dessa forma, o arquivo pode ser processado gradualmente, em vez de precisar carregar todo o seu conteúdo na memória de uma só vez.

🔹 6. Processamento linha por linha

Foi utilizado:

readline.createInterface()

para transformar o stream de leitura em uma interface capaz de processar o arquivo linha por linha.

Também foi utilizado:

for await (const linha of leitorLinhaLinha)

para percorrer cada linha do arquivo de maneira assíncrona.

🔹 7. Filtro dos erros

Durante o processamento, foi utilizada uma condição para verificar se a linha contém:

ERROS

Quando uma linha correspondente é encontrada, ela é escrita no arquivo:

apenas_erros.log

Também foi criada uma variável para contabilizar a quantidade de erros encontrados.

🔹 8. Monitoramento do consumo de memória

Foi criada a função:

exibirConsumoMemoria()

para acompanhar o consumo de memória do processo.

Foi utilizado:

process.memoryUsage()

para obter informações sobre a memória utilizada pelo Node.js.

Foram exibidos principalmente:

RSS;
Heap utilizado.

O consumo foi convertido de bytes para MB para facilitar a visualização.

🔹 9. Mensagens de acompanhamento

Durante o processamento, foram exibidas mensagens no terminal indicando:

Início do processamento;
Consumo de memória no início;
Consumo de memória no final;
Finalização do processamento;
Quantidade de erros encontrados.
🔹 10. Resultado da aula

Ao final, foi possível gerar um arquivo de log grande e processá-lo utilizando Streams, filtrando somente os registros de erro para um novo arquivo.

Essa atividade demonstrou na prática como o uso de Streams permite trabalhar com arquivos grandes de maneira mais eficiente, evitando a necessidade de carregar todo o conteúdo na memória simultaneamente.

🛠️ Tecnologias e conceitos utilizados
Node.js
JavaScript
fs
readline
createWriteStream()
createReadStream()
Streams
Buffers
for await...of
Processamento assíncrono
Manipulação de arquivos
Filtro de dados
process.memoryUsage()
Monitoramento de memória
📌 Resumo da aula

Nesta aula, foram estudados Streams e Buffers no Node.js. Foi criado um arquivo de log contendo 200.000 registros e, posteriormente, desenvolvido um processamento utilizando streams para ler o arquivo linha por linha e filtrar os registros de erro. Também foi realizado o monitoramento do consumo de memória durante o processamento, demonstrando as vantagens do uso de streams para trabalhar com grandes volumes de dados.