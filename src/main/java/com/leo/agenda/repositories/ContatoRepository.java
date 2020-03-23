package com.leo.agenda.repositories;

import com.leo.agenda.modelo.Contato;
import org.springframework.data.repository.CrudRepository;

public interface ContatoRepository extends CrudRepository<Contato, Long> {
}
