package com.br.facilitafin.repositories;

import com.br.facilitafin.models.Expense;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

public interface ExpenseRepository extends JpaRepository<Expense, Long> {
    public List<Expense> findByUserGlobalId(UUID globalId);
}
