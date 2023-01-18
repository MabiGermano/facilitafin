package com.br.facilitafin.models;

import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Data
public class ExpenseAnalysis {
    List<Double> series = new ArrayList<Double>();
    List<ExpenseCategory> labels = new ArrayList<ExpenseCategory>();
}
