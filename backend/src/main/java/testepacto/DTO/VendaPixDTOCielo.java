package testepacto.DTO;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
public class VendaPixDTOCielo {

    private Custumer Costumer;
    private Payment Payment;
    private String MerchantOrderId;

    public VendaPixDTOCielo(VendaPixDTO vendaPix) {
        Costumer = new Custumer(vendaPix.getNomeCompleto(), vendaPix.getTipoIdentidade(), vendaPix.getCpfOuCnpj());
        Payment = new Payment("PIX", vendaPix.getVenda().getValor().toString());
        MerchantOrderId = vendaPix.getVenda().getId().toString();
    }

}

@Data
@AllArgsConstructor
class Custumer {
    private String Name;
    private String Identity;
    private String IdentityType;
}

@Data
@AllArgsConstructor
class Payment {
    private String Type;
    private String Amount;
}
