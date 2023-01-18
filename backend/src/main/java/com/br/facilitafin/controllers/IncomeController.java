package com.br.facilitafin.controllers;


import com.br.facilitafin.models.Income;
import com.br.facilitafin.services.IncomeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping({"api/v1/income"})
public class IncomeController {

    @Autowired
    IncomeService incomeService;

    @PostMapping
    public ResponseEntity<String> create(@RequestBody Income income) {
        Income incomeResponse=incomeService.create(income);
        return ResponseEntity.status(HttpStatus.CREATED).body("Income created successfully");
    }

    @GetMapping("/user/{id}")
    public ResponseEntity<List<Income>> list(@PathVariable UUID id){
        List<Income> listIncome=incomeService.listByUser(id);
        return ResponseEntity.status(HttpStatus.OK).body(listIncome);
    }
}
