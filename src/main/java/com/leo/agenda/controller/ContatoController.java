package com.leo.agenda.controller;

import com.leo.agenda.modelo.Contato;
import com.leo.agenda.repositories.ContatoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@CrossOrigin(origins = {"http://localhost:3000", "http://192.168.0.11:3000"})
@RequestMapping("/contatos")
@RestController
public class ContatoController {

    @Autowired
    private ContatoRepository contatoRepository;

    @PostMapping
    public Contato create(@RequestBody Contato contato) {
        return contatoRepository.save(contato);
    }

    @GetMapping
    public Iterable<Contato> getContatos() {
        return contatoRepository.findAll();
    }

    @GetMapping("/{id}")
    public Optional<Contato> mostraContato(@PathVariable long id) {
        return contatoRepository.findById(id);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable long id) {
        contatoRepository.deleteById(id);
    }

    @PostMapping("/{id}")
    public Contato update(@PathVariable long id, @RequestBody Contato contato) {
        contato.setId(id);
        return contatoRepository.save(contato);
    }
}
