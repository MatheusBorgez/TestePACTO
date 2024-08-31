package testepacto.model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
public class VendaCartao extends Venda {

    @OneToOne
    @JoinColumn(name = "cartao_id", referencedColumnName = "id")
    private Cartao cartao;

    @Column(nullable = false)
    private int parcelas;

    @Column(nullable = false)
    private String codigoVenda;

    private String categoriaVenda;
    private String subCategoriaVenda;

}
