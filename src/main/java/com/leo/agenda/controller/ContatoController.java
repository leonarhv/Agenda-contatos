package com.leo.agenda.controller;

import com.leo.agenda.dao.ContatoDao;
import com.leo.agenda.modelo.Contato;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/contatos")
@RestController
public class ContatoController {

    @PostMapping
    public void adiciona(Contato contato) {
        ContatoDao dao = new ContatoDao();
        dao.adiciona(contato);
    }

    @GetMapping
    public ArrayList<Contato> listaContatos() {
        ContatoDao dao = new ContatoDao();
        return dao.getLista();
    }

    @GetMapping("/{id}")
    public Contato mostraContato(@PathVariable long id) {
        ContatoDao dao = new ContatoDao();
        return dao.getContatoByID(id);
    }


}
