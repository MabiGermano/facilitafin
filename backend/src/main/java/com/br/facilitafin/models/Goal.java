package com.br.facilitafin.models;

import jakarta.persistence.*;
import lombok.Data;

import java.util.UUID;

@Data
@Entity
public class Goal {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @Column(unique = true)
    private UUID globalId;
    private String description;
    private Double northStar = 0D;
    private Double cumulative = 0D;
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
}
