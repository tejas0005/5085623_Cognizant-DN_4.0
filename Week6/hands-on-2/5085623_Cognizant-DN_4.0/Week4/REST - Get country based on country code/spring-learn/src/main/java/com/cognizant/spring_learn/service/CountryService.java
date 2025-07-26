package com.cognizant.spring_learn.service;


import java.util.List;
import java.util.Optional;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.stereotype.Service;

import com.cognizant.spring_learn.model.Country;

@Service
public class CountryService {

    public Country getCountry(String code) {
        ApplicationContext context = new ClassPathXmlApplicationContext("country.xml");

        List<Country> countryList = context.getBean("countryList", List.class);

        // Find matching country (case-insensitive)
        Optional<Country> countryOpt = countryList.stream()
                .filter(c -> c.getCode().equalsIgnoreCase(code))
                .findFirst();

        if (countryOpt.isPresent()) {
            return countryOpt.get();
        } else {
            throw new RuntimeException("Country code not found: " + code);
        }
    }
}