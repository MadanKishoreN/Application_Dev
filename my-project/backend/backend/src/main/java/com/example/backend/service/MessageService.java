package com.example.backend.service;

import com.example.backend.model.MessageModel;
import com.example.backend.repository.MessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MessageService {

    @Autowired
    private MessageRepository messageRepository;

    public List<MessageModel> getAllMessages() {
        return messageRepository.findAll();
    }

    public Optional<MessageModel> getMessageById(Long id) {
        return messageRepository.findById(id);
    }

    public MessageModel createMessage(String username, String message) {
        MessageModel msg = new MessageModel();
        msg.setUsername(username);
        msg.setMessage(message);
        return messageRepository.save(msg);
    }

    public MessageModel updateMessage(Long id, String username, String message) {
        MessageModel msg = messageRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Message not found"));
        msg.setUsername(username);
        msg.setMessage(message);
        return messageRepository.save(msg);
    }

    public void deleteMessage(Long id) {
        messageRepository.deleteById(id);
    }
}
