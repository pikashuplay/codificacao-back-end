🟡 Aula 16 — Validação de DTOs com Zod e Custom Validation Pipe
📌 Sobre a Aula

Nesta aula, foi implementada a validação de dados enviados por requisições HTTP utilizando a biblioteca Zod, integrada ao NestJS por meio de um Custom Pipe, chamado ZodValidationPipe.

O objetivo é validar os dados recebidos antes que eles cheguem ao Controller, garantindo que as informações atendam às regras definidas e retornando mensagens claras quando houver erros.

🛠️ Tecnologias e Conceitos
Tecnologia / Recurso	Descrição
Zod	Define regras para validar os dados recebidos.
Schema Validation	Estabelece os requisitos que os dados precisam atender.
z.infer	Gera o tipo TypeScript com base no schema definido.
ZodValidationPipe	Intercepta e valida os dados antes de chegarem ao Controller.
safeParse()	Verifica se os dados estão de acordo com o schema.
BadRequestException	Retorna o erro HTTP 400 quando os dados são inválidos.
✅ Regras de validação

O schema colaboradorSchema define as seguintes validações:

Nome: deve conter no mínimo 3 letras.
E-mail: deve apresentar um formato válido.
Idade: deve ser de, no mínimo, 18 anos.
Departamento: deve ser TI, RH ou Financeiro.
📂 Arquivos Criados e Alterados
src/
├── colaborador.schema.ts
├── zod-validation.pipe.ts
├── colaboradores.controller.ts
├── app.controller.ts
└── app.module.ts
colaborador.schema.ts: define o schema de validação e o tipo Colaborador.
zod-validation.pipe.ts: implementa o Pipe responsável por validar os dados com o Zod.
colaboradores.controller.ts: recebe as requisições da rota /colaboradores e aplica o Pipe de validação.
app.controller.ts: atualiza a rota do controller principal para o prefixo /Status.
app.module.ts: organiza o registro dos controllers e módulos da aplicação.
🧪 Testes no Insomnia
1. Criar colaborador com dados válidos

<text>Método: POST</text>

Endpoint: http://localhost:3000/colaboradores

Body - JSON

Resposta esperada — 201 Created

{
  "message": "Colaborador criado com sucesso!",
  "colaborador": {
    "nome": "Alerrandro Matos",
    "email": "alerrandro.f@aluno.senai.br",
    "idade": 30,
    "departamento": "TI"
  }
}
2. Enviar dados inválidos

Método: POST

Endpoint: http://localhost:3000/colaboradores

Body — JSON

{
  "nome": "Yasmin love",
  "email": "ema",
  "idade": 15,
  "departamento": "Minhas"
}

Resposta esperada — 400 Bad Request

{
  "statusCode": 400,
  "erros": [
    {
      "campo": "nome",
      "mensagem": "O nome deve conter no mínimo 3 letras!"
    },
    {
      "campo": "email",
      "mensagem": "O email é inválido!"
    },
    {
      "campo": "idade",
      "mensagem": "A idade mínima é 18 anos!"
    },
    {
      "campo": "departamento",
      "mensagem": "O departamento deve ser obrigatoriamente TI, RH ou Financeiro!"
    }
  ]
}
🎯 Resultado da Aula

Ao concluir a atividade, foi implementada uma estrutura de validação de dados com Zod e NestJS, utilizando um Pipe personalizado para verificar as informações recebidas e retornar mensagens específicas para cada campo inválido.

Com isso, a aplicação passa a contar com validações organizadas e respostas de erro estruturadas para a rota de cadastro de colaboradores.

📚 Conteúdo: Validação de dados • Zod • NestJS • Custom Pipes • HTTP 400 • Insomnia