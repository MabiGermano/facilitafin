package com.br.facilitafin.models;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;
import java.util.UUID;

@Data
@Entity
public class Income {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private Double amount;
    private IncomeCategory category;
    private String description;
    @ManyToOne
    private Goal goal;
    private Date createdAt;
}
