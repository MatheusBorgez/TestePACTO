package testepacto.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import testepacto.model.VendaPix;

@Repository
public interface VendaPixRepository extends JpaRepository<VendaPix, Long> {

}
