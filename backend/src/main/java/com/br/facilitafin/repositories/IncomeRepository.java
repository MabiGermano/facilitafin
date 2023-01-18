package com.br.facilitafin.repositories;

import com.br.facilitafin.models.Income;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

public interface IncomeRepository extends JpaRepository<Income, Long> {
    public List<Income> findByUserGlobalId(UUID globalId);
}
