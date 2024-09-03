package testepacto.service;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import testepacto.DTO.VendaPixDTO;
import testepacto.model.Venda;
import testepacto.model.VendaCartao;
import testepacto.repository.VendaBoletoRepository;
import testepacto.repository.VendaCartaoRepository;
import testepacto.repository.VendaPixRepository;
import testepacto.repository.VendaRepository;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class VendaService {

    private final VendaPixRepository vendaPixRepository;

    private final VendaBoletoRepository vendaBoletoRepository;

    private final VendaCartaoRepository vendaCartaoRepository;

    private final VendaRepository vendaRepository;

    public List<Venda> findAllByUsuario(Long usuarioId) {
        return vendaRepository.findAllByUsuarioId(usuarioId);
    }

    public Optional<Venda> findById(Long id) {
        return vendaRepository.findById(id);
    }

    public Venda gerarVendaPix(VendaPixDTO venda) {

        return vendaRepository.save(venda.getVenda());
    }

    public Venda gerarVendaCartao(VendaCartao venda) {

        return vendaRepository.save(venda);
    }

    public void deleteById(Long id) {
        vendaRepository.deleteById(id);
    }
}
