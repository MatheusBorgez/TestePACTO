export class ProdutoModel {
  id: number;
  descricao: string;
  nome: string;
  preco: number;
  urlImagem: string;

  constructor(id: number, descricao: string, nome: string, preco: number, urlImagem: string) {
    this.id = id;
    this.descricao = descricao;
    this.nome = nome;
    this.preco = preco;
    this.urlImagem = urlImagem
  }

}
