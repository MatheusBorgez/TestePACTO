package testepacto.model;

import jakarta.persistence.*;
import lombok.Data;
import testepacto.enumerator.StatusVenda;
import testepacto.enumerator.TipoPagamento;

import java.math.BigDecimal;
import java.util.List;

@Data
@Entity
@Inheritance(strategy = InheritanceType.JOINED)
public class Venda {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private BigDecimal valor;

    @Enumerated(EnumType.STRING)
    private TipoPagamento tipoPagamento;

    @Enumerated(EnumType.STRING)
    private StatusVenda statusVenda;

    @ManyToMany
    @JoinTable(
            name = "venda_produto",
            joinColumns = @JoinColumn(name = "venda_id"),
            inverseJoinColumns = @JoinColumn(name = "produto_id")
    )
    private List<Produto> produtos;

    @ManyToOne
    @JoinColumn(name = "usuario_id")
    private Usuario usuario;

}
