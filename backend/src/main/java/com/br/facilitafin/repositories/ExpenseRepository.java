package com.br.facilitafin.repositories;


import com.br.facilitafin.models.Expense;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.UUID;

public interface ExpenseRepository extends JpaRepository<Expense, Long> {

//    @EntityGraph(value = "Expense.user_id", type = EntityGraph.EntityGraphType.FETCH)
    public List<Expense> findByUserGlobalId(UUID globalId);

//    @Query( "SELECT * FROM Expenses ex join bk.pages pg WHERE bk.globalId = :globalId")
//    public List<Expense> findByUserGlobalId(@Param("globalId") UUID globalId);
}
