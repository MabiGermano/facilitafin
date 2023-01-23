package com.br.facilitafin.models;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;
import lombok.Data;
import net.minidev.json.annotate.JsonIgnore;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.UUID;

@Data
@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @Column(unique = true)
    private UUID globalId;
//    @OneToMany
//    @JoinColumn(name = "user_id")
//    private List<Expense> expenses = new ArrayList<Expense>();
//    @OneToMany
//    @JoinColumn(name = "user_id" )
//    private List<Income> incomes = new ArrayList<Income>();
//    @OneToMany
//    @JoinColumn(name = "user_id")
//    private List<ExpenseCategory> expenseCategories = new ArrayList<ExpenseCategory>();
    private String username;
    private String name;
    @Column(unique = true)
    private String email;
    private Boolean emailVerified = false;
    @JsonIgnore
    private String password = null;
}
