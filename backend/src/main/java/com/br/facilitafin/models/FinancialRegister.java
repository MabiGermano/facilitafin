package com.br.facilitafin.models;

import lombok.Data;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Data
public class FinancialRegister implements Comparable<FinancialRegister>{
    private RegisterType type;
    private String description;
    private Double amount;
    private String category;
    private Date createdAt;

    public FinancialRegister(){}
    public FinancialRegister(Income income) {
        this.description = income.getDescription();
        this.amount = income.getAmount();
        this.category = income.getCategory().getDescription();
        this.createdAt = income.getCreatedAt();
        this.type = RegisterType.INCOME;
    }

    public FinancialRegister(Expense expense) {
        this.description = expense.getDescription();
        this.amount = expense.getAmount();
        this.category = expense.getCategory().getDescription();
        this.createdAt = expense.getCreatedAt();
        this.type = RegisterType.EXPENSE;
    }

    @Override
    public int compareTo(FinancialRegister register) {
        return getCreatedAt().compareTo(register.getCreatedAt());
    }
}
