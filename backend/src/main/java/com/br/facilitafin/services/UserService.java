package com.br.facilitafin.services;

import com.br.facilitafin.models.User;
import com.br.facilitafin.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    UserRepository userRepository;

    public User create(User user) {
        return userRepository.save(user);
    }
}
