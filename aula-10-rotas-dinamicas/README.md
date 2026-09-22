10° AULA — Rotas Dinâmicas

Nesta aula foi desenvolvido um exemplo de rotas dinâmicas utilizando NestJS, trabalhando com parâmetros de URL para buscar livros pelo seu ID. A implementação foi organizada utilizando Controller e Service, separando a responsabilidade de receber as requisições e realizar a busca dos dados.

Criação da estrutura da aula
Foi criada a pasta:

aula-10-rotas-dinamicas

Dentro do projeto foi utilizada a estrutura padrão do NestJS, contendo a pasta src e os arquivos necessários para executar a aplicação.

A estrutura principal ficou organizada da seguinte forma:

aula-10-rotas-dinamicas/ ├── src/ │ ├── app.controller.ts │ ├── app.module.ts │ ├── app.service.ts │ ├── livros.controller.ts │ ├── livros.service.ts │ └── main.ts ├── test/ ├── package.json └── README.md 2. Criação do LivrosService

Foi criado o arquivo:

src/livros.service.ts

Nesse Service foi criado um array contendo livros com as seguintes informações:

ID; Título; Autor.

Foram cadastrados cinco livros para serem utilizados nos testes das rotas:

1 - O Senhor dos Anéis — J.R.R Tolkien 2 - 1984 — George Orwell 3 - Dom Casmurro — Machado de Assis 4 - O Pequeno Príncipe — Antoine de Saint-Exupéry 5 - A Menina que Roubava Livros — Markus Zusak 3. Implementação da busca por ID

No LivrosService foi criado o método:

encontrarPorId(id: number)

Esse método utiliza o find() para procurar dentro do array o livro que possui o ID informado:

const livro = this.livros.find((livro) => livro.id === id);

Dessa forma, a aplicação consegue localizar um livro específico através do seu identificador.

Tratamento de livro não encontrado
Também foi utilizado o NotFoundException do NestJS.

Quando o ID informado não corresponde a nenhum livro cadastrado, é lançada uma exceção:

throw new NotFoundException( Livro com ID ${id} não localizado em nosso acervo. );

Assim, a aplicação informa que o livro solicitado não foi encontrado.

Criação do LivrosController
Foi criado o arquivo:

src/livros.controller.ts

O Controller foi configurado com:

@Controller('livros')

Isso define livros como o caminho principal das rotas relacionadas aos livros.

Também foi feita a injeção do LivrosService através do construtor:

constructor(private readonly livroService: LivrosService) {}

Dessa maneira, o Controller consegue utilizar os métodos disponíveis no Service.

Criação da rota dinâmica
Foi criada uma rota GET utilizando um parâmetro dinâmico:

@Get(':id')

A rota permite acessar um livro informando seu ID na URL.

Foi utilizado o @Param() juntamente com o ParseIntPipe:

buscarPorId( @Param('id', ParseIntPipe) id: string )

O ParseIntPipe é utilizado para realizar a conversão do parâmetro recebido para um número inteiro.

Comunicação entre Controller e Service
Depois de receber o ID pela URL, o Controller chama o método encontrarPorId() do Service:

return this.livroService.encontrarPorId(numeroId);

Assim, o fluxo da aplicação ficou organizado da seguinte maneira:

Requisição HTTP ↓ LivrosController ↓ Recebe o ID da URL ↓ ParseIntPipe ↓ LivrosService ↓ Busca o livro pelo ID ↓ Retorna o livro 8. Configuração do app.module.ts

No arquivo:

src/app.module.ts

foram importados o LivrosController e o LivrosService.

O Controller foi adicionado em:

controllers: [LivrosController, AppController]

E o Service foi registrado em:

providers: [LivrosService, AppService]

Também foi mantida a configuração relacionada ao @nestjs/observe, presente no projeto.

Rota final
Com a configuração realizada, a rota utilizada para buscar um livro pelo ID segue o padrão:

GET /livros/:id

Por exemplo:

GET /livros/1

A aplicação recebe o ID 1, procura o livro correspondente no Service e retorna os dados encontrados.

Tratamento de erros
Foi implementado o tratamento para quando o ID informado não existir no array de livros.

Por exemplo, caso seja solicitado um ID que não esteja cadastrado, o LivrosService utiliza:

NotFoundException

para informar que o livro não foi localizado.

O que foi aprendido nesta aula

Nesta aula foram trabalhados:

Rotas dinâmicas no NestJS; Parâmetros de rota com @Param(); Utilização do ParseIntPipe; Criação e utilização de Controllers; Criação e utilização de Services; Injeção de dependências; Busca de dados utilizando find(); Tratamento de recursos não encontrados com NotFoundException; Organização entre Controller e Service; Configuração de Controllers e Providers no AppModule.

🛠️ Passos Realizados:
Criação da Regra de Negócio no Service (livros.service.ts):

Criação de um acervo mockado de livros armazenado em um array de objetos.
Implementação do método encontrarPorId(id: number), que busca um livro específico pelo seu id.
Adicionado o tratamento com NotFoundException (HTTP status 404) para retornar uma mensagem amigável caso o livro solicitado não seja encontrado no acervo.
Configuração de Rotas no Controller (app.controller.ts e livros.controller.ts):

Configurado o @Controller('status') no controller padrão para verificar a disponibilidade da API.
Criação de rota dinâmica com parâmetro (/livros/:id) utilizando o decorator @Param().
Mapeamento no Módulo Principal (app.module.ts):

Declaração dos controllers (LivrosController, AppController) e providers (LivrosService, AppService) no módulo @Module.
Testes e Validações no Insomnia:

Validação de Tipo (400 Bad Request): Ao realizar requisição passando parâmetro não numérico (GET /livros/abc), o NestJS disparou o erro de validação "Validation failed (numeric string is expected)".
Sucesso no Retorno (200 OK): Ao buscar por um ID válido (GET /livros/1), a API retornou o livro esperado em formato JSON:
{
  "id": 1,
  "titulo": "O Senhor dos Anéis",
  "autor": "J.R.R Tolkien"
}