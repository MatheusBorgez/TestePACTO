import {VendaModel} from "./venda-model";
import {EnderecoModel} from "./endereco-model";

export class PagamentoBoletoModel {

  id: number;
  codigoBoleto: string
  endereco: EnderecoModel
  venda: VendaModel

  constructor(id: number, codigoBoleto: string, endereco: EnderecoModel, venda: VendaModel) {
    this.id = id;
    this.codigoBoleto = codigoBoleto;
    this.endereco = endereco;
    this.venda = venda;
  }
}
