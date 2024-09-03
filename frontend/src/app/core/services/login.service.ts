import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {UsuarioLogadoModel} from "../models/usuario-logado-model";
import {LocalStorageService} from "./local-storage.service";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl = "http://localhost:8080/login"

  constructor(private http: HttpClient, private localStorageService: LocalStorageService) {
  }

  login(username: string, password: string): Observable<any> {
    return this.http.post(this.apiUrl, {username, password});
  }

  saveUserDetails(usuarioLogado: UsuarioLogadoModel): void {
    this.localStorageService.setItem('tokenUsuario', usuarioLogado.token);
    this.localStorageService.setItem('nomeUsuario', usuarioLogado.nomeUsuario);
    this.localStorageService.setItem('idUsuario', usuarioLogado.idUsuario);
  }

  getToken(): string | null {
    return this.localStorageService.getItem('tokenUsuario')
  }

  logout(): void {
    this.localStorageService.removeItem('tokenUsuario');
    this.localStorageService.removeItem('nomeUsuario');
    this.localStorageService.removeItem('idUsuario');
  }

  getNomeUsuario(): string | null {
    return this.localStorageService.getItem('nomeUsuario');
  }

  getIdUsuario(): string | null {
    return this.localStorageService.getItem('idUsuario');
  }
}
