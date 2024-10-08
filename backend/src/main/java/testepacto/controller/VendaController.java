package testepacto.controller;

import lombok.AllArgsConstructor;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;
import testepacto.DTO.VendaCartaoDTO;
import testepacto.DTO.VendaPixDTO;
import testepacto.DTO.VendaPixDTOCielo;
import testepacto.enumerator.TipoIdentidade;
import testepacto.model.Venda;
import testepacto.model.VendaCartao;
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

    @PostMapping("/pix")
    public ResponseEntity<Venda> createVendaPix(@RequestBody VendaPixDTO venda) {

        Venda createdVenda = vendaService.gerarVendaPix(venda);
        venda.getVenda().setId(createdVenda.getId());

        String url = appConfig.getCieloSandboxApiUrl();

        HttpHeaders headers = new HttpHeaders();
        headers.set("Content-Type", "application/json");
        headers.set("MerchantId", appConfig.getCieloMerchantId());
        headers.set("MerchantKey", appConfig.getCieloMerchantKey());

        venda.setTipoIdentidade(venda.getCpfOuCnpj().length() == 11 ? TipoIdentidade.CPF.name() : TipoIdentidade.CNPJ.name());

        VendaPixDTOCielo vendaPixDTOCielo = new VendaPixDTOCielo(venda);

        HttpEntity<VendaPixDTOCielo> requestEntity = new HttpEntity<>(vendaPixDTOCielo, headers);

        ResponseEntity<String> response = restTemplate.exchange(url + "1/sales/", HttpMethod.POST, requestEntity, String.class);

        return new ResponseEntity<>(createdVenda, HttpStatus.CREATED);
    }

    @PostMapping("/cartao")
    public ResponseEntity<Venda> createVendaCartao(@RequestBody VendaCartaoDTO venda) {

//        String url = appConfig.getCieloSandboxApiUrl();
//
//        HttpHeaders headers = new HttpHeaders();
//        headers.set("Authorization", "Bearer token");
//        headers.set("Content-Type", "application/json");
//
//        HttpEntity<Venda> requestEntity = new HttpEntity<>(venda, headers);
//
//        ResponseEntity<String> response = restTemplate.exchange(url, HttpMethod.POST, requestEntity, String.class);

        Venda createdVenda = vendaService.gerarVendaCartao((VendaCartao) venda.getVenda());
        return new ResponseEntity<>(createdVenda, HttpStatus.CREATED);
    }
}
