package com.example.backend.controller;
import com.example.backend.model.ApplicationModel;
import com.example.backend.service.ApplicationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/applications")
public class ApplicationController {

    @Autowired
    private ApplicationService applicationService;

    @GetMapping
    @PreAuthorize("hasAuthority('ADMIN') or hasAuthority('USER')")
    public List<ApplicationModel> getAllApplications() {
        return applicationService.getAllApplications();
    }

    @GetMapping("/{id}")
    @PreAuthorize("hasAuthority('ADMIN') or hasAuthority('USER')")
    public ResponseEntity<ApplicationModel> getApplicationById(@PathVariable Long id) {
        Optional<ApplicationModel> application = applicationService.getApplicationById(id);
        return application.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    @PreAuthorize("hasAuthority('ADMIN')")
    public ApplicationModel createApplication(@RequestBody ApplicationModel application) {
        return applicationService.createApplication(application);
    }

    @PutMapping("/{id}")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<ApplicationModel> updateApplication(@PathVariable Long id, @RequestBody ApplicationModel applicationDetails) {
        Optional<ApplicationModel> application = applicationService.getApplicationById(id);
        if (application.isPresent()) {
            ApplicationModel updatedApplication = applicationService.updateApplication(id, applicationDetails);
            return ResponseEntity.ok(updatedApplication);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<Void> deleteApplication(@PathVariable Long id) {
        if (applicationService.getApplicationById(id).isPresent()) {
            applicationService.deleteApplication(id);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}