import {VendaModel} from "./venda-model";

export class PagamentoPixModel {
  id?: number;
  nomeCompleto: string;
  cpfOuCnpj: string;
  venda: VendaModel;
  usuarioId: string

  constructor(nomeCompleto: string, cpfOuCnpj: string, venda: VendaModel, usuarioId: string, id?: number) {
    this.id = id;
    this.cpfOuCnpj = cpfOuCnpj;
    this.nomeCompleto = nomeCompleto
    this.usuarioId = usuarioId
    this.venda = venda;
  }
}
