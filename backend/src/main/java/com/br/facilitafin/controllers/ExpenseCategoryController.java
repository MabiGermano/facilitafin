package com.br.facilitafin.controllers;

import com.br.facilitafin.models.Expense;
import com.br.facilitafin.models.ExpenseCategory;
import com.br.facilitafin.services.ExpenseCategoryService;
import com.br.facilitafin.services.ExpenseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping({"api/v1/expense-category"})
public class ExpenseCategoryController {
    @Autowired
    ExpenseCategoryService expenseCategoryService;

    @PostMapping("user/{id}")
    public ResponseEntity<String> create(@RequestBody ExpenseCategory expenseCategory, @PathVariable UUID id) {
        ExpenseCategory expenseCategoryResponse=expenseCategoryService.create(expenseCategory, id);
        return ResponseEntity.status(HttpStatus.CREATED).body("Expense category created successfully");
    }

    @GetMapping("/user/{id}")
    public ResponseEntity<List<ExpenseCategory>> list(@PathVariable UUID id){
        List<ExpenseCategory> list=expenseCategoryService.listByUser(id);
        return ResponseEntity.status(HttpStatus.OK).body(list);
    }
}
