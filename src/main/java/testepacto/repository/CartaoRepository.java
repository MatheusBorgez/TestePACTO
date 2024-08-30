package testepacto.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import testepacto.model.Cartao;

@Repository
public interface CartaoRepository extends JpaRepository<Cartao, Long> {

}
