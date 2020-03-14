package com.leo.agenda.controller;

import com.leo.agenda.dao.ContatoDao;
import com.leo.agenda.modelo.Contato;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;

@RestController
public class ContatoController {

    @RequestMapping("/adiciona-contato")
    public void adiciona(Contato contato) {
        ContatoDao dao = new ContatoDao();
        dao.adiciona(contato);
    }

    @RequestMapping("/contatos")
    public ArrayList<Contato> listaContatos() {
        ContatoDao dao = new ContatoDao();
        return dao.getLista();
    }

    @RequestMapping("/contatos/{id}")
    public Contato mostraContato(@PathVariable long id) {
        ContatoDao dao = new ContatoDao();
        return dao.getContatoByID(id);
    }
}
