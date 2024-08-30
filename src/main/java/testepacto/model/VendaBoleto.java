package testepacto.model;

import jakarta.persistence.Entity;
import lombok.Data;

@Data
@Entity
public class VendaBoleto extends Venda {

    private String codigoBoleto;
    private String cep;
    private String estado;
    private String cidade;
    private String bairro;
    private String endereco;
    private String numero;

}
