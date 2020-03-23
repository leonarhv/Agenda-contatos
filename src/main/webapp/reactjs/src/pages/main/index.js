import React, { Component } from 'react';
import api from '../../services/api';
import './style.css'

export default class Main extends Component {

    state = {
        contatos: []
    }

    componentDidMount() {
       this.loadContatos();
    }

    loadContatos = async () => {
        const response = await api.get('/contatos');
        const contatos = response.data; 
        this.setState({ contatos });
    };

    handleDelete = (id) => {
        api.delete(`/contatos/${id}`).then(response => {
            this.loadContatos();
        });
    }

    render() {
    const { contatos } = this.state;

    return (
        <div className="lista-contatos">
            {contatos.map(contato => (
                <article key={`contato-${contato.id}`}>
                    <h3>{contato.nome}</h3>
                    <p>Telefone: {contato.telefone}</p>
                    <a href={"http://" + contato.facebook}>Facebook</a>
                    <button onClick={this.handleDelete.bind(this, contato.id)}>Deletar</button>
                </article>
            ))}
        </div>
    )

    }
}