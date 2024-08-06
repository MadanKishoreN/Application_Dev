package com.example.backend.controller;

import com.example.backend.model.MessageModel;
import com.example.backend.service.MessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/messages")
public class MessageController {

    @Autowired
    private MessageService messageService;

    @GetMapping
    public List<MessageModel> getAllMessages() {
        return messageService.getAllMessages();
    }

    @GetMapping("/{id}")
    public ResponseEntity<MessageModel> getMessageById(@PathVariable Long id) {
        Optional<MessageModel> message = messageService.getMessageById(id);
        return message.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public MessageModel createMessage(@RequestBody MessageModel message) {
        return messageService.createMessage(message.getUsername(), message.getMessage());
    }

    @PutMapping("/{id}")
    public ResponseEntity<MessageModel> updateMessage(@PathVariable Long id, @RequestBody MessageModel messageDetails) {
        Optional<MessageModel> message = messageService.getMessageById(id);
        if (message.isPresent()) {
            MessageModel updatedMessage = messageService.updateMessage(id, messageDetails.getUsername(), messageDetails.getMessage());
            return ResponseEntity.ok(updatedMessage);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteMessage(@PathVariable Long id) {
        if (messageService.getMessageById(id).isPresent()) {
            messageService.deleteMessage(id);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
