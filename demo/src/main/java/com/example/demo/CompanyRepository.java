package com.example.demo;

import org.springframework.data.repository.CrudRepository;

import java.util.List;


// listing the Companies in the database. Sorted by name in ascending order.
public interface CompanyRepository extends CrudRepository<Company, Long> {
    List<Company> findAllByOrderByNameAsc();
}
