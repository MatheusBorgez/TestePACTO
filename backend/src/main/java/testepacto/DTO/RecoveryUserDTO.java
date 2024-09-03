package testepacto.DTO;

import testepacto.model.Role;

import java.util.List;

public record RecoveryUserDTO(
        Long id,
        String email,
        List<Role> roles
) {
}