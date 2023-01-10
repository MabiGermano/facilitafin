package com.br.facilitafin.models;

public enum IncomeCategory {
    SALARY ("Salário"),
    FREELACE ("Freelance"),
    EXTRA_INCOME ("Renda extra"),
    OTHER ("Outros");

    private String description;
    IncomeCategory(String description) {
        this.description = description;
    }

    public String getDescription() {
        return description;
    }
}
