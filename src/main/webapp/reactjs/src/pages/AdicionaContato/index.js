import React, { Component } from 'react';
import api from '../../services/api';
import './style.css';

export default class AdicionaContato extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nome: "",
            telefone: "",
            facebook: ""
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState({ [name]: value });
    }

    handleSubmit = (event) => {
        const qs = require('qs');
        api.post('/contatos', qs.stringify(this.state)).then(response => {
            this.setState({ nome: "", telefone: "", facebook: "" });
            console.log(response.status);
        });
        event.preventDefault();
    }

    render() {
    return (
        <div className="adicionaContato">
            <h2>Adicionar novo contato</h2>
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="nome">Nome:
                <input type="text" name="nome" id="nome" placeholder="Insira seu nome aqui" value={this.state.nome} onChange={this.handleChange} />
                </label>

                <label htmlFor="telefone">Telefone:
                <input type="text" name="telefone" id="telefone" placeholder="Informe seu telefone (xx) xxxx-xxxx" value={this.state.telefone} onChange={this.handleChange} />
                </label>

                <label htmlFor="facebook">Facebook:
                <input type="text" name="facebook" id="facebook" placeholder="Informe o facebook do contato: facebook.com/[Pagina do contato aqui]" value={this.state.facebook} onChange={this.handleChange} />
                </label>

                <button type="submit">Adicionar</button>
            </form>
        </div>
    )
    }
}