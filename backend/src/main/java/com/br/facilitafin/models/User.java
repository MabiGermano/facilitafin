package com.br.facilitafin.models;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;
import lombok.Data;
import net.minidev.json.annotate.JsonIgnore;

import java.util.Objects;

@Data
@Entity
@Table(name = "users", uniqueConstraints = {
        @UniqueConstraint(columnNames = "email")
})
public class User {

    @Id
    private String id;

    private String name;

    private String email;

    private String imageUrl;

    private Boolean emailVerified = false;

    @JsonIgnore
    private String password = null;

    private AuthProvider provider;

    private String providerId;
}
