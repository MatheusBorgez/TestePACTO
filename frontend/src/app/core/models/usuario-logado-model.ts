export class UsuarioLogadoModel {
  idUsuario: string;
  nomeUsuario: string;
  token: string;

  constructor(idUsuario: string, nomeUsuario: string, token: string) {
    this.idUsuario = idUsuario;
    this.nomeUsuario = nomeUsuario;
    this.token = token;
  }

}
