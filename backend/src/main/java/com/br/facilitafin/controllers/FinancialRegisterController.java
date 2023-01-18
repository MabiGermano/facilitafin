package com.br.facilitafin.controllers;

import com.br.facilitafin.models.FinancialRegister;
import com.br.facilitafin.services.FinancialRegisterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;
import java.util.UUID;

@RestController
@RequestMapping({"api/v1/financial-register"})
public class FinancialRegisterController {
    @Autowired
    FinancialRegisterService financialRegisterService;

    @GetMapping("/user/{id}")
    public ResponseEntity<FinancialRegister> load(@PathVariable UUID id) {
        FinancialRegister financialRegister = financialRegisterService.load(id);
        return ResponseEntity.status(HttpStatus.OK).body(financialRegister);
    }

    @GetMapping("/analysis/user/{id}")
    public ResponseEntity<Map<String, Double>> expenseAnalysis(@PathVariable UUID id) {
        Map<String, Double> analysis = financialRegisterService.findExpenseAnalysis(id);
        return ResponseEntity.status(HttpStatus.OK).body(analysis);
    }
}
