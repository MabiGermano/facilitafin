package com.br.facilitafin.services;

import com.br.facilitafin.models.ExpenseCategory;
import com.br.facilitafin.models.Goal;
import com.br.facilitafin.models.User;
import com.br.facilitafin.repositories.GoalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class GoalService {

    @Autowired
    UserService userService;

    @Autowired
    GoalRepository goalRepository;

    public Goal create(Goal goal, String username) {
        goal.setGlobalId(UUID.randomUUID());
        User user = userService.findByUsername(username);
        goal.setUser(user);
        return goalRepository.save(goal);
    }

    public List<Goal> listByUser(String username) {
        List<Goal> list = goalRepository.findByUserUsername(username);
        System.out.println(list.toString());
        return list;
    }
}
