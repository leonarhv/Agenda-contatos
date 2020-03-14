package com.leo.agenda.modelo;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

public class Contato {
    private long id;
    @NotNull
    @NotBlank
    private String nome;
    @NotNull
    @NotBlank
    private String telefone;
    private String facebook;

    public Contato() {
    }

    public Contato(long id, @NotNull @NotBlank String nome, @NotNull @NotBlank String telefone, String facebook) {
        this.id = id;
        this.nome = nome;
        this.telefone = telefone;
        this.facebook = facebook;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getTelefone() {
        return telefone;
    }

    public void setTelefone(String telefone) {
        this.telefone = telefone;
    }

    public String getFacebook() {
        return facebook;
    }

    public void setFacebook(String facebook) {
        this.facebook = facebook;
    }
}
