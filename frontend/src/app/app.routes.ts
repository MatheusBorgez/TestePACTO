import {Routes} from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {LoginComponent} from "./components/login/login.component";
import {CheckoutComponent} from "./components/checkout/checkout.component";
import {ProdutoComponent} from "./components/produto/produto.component";
import {PageNotFoundComponent} from "./shared/layouts/page-not-found/page-not-found.component";
import {CartoesUsuarioComponent} from "./components/cartoesUsuario/cartoes.usuario.component";
import {CarrinhoComponent} from "./components/carrinho/carrinho.component";

export const routes: Routes = [
  {path: "", redirectTo: "home", pathMatch: "full"},
  {path: "home", component: HomeComponent},
  {
    path: "usuario", children: [
      {path: "carrinho", component: CarrinhoComponent},
      {path: "cartoes", component: CartoesUsuarioComponent},
      {path: "pedidos", component: CartoesUsuarioComponent},
    ]
  },
  {path: "login", component: LoginComponent},
  {path: "checkout", component: CheckoutComponent},
  {path: "produto/:id", component: ProdutoComponent},
  {path: "**", component: PageNotFoundComponent}
];
