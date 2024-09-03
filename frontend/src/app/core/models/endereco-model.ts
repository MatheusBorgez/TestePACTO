export class EnderecoModel {
  id?: number;
  cep: string;
  uf: string;
  cidade: string;
  bairro: string;
  endereco: string;
  numero?: string;

  constructor(id: number, cep: string, uf: string, cidade: string, bairro: string, endereco: string, numero: string) {
    this.id = id;
    this.cep = cep;
    this.uf = uf;
    this.cidade = cidade;
    this.bairro = bairro;
    this.endereco = endereco;
    this.numero = numero;
  }
}
