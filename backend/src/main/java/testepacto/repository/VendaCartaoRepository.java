package testepacto.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import testepacto.model.VendaCartao;

@Repository
public interface VendaCartaoRepository extends JpaRepository<VendaCartao, Long> {
}
