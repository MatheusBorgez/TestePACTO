package testepacto.model;

import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Data
@Entity
public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nome;

    @Column(unique=true, nullable=false, length=14)
    private String identidade;

    @Column(nullable=false)
    private String tipoIdentidade;

    @Column(nullable=false)
    private String email;

    private String senha;

    @ManyToMany
    @JoinTable(
            name = "usuario_endereco",
            joinColumns = @JoinColumn(name = "usuario_id"),
            inverseJoinColumns = @JoinColumn(name = "endereco_id")
    )
    private List<Endereco> enderecos;

    @ManyToMany
    @JoinTable(
            name = "usuario_cartao",
            joinColumns = @JoinColumn(name = "usuario_id"),
            inverseJoinColumns = @JoinColumn(name = "cartao_id")
    )
    private List<Cartao> cartoes;

}
