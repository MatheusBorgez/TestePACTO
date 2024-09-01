import { Component, OnInit } from '@angular/core';
import { ProdutoModel } from '../../core/models/produto-model';
import { ProdutoService } from '../../core/services/produto.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  produtos: ProdutoModel[] = [];

  constructor(private produtoService: ProdutoService) {}

  ngOnInit(): void {
    this.produtoService.getProdutos().subscribe((data: ProdutoModel[]) => {
      this.produtos = data;
    })
  }

}
