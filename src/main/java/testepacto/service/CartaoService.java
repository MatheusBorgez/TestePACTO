package testepacto.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import testepacto.model.Cartao;
import testepacto.repository.CartaoRepository;

import java.util.List;
import java.util.Optional;

@Service
public class CartaoService {

    @Autowired
    private CartaoRepository cartaoRepository;

    public List<Cartao> findAll() {
        return cartaoRepository.findAll();
    }

    public Optional<Cartao> findById(Long id) {
        return cartaoRepository.findById(id);
    }

    public Cartao save(Cartao Cartao) {
        return cartaoRepository.save(Cartao);
    }

    public Cartao update(Long id, Cartao Cartao) {
//        if (CartaoRepository.existsById(id)) {
//            Cartao.setId(id);
//            return cartaoRepository.save(Cartao);
//        }
        return null;
    }

    public void deleteById(Long id) {
        cartaoRepository.deleteById(id);
    }
}
