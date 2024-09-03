import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from 'rxjs';
import {ProdutoModel} from '../models/produto-model';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private apiUrl = "http://localhost:8080/produtos"

  constructor(private http: HttpClient) {
  }

  getProdutos(): Observable<ProdutoModel[]> {
    return this.http.get<ProdutoModel[]>(this.apiUrl);
  }

  getProduto(produtoId: number) {
    return this.http.get<ProdutoModel>(`${this.apiUrl}/${produtoId}`);
  }
}
