import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {CartaoService} from "../../../../core/services/cartao.service";
import {NgIf} from "@angular/common";
import {NgxMaskDirective} from "ngx-mask";

@Component({
  selector: 'app-fields-cartao',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf,
    NgxMaskDirective,
  ],
  templateUrl: './fields-cartao.component.html',
  styleUrl: './fields-cartao.component.css'
})
export class FieldsCartaoComponent implements OnInit {

  @Input() formPagamento: FormGroup;

  public exibirBandeiraCartao: boolean = false;
  imagemCartao: string = "";

  constructor(private fb: FormBuilder, private cartaoService: CartaoService) {
    this.formPagamento = fb.group({
      numeroCartao: ['', [Validators.required, Validators.maxLength(16), Validators.minLength(16)]]
    });
  }

  ngOnInit(): void {
    this.formPagamento.addControl('cvv', this.fb.control(['', [Validators.required, Validators.maxLength(4)]]))
    this.formPagamento.addControl('validade', this.fb.control(['', [Validators.required, Validators.maxLength(7)]]))
    this.formPagamento.addControl('nomeCartao', this.fb.control(['', [Validators.required, Validators.maxLength(25)]]))
    this.formPagamento.addControl('cpfOuCnpj', this.fb.control(['', [Validators.required, Validators.maxLength(14)]]))
  }

  onBlurNumeroCartao(): void {

    let numeroCartaoField = this.formPagamento.get('numeroCartao');

    if (!numeroCartaoField?.valid) {
      return;
    }

    this.cartaoService.getBandeiraFromBin(numeroCartaoField?.value).subscribe({
      next: (data) => {
        this.imagemCartao = `../${data.Provider}.png`
      },
      error: (error) => {
        console.error('Erro ao obter os dados do cartão', error);
      }
    });

    this.exibirBandeiraCartao = true;
  }
}
