package testepacto.model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
public class VendaCartao extends Venda {

    private int parcelas;

    @OneToOne
    @JoinColumn(name = "cartao_id", referencedColumnName = "id")
    private Cartao cartao;

    private String codigoVenda;
    private String categoriaVenda;
    private String subCategoriaVenda;

}
