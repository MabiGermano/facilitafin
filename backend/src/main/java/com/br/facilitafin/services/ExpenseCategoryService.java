package com.br.facilitafin.services;

import com.br.facilitafin.exception.NoExistentEntityException;
import com.br.facilitafin.models.ExpenseCategory;
import com.br.facilitafin.models.User;
import com.br.facilitafin.repositories.ExpenseCategoryRepository;
import com.br.facilitafin.repositories.ExpenseRepository;
import com.br.facilitafin.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class ExpenseCategoryService {
    @Autowired
    ExpenseCategoryRepository expenseCategoryRepository;
    @Autowired
    UserService userService;

    public ExpenseCategory create(ExpenseCategory expenseCategory, String username) {
        expenseCategory.setGlobalId(UUID.randomUUID());
        User user = userService.findByUsername(username);
        expenseCategory.setUser(user);
        return expenseCategoryRepository.save(expenseCategory);
    }

    public List<ExpenseCategory> listByUser(String username) {
        return expenseCategoryRepository.findByUserUsername(username);
    }
}
