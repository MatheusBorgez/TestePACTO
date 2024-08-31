package testepacto.model;

import jakarta.persistence.*;
import lombok.Data;

import java.math.BigDecimal;

@Data
@Entity
public class Produto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(columnDefinition = "TEXT CHARACTER SET utf8 COLLATE utf8_bin")
    private String descricao;

    private String nome;
    private BigDecimal preco;

    @Column(columnDefinition = "TEXT CHARACTER SET utf8 COLLATE utf8_bin")
    private String urlImagem;

}
