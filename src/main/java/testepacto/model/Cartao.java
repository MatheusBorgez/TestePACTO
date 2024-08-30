package testepacto.model;

import jakarta.persistence.*;
import lombok.Data;
import testepacto.enumerator.TipoCartao;

@Data
@Entity
public class Cartao {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String numeroCartao;
    private String nomeCartao;
    private String cvv;
    private String validade;
    private TipoCartao tipoCartao;
    private String bandeira;
}


