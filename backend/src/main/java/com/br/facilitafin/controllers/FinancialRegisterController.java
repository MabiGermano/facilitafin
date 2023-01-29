package com.br.facilitafin.controllers;

import com.br.facilitafin.config.SecurityConstants;
import com.br.facilitafin.models.FinancialRegister;
import com.br.facilitafin.services.AuthenticationService;
import com.br.facilitafin.services.FinancialRegisterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.UUID;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping({"api/v1/financial-register"})
public class FinancialRegisterController {
    @Autowired
    FinancialRegisterService financialRegisterService;

    @Autowired
    AuthenticationService authenticationService;

    @GetMapping
    public ResponseEntity<FinancialRegister> load(@RequestHeader(value = SecurityConstants.HEADER_STRING) String headerToken) {
        String username = authenticationService.retrieveUserNameFromToken(headerToken);
        FinancialRegister financialRegister = financialRegisterService.load(username);
        return ResponseEntity.status(HttpStatus.OK).body(financialRegister);
    }

    @GetMapping("/analysis")
    public ResponseEntity<Map<String, Double>> expenseAnalysis(@RequestHeader(value = SecurityConstants.HEADER_STRING) String headerToken) {
        String username = authenticationService.retrieveUserNameFromToken(headerToken);
        Map<String, Double> analysis = financialRegisterService.findExpenseAnalysis(username);
        return ResponseEntity.status(HttpStatus.OK).body(analysis);
    }
}
