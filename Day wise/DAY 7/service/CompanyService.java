package com.example.backend.service;

import com.example.backend.model.CompanyModel;
import com.example.backend.repository.CompanyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CompanyService {

    @Autowired
    private CompanyRepository companyRepository;

    public List<CompanyModel> getAllCompanies() {
        return companyRepository.findAll();
    }

    public Optional<CompanyModel> getCompanyById(Long id) {
        return companyRepository.findById(id);
    }

    public CompanyModel createCompany(CompanyModel company) {
        return companyRepository.save(company);
    }

    public CompanyModel updateCompany(Long id, CompanyModel companyDetails) {
        CompanyModel company = companyRepository.findById(id).orElseThrow(() -> new RuntimeException("Company not found"));
        company.setName(companyDetails.getName());
        company.setJobOffers(companyDetails.getJobOffers());
        company.setSalary(companyDetails.getSalary());
        company.setRequirements(companyDetails.getRequirements());
        company.setSkills(companyDetails.getSkills());
        return companyRepository.save(company);
    }

    public void deleteCompany(Long id) {
        companyRepository.deleteById(id);
    }
}
