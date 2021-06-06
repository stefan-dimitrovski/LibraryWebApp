package com.stefan.lab.service;

import com.stefan.lab.model.Book;
import com.stefan.lab.model.dto.BookDto;
import com.stefan.lab.model.enumerations.Category;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;
import java.util.Optional;

public interface BookService {

    List<Book> findAll();

    Optional<Book> findById(Long id);

    Optional<Book> save(String name, Category category, Long author, Integer availableCopies);

    Optional<Book> edit(Long id, String name, Category category, Long author, Integer availableCopies);

    Optional<Book> save(BookDto bookDto);

    Optional<Book> edit(Long id, BookDto bookDto);

    void deleteById(Long id);

    Page<Book> findAllWithPagination(Pageable pageable);
}
