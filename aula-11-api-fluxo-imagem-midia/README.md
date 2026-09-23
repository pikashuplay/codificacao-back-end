11° AULA — API de Fluxo de Imagem e Mídia

Nesta aula foi desenvolvido um fluxo de upload de arquivos de imagem utilizando NestJS, com armazenamento dos arquivos em uma pasta local, geração de nomes únicos, validação do tipo de arquivo e limitação do tamanho do arquivo enviado. Também foram realizados testes da API utilizando o Insomnia.

1. Criação do projeto

Foi criada a pasta da aula:

aula-11-api-fluxo-imagem-midia

O projeto foi estruturado utilizando o NestJS e organizado dentro da pasta src.

A estrutura principal ficou composta por:

aula-11-api-fluxo-imagem-midia/
├── src/
│   ├── app.controller.ts
│   ├── app.module.ts
│   ├── app.service.ts
│   ├── main.ts
│   ├── media.controller.ts
│   └── media.module.ts
├── uploads/
├── test/
├── package.json
└── README.md
2. Criação do MediaController

Foi criado o arquivo:

src/media.controller.ts

O Controller foi configurado com:

@Controller('midia')

Assim, as requisições relacionadas ao envio de arquivos ficam concentradas na rota de mídia.

3. Criação da rota de upload

Foi criada uma rota POST:

@Post('upload')

Com isso, o endpoint utilizado para enviar o arquivo ficou:

POST /midia/upload

O método responsável pelo recebimento do arquivo foi chamado de:

uploadFile()
4. Utilização do FileInterceptor

Para receber o arquivo enviado através da requisição, foi utilizado o:

FileInterceptor

A configuração foi feita utilizando:

@UseInterceptors(
  FileInterceptor('arquivo', {
    ...
  })
)

O nome do campo utilizado no envio do arquivo foi:

arquivo
5. Configuração do armazenamento

Foi utilizado o diskStorage do Multer para definir onde os arquivos enviados seriam armazenados.

O destino configurado foi:

./uploads

Dessa forma, os arquivos enviados pela API são armazenados dentro da pasta uploads do projeto.

6. Geração de nome único para os arquivos

Foi utilizado o pacote uuid para gerar identificadores únicos para os arquivos enviados.

Foi utilizada a função:

v4 as uuidv4

O nome do arquivo é formado utilizando o UUID juntamente com a extensão original:

const nomeUnico = `${uuidv4()}${extname(file.originalname)}`;

Isso evita que diferentes arquivos enviados com o mesmo nome acabem substituindo uns aos outros.

7. Limitação do tamanho do arquivo

Foi configurado um limite de:

fileSize: 2 * 1024 * 1024

Esse valor corresponde a 2 MB.

Portanto, arquivos que ultrapassam esse limite são rejeitados pela API.

Durante os testes no Insomnia, foi possível verificar esse comportamento através do retorno:

{
  "message": "File too large",
  "error": "Payload Too Large",
  "statusCode": 413
}
8. Validação dos tipos de arquivo

Também foi criada uma validação para permitir somente determinados formatos de imagem.

Os formatos permitidos foram:

jpg
jpeg
png
gif
webp

A validação utiliza o mimetype do arquivo:

if (!file.mimetype.match(/\.(jpg|jpeg|png|gif|webp)$/))

Caso o arquivo enviado não esteja entre os formatos permitidos, é lançada uma:

BadRequestException

com a mensagem informando os formatos aceitos.

9. Tratamento de arquivo não enviado

Foi adicionada uma validação para verificar se algum arquivo foi realmente enviado.

Caso nenhum arquivo seja recebido, a aplicação retorna:

throw new BadRequestException('Nenhum arquivo enviado')

Dessa forma, a API não continua o processamento quando não existe um arquivo na requisição.

10. Retorno das informações do arquivo

Após o upload realizado com sucesso, a API retorna informações sobre o arquivo enviado:

return {
  filename: file.fieldname,
  size: file.size,
  url: `http://localhost:3000/api/uploads/${file.filename}`,
};

O retorno apresenta:

nome/campo do arquivo;
tamanho do arquivo;
URL para acesso ao arquivo armazenado.
11. Configuração do AppModule

No arquivo:

src/app.module.ts

o MediaController foi importado e registrado no módulo:

controllers: [AppController, MediaController]

Dessa maneira, o NestJS passa a reconhecer e disponibilizar as rotas criadas para o upload de mídia.

12. Criação da pasta uploads

Foi criada a pasta:

uploads/

Essa pasta é utilizada para armazenar fisicamente os arquivos enviados através da API.

Após um upload realizado com sucesso, o arquivo aparece nessa pasta com o nome único gerado pelo UUID.

13. Teste do upload no Insomnia

Foi utilizado o Insomnia para testar a API.

A requisição utilizada foi:

POST http://localhost:3000/midia/upload

No corpo da requisição foi utilizado o formato:

Multipart Form

com o campo:

arquivo

e um arquivo de imagem selecionado para o envio.

14. Teste de upload realizado com sucesso

Foi realizado um teste enviando uma imagem válida.

A API retornou:

201 Created

e apresentou informações como:

{
  "filename": "arquivo",
  "size": 688511,
  "url": "http://localhost:3000/api/uploads/..."
}

Também foi possível verificar que o arquivo foi salvo na pasta uploads.

15. Teste de formato inválido

Foi realizado outro teste utilizando um arquivo:

.tiff

Como o formato .tiff não está entre os formatos permitidos, a API rejeitou o arquivo.

O Insomnia apresentou:

400 Bad Request

com a mensagem:

Apenas arquivos do tipo: jpg, jpeg, png, gif e webp são permitidos

Esse teste confirmou que a validação de formato está funcionando.

16. Teste de arquivo maior que 2 MB

Também foi realizado um teste enviando uma imagem que ultrapassava o limite configurado de 2 MB.

Nesse caso, a API retornou:

413 Payload Too Large

com a mensagem:

File too large

Esse teste confirmou o funcionamento da limitação de tamanho configurada no Multer.

O que foi desenvolvido nesta aula

Nesta aula foram trabalhados:

Upload de arquivos com NestJS;
FileInterceptor;
Multer;
diskStorage;
armazenamento local de arquivos;
criação da pasta uploads;
geração de nomes únicos com UUID;
validação de tipos de imagem;
limite de tamanho de arquivo de 2 MB;
BadRequestException;
tratamento de arquivos não enviados;
retorno de informações do arquivo;
criação de endpoint POST;
testes de API utilizando Insomnia;
teste de upload válido;
teste de formato inválido;
teste de arquivo acima do limite permitido.