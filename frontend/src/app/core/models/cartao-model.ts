import {TipoCartaoEnum} from "../Enums/tipo-cartao-enum";
import {UsuarioLogadoModel} from "./usuario-logado-model";

export class CartaoModel {

  id?: number;
  numeroCartao: string;
  nomeCartao: string;
  validade: string;
  tipoCartao?: TipoCartaoEnum;
  bandeira?: string;
  cvv: string;
  token?: string;
  usuario: UsuarioLogadoModel;


  constructor(numeroCartao: string, nomeCartao: string, validade: string, cvv: string, usuario: UsuarioLogadoModel,
              tipoCartao?: TipoCartaoEnum, bandeira?: string, token?: string, id?: number) {
    this.id = id;
    this.numeroCartao = numeroCartao;
    this.nomeCartao = nomeCartao;
    this.validade = validade;
    this.tipoCartao = tipoCartao;
    this.bandeira = bandeira;
    this.cvv = cvv;
    this.token = token;
    this.usuario = usuario;
  }

}
