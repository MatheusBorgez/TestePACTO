import {Component} from '@angular/core';
import {ProdutoModel} from "../../core/models/produto-model";
import {ActivatedRoute, Router} from "@angular/router";
import {ProdutoService} from "../../core/services/produto.service";
import {CarrinhoService} from "../../core/services/carrinho.service";

@Component({
  selector: 'app-produto',
  standalone: true,
  imports: [],
  templateUrl: './produto.component.html',
  styleUrl: './produto.component.css'
})
export class ProdutoComponent {
  produto!: ProdutoModel

  constructor(private router: Router, private route: ActivatedRoute, private produtoService: ProdutoService,
              private carrinhoService: CarrinhoService) {
  }

  ngOnInit(): void {

    const produtoId = Number(this.route.snapshot.paramMap.get('id'));

    this.produtoService.getProduto(produtoId).subscribe({
      next: (produto) => {
        this.produto = produto;
      }
      , error: (error) => {
        console.error('erro ao buscar o produto', error);
      }
    });
  }

  adicionarProdutoAoCarrinho() {
    this.carrinhoService.adicionarProduto(this.produto);
    this.router.navigate(['/usuario/carrinho'])
  }
}
