export class CardInfoModel {
  Status: string;
  Provider: string;
  CardType: string;
  ForeignCard: boolean;
  CorporateCard: boolean;
  Issuer: string;
  IssuerCode: string;
  Prepaid: boolean;

  constructor(Status: string, Provider: string, CardType: string, ForeignCard: boolean, CorporateCard: boolean,
              Issuer: string, IssuerCode: string, Prepaid: boolean) {
    this.Status = Status;
    this.Provider = Provider;
    this.CardType = CardType;
    this.ForeignCard = ForeignCard;
    this.CorporateCard = CorporateCard;
    this.Issuer = Issuer;
    this.IssuerCode = IssuerCode;
    this.Prepaid = Prepaid;
  }
}
