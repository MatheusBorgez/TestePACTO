package testepacto.DTO;

import lombok.AllArgsConstructor;
import lombok.Data;
import testepacto.model.Venda;

@Data
@AllArgsConstructor
public class VendaPixDTO {

    private Venda venda;
    private String nomeCompleto;
    private String cpfOuCnpj;
    private Long usuarioId;
    private String tipoIdentidade;

}
