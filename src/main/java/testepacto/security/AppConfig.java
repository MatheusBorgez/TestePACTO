package testepacto.security;

import lombok.Data;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
@Data
public class AppConfig {

    @Value("${cielo-sandbox-api-url}")
    private String cieloSandboxApiUrl;

    @Value("${cielo-sandbox-api-url-consulta}")
    private String cieloSandboxApiUrlConsulta;

    @Value("${testepacto.cielo-merchantid}")
    private String cieloMerchantId;

    @Value("${testepacto.cielo-merchantkey}")
    private String cieloMerchantKey;

    @Value("${testepacto.provedor-boleto}")
    private String provedorBoleto;

}
