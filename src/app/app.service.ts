import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


export interface Livro {
  titulo: string;
  autor: string;
  'ano_publicacao': string;
  id?: number;
}

@Injectable({ providedIn: 'root' })
export class AppService {

  private urlBase = 'http://localhost:8080';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  obterLivros(): Observable<Livro[]> {
    return this.http.get<Livro[]>(`${this.urlBase}/api/livros`);
  }

  cadastrarLivro(livro: Livro) {
    return this.http.post(`${this.urlBase}/api/livros`, livro);
  }

}
