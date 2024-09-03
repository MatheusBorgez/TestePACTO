package testepacto.DTO;

public record LoginResponseDTO(
        String token,
        String nomeUsuario,
        Long idUsuario
) {
}
