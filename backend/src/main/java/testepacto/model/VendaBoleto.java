package testepacto.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.Data;

@Data
@Entity
public class VendaBoleto extends Venda {

    @Column(nullable = false)
    private String codigoBoleto;

    @ManyToOne
    @JoinColumn(name = "endereco_id")
    private Endereco endereco;

}
