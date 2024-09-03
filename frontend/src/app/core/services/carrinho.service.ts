import {Injectable} from '@angular/core';
import {CarrinhoModel} from "../models/carrinho-model";
import {ProdutoModel} from "../models/produto-model";
import {LocalStorageService} from "./local-storage.service";

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  private carrinho: CarrinhoModel = new CarrinhoModel(0, [], 0);

  constructor(private localStorageService: LocalStorageService) {
    const produtos = this.localStorageService.getItem('carrinhoItens');
    if (produtos) {
      this.carrinho.produtos = JSON.parse(produtos);
    }
  }

  getCarrinho(): CarrinhoModel {
    return this.carrinho;
  }

  adicionarProduto(produto: ProdutoModel): void {
    const produtoExistente = this.carrinho.produtos.find(p => p.id === produto.id)

    if (!produtoExistente) {
      this.carrinho.produtos.push(produto);
    }

    this.salvarEstado();
  }

  removerProduto(produtoId: number): void {
    const index = this.carrinho.produtos.findIndex(p => p.id === produtoId)
    if (index !== -1) {
      this.carrinho.produtos.splice(index, 1);
    }

    this.salvarEstado();
  }

  limparCarrinho(): void {
    this.carrinho.produtos = [];
    this.salvarEstado();
  }

  private salvarEstado(): void {
    this.localStorageService.setItem('carrinhoItens', JSON.stringify(this.carrinho.produtos));
  }
}
