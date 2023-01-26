package com.br.facilitafin.services;

import com.br.facilitafin.exception.NoExistentEntityException;
import com.br.facilitafin.models.User;
import com.br.facilitafin.repositories.UserRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.UUID;

@Service
public class UserService {
    @Autowired
    UserRepository userRepository;

    @Autowired
    BCryptPasswordEncoder bc;

    public User create(User user) {
        user.setGlobalId(UUID.randomUUID());
        user.setPassword(bc.encode(user.getPassword()));
        return userRepository.save(user);

    }

    public User findByUsername(String username) {
        Optional<User> opUser = userRepository.findByUsername(username);
        System.out.println(opUser.isEmpty());
        if(opUser.isEmpty())
            throw new NoExistentEntityException("User not found");
        return opUser.get();
    }

    public User findByCredentials(String username, String password) {
        return userRepository.findByUsernameAndPassword(username, bc.encode(password))
                .orElseThrow(() -> {
                    System.out.println(bc.encode(password));
                    return new NoExistentEntityException("User not found");
                });
    }

    public User findByGlobalId(UUID globalId) {
        Optional<User> user = userRepository.findByGlobalId(globalId);
        if (user.isEmpty())
            throw new NoExistentEntityException("No user found on database");
        return user.get();
    }
}
