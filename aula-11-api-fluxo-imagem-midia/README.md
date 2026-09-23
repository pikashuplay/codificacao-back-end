# 11° AULA — API de Fluxo de Imagem e Mídia

Nesta aula foi desenvolvido um fluxo de upload de arquivos de imagem utilizando NestJS, com armazenamento local dos arquivos, geração de nomes únicos, validação dos tipos de arquivo e limitação do tamanho dos arquivos enviados.

Também foram realizados testes da API utilizando o Insomnia, verificando o funcionamento do upload e das validações implementadas.

## 1. Criação do projeto

Foi criada a pasta:

```text
aula-11-api-fluxo-imagem-midia

O projeto foi estruturado utilizando o NestJS.

Estrutura do projeto
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
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
2. Criação do MediaController

Foi criado o arquivo:

src/media.controller.ts

O Controller foi configurado para utilizar a rota:

@Controller('midia')

Dessa forma, as requisições relacionadas ao envio de arquivos são realizadas através da rota /midia.

3. Criação da rota de upload

Foi criada uma rota POST para receber os arquivos:

@Post('upload')

O endpoint utilizado ficou:

POST http://localhost:3000/midia/upload

O campo utilizado para enviar o arquivo foi definido como:

arquivo
4. Utilização do FileInterceptor

Para receber o arquivo enviado na requisição, foi utilizado o FileInterceptor do NestJS:

@UseInterceptors(
  FileInterceptor('arquivo', {
    ...
  })
)

O FileInterceptor permite que o arquivo enviado através da requisição seja recebido e processado pela aplicação.

5. Configuração do armazenamento

Foi utilizado o diskStorage do Multer para definir o armazenamento dos arquivos.

O destino configurado foi:

./uploads

Assim, os arquivos enviados através da API são armazenados localmente na pasta uploads.

6. Geração de nomes únicos

Foi utilizado o pacote uuid para gerar um identificador único para cada arquivo enviado.

Foi utilizada a função:

v4 as uuidv4

O nome do arquivo é gerado através do UUID juntamente com a extensão original:

const nomeUnico = `${uuidv4()}${extname(file.originalname)}`;

Dessa forma, cada arquivo recebe um nome único ao ser armazenado.

7. Limitação do tamanho do arquivo

Foi configurado um limite máximo de:

2 MB

A configuração utilizada foi:

limits: {
  fileSize: 2 * 1024 * 1024,
}

Quando um arquivo ultrapassa esse limite, a API retorna o erro:

413 Payload Too Large
8. Validação dos tipos de arquivo

Foi implementada uma validação para permitir somente determinados formatos de imagem.

Os formatos permitidos são:

JPG
JPEG
PNG
GIF
WEBP

A validação verifica o tipo MIME do arquivo enviado.

Caso o arquivo não esteja entre os formatos permitidos, a API retorna:

400 Bad Request

com a mensagem:

Apenas arquivos do tipo: jpg, jpeg, png, gif e webp são permitidos
9. Validação de arquivo não enviado

Também foi implementada uma verificação para identificar quando nenhuma imagem foi enviada.

Nesse caso, é lançada uma BadRequestException com a mensagem:

Nenhum arquivo enviado
10. Retorno do upload

Quando o upload é realizado com sucesso, a API retorna informações sobre o arquivo:

{
  "filename": "arquivo",
  "size": 688511,
  "url": "http://localhost:3000/api/uploads/arquivo.jpg"
}

O retorno apresenta informações como:

nome do arquivo;
tamanho do arquivo;
URL para acesso ao arquivo.
11. Configuração do AppModule

No arquivo:

src/app.module.ts

o MediaController foi importado e registrado no módulo:

controllers: [AppController, MediaController]

Com isso, o NestJS reconhece o Controller responsável pelo upload de arquivos.

12. Pasta de uploads

Foi criada a pasta:

uploads/

Essa pasta é utilizada para armazenar os arquivos enviados através da API.

Após um upload realizado com sucesso, o arquivo fica disponível dentro dessa pasta com o nome único gerado pelo UUID.

13. Testes utilizando o Insomnia

Foi utilizado o Insomnia para realizar os testes da API.

A requisição utilizada foi:

POST http://localhost:3000/midia/upload

O corpo da requisição foi configurado como:

Multipart Form

Utilizando o campo:

arquivo
14. Teste de upload válido

Foi enviada uma imagem em um formato permitido.

O servidor retornou:

201 Created

O arquivo foi armazenado na pasta uploads e a resposta apresentou as informações do arquivo enviado.

15. Teste de formato inválido

Foi realizado um teste utilizando um arquivo .tiff.

Como esse formato não está entre os formatos permitidos, a API rejeitou o arquivo.

Resultado:

400 Bad Request

Mensagem retornada:

Apenas arquivos do tipo: jpg, jpeg, png, gif e webp são permitidos
16. Teste de arquivo acima do limite

Também foi realizado um teste utilizando uma imagem maior que o limite de 2 MB.

Nesse caso, a API retornou:

413 Payload Too Large

com a mensagem:

File too large

Esse teste confirmou o funcionamento da limitação de tamanho configurada no upload.

17. Conteúdos trabalhados

Nesta aula foram trabalhados:

Upload de arquivos com NestJS;
FileInterceptor;
Multer;
diskStorage;
armazenamento local;
pasta uploads;
geração de nomes únicos com UUID;
validação de tipos de imagem;
limite de tamanho de 2 MB;
BadRequestException;
tratamento de erros;
endpoint POST;
testes utilizando Insomnia;
validação de formatos inválidos;
validação de arquivos muito grandes.