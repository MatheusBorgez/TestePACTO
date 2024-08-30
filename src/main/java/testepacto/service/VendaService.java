package testepacto.service;

import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import testepacto.model.Venda;
import testepacto.model.VendaBoleto;
import testepacto.model.VendaCartao;
import testepacto.repository.VendaBoletoRepository;
import testepacto.repository.VendaCartaoRepository;
import testepacto.repository.VendaPixRepository;
import testepacto.repository.VendaRepository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class VendaService {

    private final VendaPixRepository vendaPixRepository;

    private final VendaBoletoRepository vendaBoletoRepository;

    private final VendaCartaoRepository vendaCartaoRepository;

    private final VendaRepository vendaRepository;

    public List<Venda> findAll() {
        return vendaRepository.findAll();
    }

    public Optional<Venda> findById(Long id) {
        return vendaRepository.findById(id);
    }

    public Venda save(Venda venda) {
        return vendaRepository.save(venda);
    }

    public void deleteById(Long id) {
        vendaRepository.deleteById(id);
    }
}
