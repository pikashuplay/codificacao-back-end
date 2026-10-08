import { Controller, Get, Param, BadRequestException, NotFoundException, Logger } from "@nestjs/common";
import { ProdutoService } from "./produtos.service.js";

@Controller('produtos')
export class ProdutosController {
    private readonly Logger = new Logger(ProdutosController.name);
    constructor(private readonly produtosService: ProdutoService) {}

    produtos (){
        return this.produtosService.listaProdutos();
    }
    @Get(':id')
    buscarProduto(@Param('id') idproduto: string){
        const id = Number(idproduto);
        if(isNaN(id)){
            this.Logger.warn(`Tentativa de buscar com ID ${idproduto} não numérico.`);
            throw new BadRequestException('O ID do produto deve ser um número interior.');
        }
        const produto = this.produtos().find((produto) =>produto.id === id);
        if(!produto){
            this.Logger.warn(`Produto com ${id} não localizado`);
            throw new NotFoundException(`Produto com ID ${id} não encontrado`);
        }
        return produto;
    }
}