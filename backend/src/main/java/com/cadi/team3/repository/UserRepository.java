package com.cadi.team3.repository;

import com.cadi.team3.model.User;
import org.springframework.data.jpa.repository.JpaRepository;


public interface UserRepository extends JpaRepository<User, Long> {
    public User findByUsername(String username);
}
