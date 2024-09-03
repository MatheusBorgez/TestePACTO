import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {PagamentoCartaoModel} from "../models/pagamento-cartao-model";
import {PagamentoPixModel} from "../models/pagamento-pix-model";
import {PagamentoResponseModel} from "../models/pagamento-response";

@Injectable({
  providedIn: 'root'
})
export class PagamentoService {

  private apiUrl = "http://localhost:8080/vendas"

  constructor(private http: HttpClient) {

  }

  realizarPagamentoCartao(pagamentoCartao: PagamentoCartaoModel): PagamentoResponseModel {

    const header = new HttpHeaders().set('Authorization', `Bearer ${pagamentoCartao.venda.usuario.token}`);

    let pagamentoResponse = new PagamentoResponseModel();

    this.http.post(
      `${this.apiUrl}/cartao`,
      this.montarBodyPagamentoCartao(pagamentoCartao),
      {headers: header})
      .subscribe({
        next: (response) => {
          pagamentoResponse = response
        },
        error: (error) => {
          console.error("Falha no pagamento", error);
        }
      });

    return pagamentoResponse;
  }

  realizarPagamentoPix(pagamentoPix: PagamentoPixModel): PagamentoResponseModel {

    const header = new HttpHeaders().set('Authorization', `Bearer ${pagamentoPix.venda.usuario.token}`);

    let pagamentoResponse = new PagamentoResponseModel();

    this.http.post(
      `${this.apiUrl}/pix`,
      this.montarBodyPagamentoPix(pagamentoPix),
      {headers: header})
      .subscribe({
        next: (response) => {
          pagamentoResponse = response
        },
        error: (error) => {
          console.error("Falha no pagamento", error);
        }
      });

    return pagamentoResponse;
  }

  montarBodyPagamentoCartao(pagamentoCartao: PagamentoCartaoModel): any {
    return {
      venda: {
        valor: pagamentoCartao.venda.valor,
        tipoPagamento: pagamentoCartao.venda.tipoPagamento,
        statusVenda: pagamentoCartao.venda.statusVenda,
        produtos: pagamentoCartao.venda.produtos.map(produto => ({
          id: produto.id
        })),
      },
      cartao: {
        numeroCartao: pagamentoCartao.cartao.numeroCartao,
        nomeCartao: pagamentoCartao.cartao.nomeCartao,
        validade: pagamentoCartao.cartao.validade,
        cvv: '123',
      },
      usuarioId: pagamentoCartao.cartao.usuario.idUsuario
    }
  }

  montarBodyPagamentoPix(pagamentoPix: PagamentoPixModel): any {
    return {
      venda: {
        valor: pagamentoPix.venda.valor,
        tipoPagamento: pagamentoPix.venda.tipoPagamento,
        statusVenda: pagamentoPix.venda.statusVenda,
        produtos: pagamentoPix.venda.produtos.map(produto => ({
          id: produto.id
        })),
      },
      nomeCompleto: pagamentoPix.nomeCompleto,
      cpfOuCnpj: pagamentoPix.cpfOuCnpj,
      usuarioId: pagamentoPix.usuarioId
    }
  }
}
