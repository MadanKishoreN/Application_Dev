package com.example.backend.repository;

import com.example.backend.model.MessageModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MessageRepository extends JpaRepository<MessageModel, Long> {
    // Custom query methods can be added here if needed
}
