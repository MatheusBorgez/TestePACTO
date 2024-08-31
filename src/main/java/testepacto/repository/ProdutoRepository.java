package testepacto.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import testepacto.model.Produto;

@Repository
public interface ProdutoRepository extends JpaRepository<Produto, Long> {
}
