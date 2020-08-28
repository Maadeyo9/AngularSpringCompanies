package com.example.demo;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/companies")
public class CompanyController {

    private final CompanyRepository companyRepository;

    public CompanyController(CompanyRepository companyRepository) {
        this.companyRepository = companyRepository;
    }

    @GetMapping()
    public List<Company> getCompanies(){
        return companyRepository.findAllByOrderByNameAsc();
    }

    @PostMapping()
    public Company addCompany(@RequestBody Company company){
        return companyRepository.save(company);
    }

    @DeleteMapping("/{id}")
    public void removeCompany (@PathVariable Long id){
        companyRepository.deleteById(id);
    }


}
