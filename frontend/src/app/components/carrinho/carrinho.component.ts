import {Component} from '@angular/core';
import {CarrinhoService} from "../../core/services/carrinho.service";
import {PagamentoService} from "../../core/services/pagamento.service";
import {Router} from "@angular/router";
import {NgFor, NgIf} from "@angular/common";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {TipoPagamentoEnum} from "../../core/Enums/tipo-pagamento-enum";
import {ProdutoModel} from "../../core/models/produto-model";
import {FieldsCartaoComponent} from "./fields/fields-cartao/fields-cartao.component";
import {FieldsBoletoComponent} from "./fields/fields-boleto/fields-boleto.component";
import {NgxMaskDirective} from "ngx-mask";
import {PagamentoCartaoModel} from "../../core/models/pagamento-cartao-model";
import {CartaoModel} from "../../core/models/cartao-model";
import {VendaModel} from "../../core/models/venda-model";
import {UsuarioLogadoModel} from "../../core/models/usuario-logado-model";
import {LocalStorageService} from "../../core/services/local-storage.service";
import {StatusVendaEnum} from "../../core/Enums/status-venda-enum";
import {PagamentoPixModel} from "../../core/models/pagamento-pix-model";

@Component({
  selector: 'app-carrinho',
  standalone: true,
  imports: [NgFor, NgIf, FormsModule, FieldsCartaoComponent, FieldsBoletoComponent, ReactiveFormsModule, NgxMaskDirective],
  templateUrl: './carrinho.component.html',
  styleUrl: './carrinho.component.css'
})
export class CarrinhoComponent {

  formPagamento: FormGroup;
  formaPagamentoSelecionada: TipoPagamentoEnum = TipoPagamentoEnum.CARTAO;
  protected readonly TipoPagamentoEnum = TipoPagamentoEnum;

  constructor(public carrinhoService: CarrinhoService, private pagamentoService: PagamentoService,
              private route: Router, private fb: FormBuilder, private localStorageService: LocalStorageService) {
    this.formPagamento = fb.group({
      cpfOuCnpj: ['', [Validators.required, Validators.maxLength(18)]],
      nomeCompleto: ['', [Validators.required]]
    });
  }

  onFormaPagamentoChanged(formaPagamento: TipoPagamentoEnum) {
    this.formaPagamentoSelecionada = formaPagamento;
  }

  removerProdutoCarrinho(produto: ProdutoModel): void {
    this.carrinhoService.removerProduto(produto.id)
  }

  gerarPagamentoPix(venda: VendaModel): void {
    const pagamentoPix = new PagamentoPixModel(
      this.formPagamento.get('nomeCompleto')?.value,
      this.formPagamento.get('cpfOuCnpj')?.value,
      venda,
      venda.usuario.idUsuario
    )

    this.pagamentoService.realizarPagamentoPix(pagamentoPix);
  }

  gerarPagamentoCartao(venda: VendaModel, usuarioLogado: UsuarioLogadoModel) {
    const cartao = new CartaoModel(
      this.formPagamento.get('numeroCartao')?.value,
      this.formPagamento.get('nomeCartao')?.value,
      this.formPagamento.get('validade')?.value,
      this.formPagamento.get('cvv')?.value,
      usuarioLogado
    );

    const pagamentoCartao = new PagamentoCartaoModel(
      cartao,
      venda
    );

    this.pagamentoService.realizarPagamentoCartao(pagamentoCartao);
  }

  onSubmit(): void {
    if (this.formPagamento.valid) {

      const usuarioLogado = new UsuarioLogadoModel(
        this.localStorageService.getItem('idUsuario'),
        this.localStorageService.getItem('nomeUsuario'),
        this.localStorageService.getItem('tokenUsuario'),
      );

      const venda = new VendaModel(
        this.carrinhoService.getCarrinho().valorTotal,
        this.formaPagamentoSelecionada,
        StatusVendaEnum.PENDENTE,
        this.carrinhoService.getCarrinho().produtos,
        usuarioLogado
      );

      if (this.formaPagamentoSelecionada === TipoPagamentoEnum.CARTAO) {

        this.gerarPagamentoCartao(venda, usuarioLogado)

      } else if (this.formaPagamentoSelecionada === TipoPagamentoEnum.PIX) {

        this.gerarPagamentoPix(venda);

      } else {
        return;
      }

      this.carrinhoService.limparCarrinho();
      this.route.navigate(['/pedido'])
    }
  }
}
