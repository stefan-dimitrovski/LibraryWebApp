package com.stefan.lab.model.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class CountryNotFoundException extends RuntimeException {

    public CountryNotFoundException(Long countryId) {
        super(String.format("Country with id: %d was not found", countryId));
    }
}
