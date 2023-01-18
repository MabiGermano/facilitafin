package com.br.facilitafin.services;

import com.br.facilitafin.exception.NoExistentEntityException;
import com.br.facilitafin.models.Expense;
import com.br.facilitafin.models.User;
import com.br.facilitafin.repositories.ExpenseRepository;
import com.br.facilitafin.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class ExpenseService {

    @Autowired
    ExpenseRepository expenseRepository;
    @Autowired
    UserRepository userRepository;

    public Expense create(Expense expense, UUID id) {
        expense.setGlobalId(UUID.randomUUID());
        Optional<User> user = userRepository.findByGlobalId(id);
        if (user.isEmpty())
            throw new NoExistentEntityException("No user found on database");
        expense.setUser(user.get());
        expense.setCreatedAt(new Date());
        return expenseRepository.save(expense);
    }

    public List<Expense> listByUser (UUID userGlobalId) {
        return expenseRepository.findByUserGlobalId(userGlobalId);
    }
}
