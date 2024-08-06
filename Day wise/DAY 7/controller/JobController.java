package com.example.backend.controller;

import com.example.backend.model.JobModel;
import com.example.backend.service.JobService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/jobs")
public class JobController {

    @Autowired
    private JobService jobService;

    @GetMapping
    public List<JobModel> getAllJobs() {
        return jobService.getAllJobs();
    }

    @GetMapping("/{id}")
    public ResponseEntity<JobModel> getJobById(@PathVariable Long id) {
        Optional<JobModel> job = jobService.getJobById(id);
        return job.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public JobModel createJob(@RequestBody JobModel job) {
        return jobService.createJob(job);
    }

    @PutMapping("/{id}")
    public ResponseEntity<JobModel> updateJob(@PathVariable Long id, @RequestBody JobModel jobDetails) {
        Optional<JobModel> job = jobService.getJobById(id);
        if (job.isPresent()) {
            JobModel updatedJob = jobService.updateJob(id, jobDetails);
            return ResponseEntity.ok(updatedJob);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteJob(@PathVariable Long id) {
        if (jobService.getJobById(id).isPresent()) {
            jobService.deleteJob(id);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
