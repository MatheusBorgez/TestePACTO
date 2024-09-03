import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {EnderecoModel} from "../../../../core/models/endereco-model";
import {NgIf} from "@angular/common";
import {EstadosEnum} from "../../../../core/Enums/estados-enum";
import {NgxMaskDirective} from "ngx-mask";

@Component({
  selector: 'app-fields-boleto',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    ReactiveFormsModule,
    NgxMaskDirective
  ],
  templateUrl: './fields-boleto.component.html',
  styleUrl: './fields-boleto.component.css'
})
export class FieldsBoletoComponent implements OnInit {
  @Input() formPagamento: FormGroup;

  estados = Object.entries(EstadosEnum);
  estadoSelecionado: string = EstadosEnum.AC;

  constructor(private fb: FormBuilder, private endereco: EnderecoModel) {
    this.formPagamento = fb.group({});
  }

  ngOnInit(): void {
    this.formPagamento.addControl('cep', this.fb.control(['', [Validators.required, Validators.maxLength(8)]]))
    this.formPagamento.addControl('numero', this.fb.control(['', [Validators.maxLength(10)]]))
    this.formPagamento.addControl('endereco', this.fb.control(['', [Validators.required]]))
    this.formPagamento.addControl('cidade', this.fb.control(['', [Validators.required]]))
    this.formPagamento.addControl('bairro', this.fb.control(['', [Validators.required]]))
    this.formPagamento.addControl('uf', this.fb.control(['', [Validators.required]]))
  }

}
