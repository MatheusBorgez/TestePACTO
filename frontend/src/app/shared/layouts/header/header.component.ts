import {Component, OnInit} from '@angular/core';
import {NgIf} from "@angular/common";
import {LoginService} from "../../../core/services/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  nomeUsuario: string | null = null;

  constructor(private loginService: LoginService, private route: Router) {
  }

  ngOnInit(): void {
    let nome = this.loginService.getNomeUsuario();
    this.nomeUsuario = nome ? nome.split(' ')[0] : ''
  }

  navigateToCarrinho() {
    this.route.navigate(['usuario/carrinho'])
  }
}
