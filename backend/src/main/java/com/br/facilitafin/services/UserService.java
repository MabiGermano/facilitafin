package com.br.facilitafin.services;

import com.br.facilitafin.exception.NoExistentEntityException;
import com.br.facilitafin.models.User;
import com.br.facilitafin.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.UUID;

@Service
public class UserService {
    @Autowired
    UserRepository userRepository;

    public User create(User user) {
        user.setGlobalId(UUID.randomUUID());
        return userRepository.save(user);
    }

    public User findOne(User user) {
        Optional<User> opUser = userRepository.findByEmail(user.getEmail());
        if(opUser.isEmpty())
            throw new NoExistentEntityException("User not found");
        return opUser.get();
    }
}
