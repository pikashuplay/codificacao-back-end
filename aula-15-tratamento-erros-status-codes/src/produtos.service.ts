import { Injectable } from "@nestjs/common";

@Injectable()
export class ProdutoService {
    produtos = [
        {id: 1, nome: 'Arroz Namorados', preco: 9.99},
        {id: 2, nome: 'Preto com dente', preco: 3.99},
        {id: 3, nome: 'Quero Quero', preco: 4.99},
        {id: 4, nome: 'Sal imalai', preco: 2.99},
    ];
    listaProdutos() {
        return this.produtos;
    }
}