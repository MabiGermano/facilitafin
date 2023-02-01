package com.br.facilitafin.repositories;

import com.br.facilitafin.models.Goal;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface GoalRepository extends JpaRepository<Goal, Long> {
    public List<Goal> findByUserUsername(String username);
}
