package com.br.facilitafin.models;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;
import java.util.UUID;

@Data
@Entity
public class Expense {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @Column(unique = true)
    private UUID globalId;
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
    private String description;
    private Double amount;
    @ManyToOne
    @JoinColumn(name = "category_id")
    private ExpenseCategory category;
    private Date createdAt;
}
