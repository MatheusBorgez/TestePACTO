package testepacto.controller;

import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import testepacto.model.Produto;
import testepacto.service.ProdutoService;

import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping("/produtos")
public class ProdutoController {

    private final ProdutoService produtoService;

    @GetMapping()
    public ResponseEntity<List<Produto>> getAllProdutos(){
        List<Produto> produtos = produtoService.findAll();
        return new ResponseEntity<>(produtos, HttpStatus.OK);
    }

}
