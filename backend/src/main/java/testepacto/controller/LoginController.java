package testepacto.controller;

import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import testepacto.DTO.LoginRequestDTO;
import testepacto.DTO.LoginResponseDTO;
import testepacto.service.LoginService;

@AllArgsConstructor
@RestController
@RequestMapping("/login")
public class LoginController {

    private final LoginService loginService;

    @PostMapping()
    public ResponseEntity<LoginResponseDTO> authenticateUser(@RequestBody LoginRequestDTO loginRequestDTO) {
        LoginResponseDTO loginResponse = loginService.authenticateUser(loginRequestDTO);
        return new ResponseEntity<>(loginResponse, HttpStatus.OK);
    }
}
