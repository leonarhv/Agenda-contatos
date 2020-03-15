package com.leo.agenda.controller;

import com.leo.agenda.dao.ContatoDao;
import com.leo.agenda.modelo.Contato;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
public class ContatoController {

    @PostMapping("/contatos")
    public void adiciona(Contato contato) {
        ContatoDao dao = new ContatoDao();
        dao.adiciona(contato);
    }

    @GetMapping("/contatos")
    public ArrayList<Contato> listaContatos() {
        ContatoDao dao = new ContatoDao();
        return dao.getLista();
    }

    @GetMapping("/contatos/{id}")
    public Contato mostraContato(@PathVariable long id) {
        ContatoDao dao = new ContatoDao();
        return dao.getContatoByID(id);
    }


}
