package com.br.facilitafin.services;

import com.br.facilitafin.exception.NoExistentEntityException;
import com.br.facilitafin.models.Expense;
import com.br.facilitafin.models.Income;
import com.br.facilitafin.models.User;
import com.br.facilitafin.repositories.IncomeRepository;
import com.br.facilitafin.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class IncomeService {

    @Autowired
    IncomeRepository incomeRepository;
    @Autowired
    UserRepository userRepository;

    public Income create(Income income, String username) {
        income.setGlobalId(UUID.randomUUID());
        User user = userRepository.findByUsername(username).orElseThrow(() -> new NoExistentEntityException("No user found on database"));
        income.setUser(user);
        income.setCreatedAt(new Date());
        return incomeRepository.save(income);
    }

    public List<Income> listByUser (String username) {
        return incomeRepository.findByUserUsername(username);
    }
}
