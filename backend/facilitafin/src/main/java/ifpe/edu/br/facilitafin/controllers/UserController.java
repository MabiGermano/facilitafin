package ifpe.edu.br.facilitafin.controllers;

import ifpe.edu.br.facilitafin.exceptions.ResourceNotFoundException;
import ifpe.edu.br.facilitafin.models.User;
import ifpe.edu.br.facilitafin.repositories.UserRepository;
import ifpe.edu.br.facilitafin.security.CurrentUser;
import ifpe.edu.br.facilitafin.security.UserPrincipal;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/user/me")
    @PreAuthorize("hasRole('USER')")
    public User getCurrentUser(@CurrentUser UserPrincipal userPrincipal) {
        return userRepository.findById(userPrincipal.getId())
                .orElseThrow(() -> new ResourceNotFoundException("User", "id", userPrincipal.getId()));
    }
}