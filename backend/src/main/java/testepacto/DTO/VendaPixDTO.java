package testepacto.DTO;

import lombok.Data;
import testepacto.model.Venda;

@Data
public class VendaPixDTO {

    private Venda venda;
    private String nomeCompleto;
    private String cpfOuCnpj;
    private Long usuarioId;

}
