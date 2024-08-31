package testepacto.model;

import lombok.Data;

import java.math.BigDecimal;
import java.util.List;

@Data
public class Carrinho {

    private List<Produto> produtos;
    private BigDecimal valorTotal;

}
