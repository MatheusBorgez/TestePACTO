import {Component, OnInit} from '@angular/core';
import {ProdutoModel} from '../../core/models/produto-model';
import {ProdutoService} from '../../core/services/produto.service';
import {NgFor, NgIf} from '@angular/common';
import {CarrinhoService} from "../../core/services/carrinho.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  produtos: ProdutoModel[] = [];

  nomeUsuario: string | null = null;

  constructor(private produtoService: ProdutoService, private carrinhoService: CarrinhoService, private router: Router) {
  }

  ngOnInit(): void {

    this.produtoService.getProdutos().subscribe({
      next: (data: ProdutoModel[]) => {
        this.produtos = data;
      },
      error: (error) => {
        console.error('erro ao buscar os produtos', error);
      }
    })

    this.produtoService.getProdutos().subscribe((data: ProdutoModel[]) => {
      this.produtos = data;
    })
  }

  adicionarAoCarrinho(produto: ProdutoModel): void {
    this.carrinhoService.adicionarProduto(produto)
  }

  irParaProduto(produtoId: number) {
    this.router.navigate([`/produto/${produtoId}`]);
  }
}
