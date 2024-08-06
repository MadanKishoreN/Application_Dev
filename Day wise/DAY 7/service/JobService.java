package com.example.backend.service;

import com.example.backend.model.JobModel;
import com.example.backend.repository.JobRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class JobService {

    @Autowired
    private JobRepository jobRepository;

    public List<JobModel> getAllJobs() {
        return jobRepository.findAll();
    }

    public Optional<JobModel> getJobById(Long id) {
        return jobRepository.findById(id);
    }

    public JobModel createJob(JobModel job) {
        return jobRepository.save(job);
    }

    public JobModel updateJob(Long id, JobModel jobDetails) {
        JobModel job = jobRepository.findById(id).orElseThrow(() -> new RuntimeException("Job not found"));
        job.setTitle(jobDetails.getTitle());
        job.setDescription(jobDetails.getDescription());
        job.setJobType(jobDetails.getJobType());
        job.setSalary(jobDetails.getSalary());
        job.setSkills(jobDetails.getSkills());
        return jobRepository.save(job);
    }

    public void deleteJob(Long id) {
        jobRepository.deleteById(id);
    }
}
