package com.example.reactspringbootcrud.book;

import com.sun.istack.NotNull;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;

@Entity
@Table(name = "books")
@Getter
@Setter
@ToString
public class BookEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private int id;

    @NotNull
    private String identifier;

    @NotNull
    private String title;

    @NotNull
    private float price;
}
