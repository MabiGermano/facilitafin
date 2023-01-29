package com.br.facilitafin.repositories;

import com.br.facilitafin.models.Expense;
import com.br.facilitafin.models.ExpenseCategory;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

public interface ExpenseCategoryRepository extends JpaRepository<ExpenseCategory, Long> {

    @EntityGraph(value = "ExpenseCategory.user", type = EntityGraph.EntityGraphType.FETCH)
    public List<ExpenseCategory> findByUserUsername(String username);
}
