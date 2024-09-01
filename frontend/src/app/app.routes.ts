import { Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {UsuarioComponent} from "./components/usuario/usuario.component";
import {LoginComponent} from "./components/login/login.component";
import {CheckoutComponent} from "./components/checkout/checkout.component";
import {ProdutoComponent} from "./components/produto/produto.component";
import {PageNotFoundComponent} from "./shared/layouts/page-not-found/page-not-found.component";

export const routes: Routes = [
  {path:"", redirectTo:"home", pathMatch:"full"},
  {path:"home", component:HomeComponent},
  {path:"usuario", component:UsuarioComponent},
  {path:"login", component:LoginComponent},
  {path:"checkout", component:CheckoutComponent},
  {path:"produto", component:ProdutoComponent},
  {path:"**", component:PageNotFoundComponent}
];
