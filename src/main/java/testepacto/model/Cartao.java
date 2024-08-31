package testepacto.model;

import jakarta.persistence.*;
import lombok.Data;
import testepacto.enumerator.TipoCartao;
import org.springframework.validation.annotation.*;

@Data
@Entity
public class Cartao {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 16)
    private String numeroCartao;

    @Column(nullable = false, length = 25)
    private String nomeCartao;

    @Column(nullable = false, length = 7)
    private String validade;

    @Column(nullable = false)
    private TipoCartao tipoCartao;

    @Column(nullable = false)
    private String bandeira;

    @Transient
    private String cvv;

    @Column(length = 16)
    private String token;

    @OneToOne(cascade = CascadeType.ALL)
    private Usuario usuario;
}


