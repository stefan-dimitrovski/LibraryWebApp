package com.stefan.lab.service.impl;

import com.stefan.lab.model.Country;
import com.stefan.lab.model.exceptions.CountryNotFoundException;
import com.stefan.lab.repository.CountryRepository;
import com.stefan.lab.service.CountryService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CountryServiceImpl implements CountryService {

    private final CountryRepository countryRepository;

    public CountryServiceImpl(CountryRepository countryRepository) {
        this.countryRepository = countryRepository;
    }

    @Override
    public List<Country> findAll() {
        return this.countryRepository.findAll();
    }

    @Override
    public Optional<Country> findById(Long id) {
        return this.countryRepository.findById(id);
    }

    @Override
    public Optional<Country> save(String name, String continent) {

        Country country = new Country(name, continent);

        this.countryRepository.deleteByName(name);
        this.countryRepository.save(country);

        return Optional.of(country);
    }

    @Override
    public Optional<Country> edit(Long id, String name, String continent) {

        Country country = this.countryRepository.findById(id)
                .orElseThrow(()-> new CountryNotFoundException(id));

        country.setName(name);
        country.setContinent(continent);

        this.countryRepository.save(country);

        return Optional.of(country);
    }

    @Override
    public void deleteById(Long id) {
        this.countryRepository.deleteById(id);
    }
}
