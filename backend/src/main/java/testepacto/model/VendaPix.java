package testepacto.model;

import jakarta.persistence.Entity;
import lombok.Data;

@Data
@Entity
public class VendaPix extends Venda {

    private String nomeCompleto;
    private String CpfOuCnpj;

}
