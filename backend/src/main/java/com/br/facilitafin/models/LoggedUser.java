package com.br.facilitafin.models;

import jakarta.persistence.Column;
import lombok.Data;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.function.Function;
import java.util.stream.Collectors;

@Data
public class LoggedUser {
    private String username;
    private String name;
    private String email;
    private Map<IncomeCategory, String> incomeCategories;

    public LoggedUser(User user) {
        this.name = user.getName();
        this.username = user.getUsername();
        this.email = user.getEmail();
        List<IncomeCategory> list = Arrays.asList(IncomeCategory.values());
        this.incomeCategories = list.stream().collect(Collectors.toMap(Function.identity(), IncomeCategory::getDescription));
        System.out.println(incomeCategories.toString());
    }
}
