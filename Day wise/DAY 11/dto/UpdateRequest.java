package com.example.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

public class UpdateRequest {
    private String name;
    private String email;
    private String password;
}
