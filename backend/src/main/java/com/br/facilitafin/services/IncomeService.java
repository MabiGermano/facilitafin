package com.br.facilitafin.services;

import com.br.facilitafin.models.Expense;
import com.br.facilitafin.models.Income;
import com.br.facilitafin.repositories.IncomeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class IncomeService {

    @Autowired
    IncomeRepository incomeRepository;

    public Income create(Income income) {
        income.setGlobalId(UUID.randomUUID());
        return incomeRepository.save(income);
    }

    public List<Income> listByUser (UUID userGlobalId) {
        return incomeRepository.findByUserGlobalId(userGlobalId);
    }
}
