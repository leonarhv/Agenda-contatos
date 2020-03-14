package com.leo.agenda.dao;

import com.leo.agenda.ConnectionFactory;
import com.leo.agenda.modelo.Contato;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

public class ContatoDao {
    private Connection connection;

    public ContatoDao() {
        this.connection = new ConnectionFactory().getConnection();
    }

    public void adiciona(Contato contato) {

        String sql = "INSERT INTO contatos (nome, telefone, facebook) VALUES (?, ?, ?)";

        try {
            PreparedStatement stmt = connection.prepareStatement(sql);
            stmt.setString(1, contato.getNome());
            stmt.setString(2, contato.getTelefone());
            stmt.setString(3, contato.getFacebook());

            stmt.execute();
            stmt.close();
            connection.close();
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }

    }

    public Contato getContatoByID(long id) {
        String sql = "SELECT * FROM contatos WHERE id = ?";

        try {
            PreparedStatement stmt = connection.prepareStatement(sql);

            stmt.setLong(1, id);
            ResultSet rs = stmt.executeQuery();

            Contato contato = new Contato();

            if (rs.next()) {
                contato.setId(id);
                contato.setFacebook(rs.getString("facebook"));
                contato.setTelefone(rs.getString("telefone"));
                contato.setNome(rs.getNString("nome"));
            }
            rs.close();
            stmt.close();
            connection.close();
            return contato;
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }

    public ArrayList<Contato> getLista() {
        ArrayList<Contato> listaContatos = new ArrayList<>();

        String sql = "SELECT * FROM contatos";

        try {
            PreparedStatement stmt = connection.prepareStatement(sql);
            ResultSet rs = stmt.executeQuery();

            while (rs.next()) {
                Contato contato = new Contato();
                contato.setNome(rs.getNString("nome"));
                contato.setTelefone(rs.getString("telefone"));
                contato.setFacebook(rs.getString("facebook"));
                contato.setId(rs.getLong("id"));
                listaContatos.add(contato);
            }

            rs.close();
            stmt.close();
            connection.close();

            return listaContatos;
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }
}
