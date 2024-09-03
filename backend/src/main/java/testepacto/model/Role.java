package testepacto.model;

import jakarta.persistence.*;
import lombok.Data;
import testepacto.enumerator.RoleName;

@Data
@Entity
public class Role {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Enumerated(EnumType.STRING)
    private RoleName nome;
}
