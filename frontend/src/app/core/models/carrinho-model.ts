import {ProdutoModel} from "./produto-model";

export class CarrinhoModel {
  id: number;
  produtos: ProdutoModel[];

  constructor(id: number, produtos: ProdutoModel[], valorTotal: number) {
    this.id = id;
    this.produtos = produtos;
  }

  get valorTotal(): number {
    return this.produtos.reduce((total, produto) => total + produto.preco, 0);
  }

}
