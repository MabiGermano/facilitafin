package com.br.facilitafin.services;

import com.br.facilitafin.models.*;
import com.br.facilitafin.repositories.ExpenseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
public class FinancialRegisterService {
    @Autowired
    ExpenseService expenseService;
    @Autowired
    IncomeService incomeService;

    public FinancialRegister load(String username) {
        FinancialRegister financialRegister = new FinancialRegister();
        List<Expense> expenses = expenseService.listByUser(username);
        List<Income> incomes = incomeService.listByUser(username);
        financialRegister.setExpenses(expenses);
        financialRegister.setIncomes(incomes);
        return financialRegister;
    }
    public Map<String, Double> findExpenseAnalysis(String username) {
        List<Expense> expenses = expenseService.listByUser(username);
        Map<String, Double> series = new HashMap<String, Double>();
        expenses.stream().forEach((expense) -> {
            String categoryName = !expense.getCategory().getDescription().isEmpty() ? expense.getCategory().getDescription() : "Others";
            Double previousValue = series.get(categoryName) == null ? 0 : series.get(categoryName);
            series.put(categoryName, (previousValue + expense.getAmount()));
        });
        return series;
    }
}
