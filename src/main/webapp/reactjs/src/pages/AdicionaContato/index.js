import React, { Component } from 'react';
import api from '../../services/api';

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
        const {nome, facebook, telefone} = this.state;
        api.post(`/contatos?nome=${nome}&telefone=${telefone}&facebook=${facebook}`);
        event.preventDefault();
    }

    render() {
    return (
        <div className="adicionaContato">
            <h2>Adicionar novo contato</h2>
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="nome">Nome:</label>
                <input type="text" name="nome" id="nome" value={this.state.nome} onChange={this.handleChange} />

                <label htmlFor="telefone">Telefone:</label>
                <input type="text" name="telefone" id="telefone" value={this.state.telefone} onChange={this.handleChange} />

                <label htmlFor="facebook">Facebook:</label>
                <input type="text" name="facebook" id="facebook" value={this.state.facebook} onChange={this.handleChange} />
                <button type="submit">Adicionar</button>
            </form>
        </div>
    )
    }
}