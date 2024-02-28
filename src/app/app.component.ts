import { Component } from '@angular/core';
import { AppService, Livro } from './app.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {

  livros: Livro[] = [];

  constructor(private service: AppService) { }

  ngOnInit() {
    this.carregarLivros();
  }

  carregarLivros() {
    this.service.obterLivros().subscribe((resultado) => {this.livros = resultado});
  }

  cadastrar(titulo: string, autor: string, anoPublicacao: string) {
    const novoLivro: Livro = {
      titulo,
      autor,
      'ano_publicacao': anoPublicacao
    }
    this.service.cadastrarLivro(novoLivro).subscribe(() => { this.carregarLivros() })
  }
}
