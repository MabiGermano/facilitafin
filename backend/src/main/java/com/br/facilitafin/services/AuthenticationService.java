package com.br.facilitafin.services;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.br.facilitafin.config.SecurityConstants;
import com.br.facilitafin.exception.NotAuthenticatedException;
import com.br.facilitafin.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
public class AuthenticationService {

    @Autowired
    UserService userService;

    @Autowired
    BCryptPasswordEncoder bc;



    public String generateToken(User userLogin) {
        System.out.println(userLogin.toString());
        User user = userService.findByUsername(userLogin.getUsername());
        if(bc.matches(userLogin.getPassword(), user.getPassword())) {
            return JWT.create()
                    .withSubject(userLogin.getUsername())
                    .withExpiresAt(new Date(System.currentTimeMillis() + SecurityConstants.EXPIRATION_TIME))
                    .sign(Algorithm.HMAC512(SecurityConstants.SECRET.getBytes()));
        } else {
            throw new NotAuthenticatedException("Invalid user or password");
        }
    }

    public String retrieveUserNameFromToken(String token) {
        String user = JWT.require(Algorithm.HMAC512(SecurityConstants.SECRET.getBytes()))
                .build()
                .verify(token.replace(SecurityConstants.TOKEN_PREFIX, ""))
                .getSubject();
        System.out.println(user);
        return user;
    }
}
