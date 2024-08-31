package testepacto.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import testepacto.model.Venda;

import java.util.List;

@Repository
public interface VendaRepository extends JpaRepository<Venda, Long> {

    //@Query("SELECT v FROM Venda v JOIN v.usuario u WHERE v.usuario = :usuarioId")
    List<Venda> findAllByUsuarioId(@Param("usuarioId") Long usuarioId);
}
