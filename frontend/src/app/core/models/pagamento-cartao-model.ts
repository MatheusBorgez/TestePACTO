import {CartaoModel} from "./cartao-model";
import {VendaModel} from "./venda-model";

export class PagamentoCartaoModel {

  id?: number;
  cartao: CartaoModel
  venda: VendaModel

  constructor(cartao: CartaoModel, venda: VendaModel, id?: number) {
    this.id = id;
    this.cartao = cartao;
    this.venda = venda;
  }
}
