package com.example.backend.service;

import com.example.backend.model.ApplicationModel;
import com.example.backend.repository.ApplicationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ApplicationService {

    @Autowired
    private ApplicationRepository applicationRepository;

    public List<ApplicationModel> getAllApplications() {
        return applicationRepository.findAll();
    }

    public Optional<ApplicationModel> getApplicationById(Long id) {
        return applicationRepository.findById(id);
    }

    public ApplicationModel createApplication(ApplicationModel application) {
        return applicationRepository.save(application);
    }

    public ApplicationModel updateApplication(Long id, ApplicationModel applicationDetails) {
        ApplicationModel application = applicationRepository.findById(id).orElseThrow(() -> new RuntimeException("Application not found"));
        application.setJob(applicationDetails.getJob());
        application.setUser(applicationDetails.getUser());
        application.setStatus(applicationDetails.getStatus());
        return applicationRepository.save(application);
    }

    public void deleteApplication(Long id) {
        applicationRepository.deleteById(id);
    }
}
