package testepacto.DTO;

import lombok.AllArgsConstructor;
import lombok.Data;
import testepacto.model.Cartao;
import testepacto.model.Venda;

@Data
@AllArgsConstructor
public class VendaCartaoDTO {

    private Venda venda;
    private Cartao cartao;
    private Long usuarioId;

}
