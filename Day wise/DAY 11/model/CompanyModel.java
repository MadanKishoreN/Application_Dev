package com.example.backend.model;

import jakarta.persistence.*;
import java.util.List;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class CompanyModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @JsonIgnore
    @OneToMany(mappedBy = "company")
    private List<JobModel> jobOffers;

    @JsonIgnore
    @OneToMany(mappedBy = "company")
    private List<ScheduleModel> schedules;

    private String salary;
    private String requirements;
    private String skills;

    // Default constructor
    public CompanyModel() {
    }

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<JobModel> getJobOffers() {
        return jobOffers;
    }

    public void setJobOffers(List<JobModel> jobOffers) {
        this.jobOffers = jobOffers;
    }

    public List<ScheduleModel> getSchedules() {
        return schedules;
    }

    public void setSchedules(List<ScheduleModel> schedules) {
        this.schedules = schedules;
    }

    public String getSalary() {
        return salary;
    }

    public void setSalary(String salary) {
        this.salary = salary;
    }

    public String getRequirements() {
        return requirements;
    }

    public void setRequirements(String requirements) {
        this.requirements = requirements;
    }

    public String getSkills() {
        return skills;
    }

    public void setSkills(String skills) {
        this.skills = skills;
    }
}