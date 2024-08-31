package testepacto.controller;

import lombok.AllArgsConstructor;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;
import testepacto.model.Venda;
import testepacto.security.AppConfig;
import testepacto.service.VendaService;

import java.util.List;
import java.util.Optional;

@AllArgsConstructor
@RestController
@RequestMapping("/vendas")
public class VendaController {

    private final VendaService vendaService;
    private final AppConfig appConfig;
    private final RestTemplate restTemplate;

    @GetMapping("/{usuarioId}")
    public ResponseEntity<List<Venda>> getAllVendas(@PathVariable Long usuarioId) {
        List<Venda> vendas = vendaService.findAllByUsuario(usuarioId);
        return new ResponseEntity<>(vendas, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Venda> getVendaById(@PathVariable Long id) {
        Optional<Venda> venda = vendaService.findById(id);
        return venda.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping
    public ResponseEntity<Venda> createVenda(@RequestBody Venda venda) {

//        String url = appConfig.getCieloSandboxApiUrl();
//
//        HttpHeaders headers = new HttpHeaders();
//        headers.set("Authorization", "Bearer token");
//        headers.set("Content-Type", "application/json");
//
//        HttpEntity<Venda> requestEntity = new HttpEntity<>(venda, headers);
//
//        ResponseEntity<String> response = restTemplate.exchange(url, HttpMethod.POST, requestEntity, String.class);

        Venda createdVenda = vendaService.save(venda);
        return new ResponseEntity<>(createdVenda, HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteVenda(@PathVariable Long id) {
        vendaService.deleteById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
