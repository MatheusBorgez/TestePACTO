package testepacto.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import testepacto.model.Cartao;
import testepacto.model.VendaBoleto;

@Repository
public interface VendaBoletoRepository extends JpaRepository<VendaBoleto, Long> {
    
}
