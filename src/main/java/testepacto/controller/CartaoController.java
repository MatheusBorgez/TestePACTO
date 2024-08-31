package testepacto.controller;

import lombok.AllArgsConstructor;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;
import testepacto.model.Cartao;
import testepacto.security.AppConfig;
import testepacto.service.CartaoService;

import java.util.List;
import java.util.Optional;

@AllArgsConstructor
@RestController
@RequestMapping("/cartoes")
public class CartaoController {

    private final CartaoService cartaoService;
    private final AppConfig appConfig;
    private final RestTemplate restTemplate;

    @GetMapping
    public ResponseEntity<List<Cartao>> getAllCartoes() {
        List<Cartao> cartoes = cartaoService.findAll();
        return new ResponseEntity<>(cartoes, HttpStatus.OK);
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

    @GetMapping("/cardBin/{bin}")
    public ResponseEntity<String> getBinCartao(@PathVariable String bin) {

        String url = appConfig.getCieloSandboxApiUrlConsulta() + "/1/cardBin/" + bin;

        HttpHeaders headers = new HttpHeaders();
        headers.set("accept", "application/json");
        headers.set("Content-Type", "application/json");
        headers.set("MerchantId", appConfig.getCieloMerchantId());
        headers.set("MerchantKey", appConfig.getCieloMerchantKey());

        HttpEntity<String> requestEntity = new HttpEntity<>(headers);

        ResponseEntity<String> response = restTemplate.exchange(url, HttpMethod.GET, requestEntity, String.class);

        return ResponseEntity.status(response.getStatusCode()).body(response.getBody());

    }

}
