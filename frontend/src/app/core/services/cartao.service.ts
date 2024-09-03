import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {LoginService} from "./login.service";
import {CardInfoModel} from "../models/card-info-model";

@Injectable({
  providedIn: 'root'
})
export class CartaoService {

  private apiUrl = "http://localhost:8080/cartoes"

  constructor(private http: HttpClient, private loginService: LoginService) {
  }

  getBandeiraFromBin(numeroCartao: string) {

    const token = this.loginService.getToken();

    const header = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.get<CardInfoModel>(`${this.apiUrl}/cardBin/${numeroCartao}`, {headers: header});
  }
}
