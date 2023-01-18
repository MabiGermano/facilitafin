package com.br.facilitafin.models;

import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Data
public class FinancialRegister {
    private List<Expense> expenses = new ArrayList<Expense>();
    private List<Income> incomes = new ArrayList<Income>();
    private ExpenseAnalysis expenseAnalysis;
}
