package com.br.facilitafin.controllers;

import com.br.facilitafin.models.Expense;
import com.br.facilitafin.models.User;
import com.br.facilitafin.services.ExpenseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping({"api/v1/expense"})
public class ExpenseController {

    @Autowired
    ExpenseService expenseService;

    @PostMapping("user/{id}")
    public ResponseEntity<String> create(@RequestBody Expense expense, @PathVariable UUID id) {
        Expense expenseResponse=expenseService.create(expense, id);
        return ResponseEntity.status(HttpStatus.CREATED).body("Expense created successfully");
    }

    @GetMapping("/user/{id}")
    public ResponseEntity<List<Expense>> list(@PathVariable UUID id){
        List<Expense> listExpense=expenseService.listByUser(id);
        return ResponseEntity.status(HttpStatus.OK).body(listExpense);
    }
}
