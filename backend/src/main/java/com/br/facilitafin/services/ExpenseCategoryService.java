package com.br.facilitafin.services;

import com.br.facilitafin.models.ExpenseCategory;
import com.br.facilitafin.repositories.ExpenseCategoryRepository;
import com.br.facilitafin.repositories.ExpenseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class ExpenseCategoryService {
    @Autowired
    ExpenseCategoryRepository expenseCategoryRepository;

    public ExpenseCategory create(ExpenseCategory expenseCategory) {
        expenseCategory.setGlobalId(UUID.randomUUID());
        return expenseCategoryRepository.save(expenseCategory);
    }

    public List<ExpenseCategory> listByUser(UUID globalId) {
        return expenseCategoryRepository.findByUserGlobalId(globalId);
    }
}
