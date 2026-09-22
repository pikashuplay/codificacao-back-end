import { Injectable, NotFoundException } from "@nestjs/common";

@Injectable()
export class LivrosService {
    private livros = [
        {id: 1, titulo: 'O Senhor dos Anéis', autor: 'J.R.R Tolkien'},
         {id: 2, titulo: '1984', autor: 'George Orwell'},
          {id: 3, titulo: 'Dom casmurro', autor: 'Machado de Assis'},
             {id: 4, titulo: 'O Pequeno Príncipe', autor: 'Antoine de Saint-Exupéry'},
                {id: 5, titulo: 'A Menina que Roubava Livros', autor: 'Markus Zusak'},

    ];

    encontrarPorId(id: number){
        const livro = this.livros.find((livro) => livro.id === id);
        if(!livro){
            throw new NotFoundException(`Livro com ID ${id} não localizado em nosso acervo.`);
        }
        return livro;
    }
}