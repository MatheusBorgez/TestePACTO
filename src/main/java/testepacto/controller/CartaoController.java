package testepacto.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import testepacto.model.Cartao;
import testepacto.service.CartaoService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/cartoes")
public class CartaoController {

    @Autowired
    private CartaoService cartaoService;

    @GetMapping
    public ResponseEntity<List<Cartao>> getAllCartoes() {
        List<Cartao> cartaos = cartaoService.findAll();
        return new ResponseEntity<>(cartaos, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Cartao> getCartaoById(@PathVariable Long id) {
        Optional<Cartao> cartao = cartaoService.findById(id);
        return cartao.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping
    public ResponseEntity<Cartao> createCartao(@RequestBody Cartao cartao) {
        Cartao createdCartao = cartaoService.save(cartao);
        return new ResponseEntity<>(createdCartao, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Cartao> updateCartao(@PathVariable Long id, @RequestBody Cartao cartao) {
        Cartao updatedCartao = cartaoService.update(id, cartao);
        if (updatedCartao != null) {
            return new ResponseEntity<>(updatedCartao, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCartao(@PathVariable Long id) {
        cartaoService.deleteById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}
