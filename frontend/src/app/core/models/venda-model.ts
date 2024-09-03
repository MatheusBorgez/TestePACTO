import {TipoPagamentoEnum} from "../Enums/tipo-pagamento-enum";
import {StatusVendaEnum} from "../Enums/status-venda-enum";
import {ProdutoModel} from "./produto-model";
import {UsuarioLogadoModel} from "./usuario-logado-model";

export class VendaModel {

  id?: number;
  valor: number;
  tipoPagamento: TipoPagamentoEnum;
  statusVenda: StatusVendaEnum;
  produtos: ProdutoModel[];
  usuario: UsuarioLogadoModel;

  constructor(valor: number, tipoPagamento: TipoPagamentoEnum, statusVenda: StatusVendaEnum,
              produtos: ProdutoModel[], usuario: UsuarioLogadoModel, id?: number) {
    this.id = id;
    this.valor = valor;
    this.tipoPagamento = tipoPagamento;
    this.statusVenda = statusVenda;
    this.produtos = produtos;
    this.usuario = usuario;
  }

}
