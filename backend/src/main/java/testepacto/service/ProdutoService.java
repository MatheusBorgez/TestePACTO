package testepacto.service;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import testepacto.model.Produto;
import testepacto.repository.ProdutoRepository;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class ProdutoService {

    private final ProdutoRepository produtoRepository;

    public List<Produto> findAll() {
        return produtoRepository.findAll();
    }

    public Optional<Produto> findById(long id) {
        return produtoRepository.findById(id);
    }
}
