import React, { Component } from 'react';
import api from '../../services/api';

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

    render() {
    const { contatos } = this.state;

    return (
        <div className="lista-contatos">
            {contatos.map(contato => (
                <div key={`contato-${contato.id}`}>
                    <h1>{contato.nome}</h1>
                    <p>{contato.facebook}</p>
                </div>
            ))}
        </div>
    )

    }
}