package com.br.facilitafin.models;

import jakarta.persistence.*;
import lombok.Data;

import java.util.UUID;
@Data
@Entity
public class ExpenseCategory {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String description;
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
}
