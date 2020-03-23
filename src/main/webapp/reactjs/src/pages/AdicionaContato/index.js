import React, { Component } from 'react';
import api from '../../services/api';
import './style.css';
import { Redirect } from 'react-router-dom';

export default class AdicionaContato extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nome: "",
            telefone: "",
            facebook: "",
            redirect: false
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
        const { nome, facebook, telefone } = this.state

        api.post('/contatos', {
            "nome": nome,
            "telefone": telefone,
            "facebook": facebook
        }).then(response => {
            this.setState({ nome: "", telefone: "", facebook: "", redirect: true });
            console.log(response.status);
        });

        event.preventDefault();
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to="/" />;
        } else {
            return (
                <div className="adicionaContato">
                    <h2>Adicionar novo contato</h2>
                    <form onSubmit={this.handleSubmit}>
                        <label htmlFor="nome">Nome:
                    <input type="text" name="nome" required="required" id="nome" placeholder="Insira seu nome aqui" value={this.state.nome} onChange={this.handleChange} />
                        </label>

                        <label htmlFor="telefone">Telefone:
                    <input type="text" name="telefone" required="required" id="telefone" placeholder="Informe seu telefone (xx) xxxx-xxxx" value={this.state.telefone} onChange={this.handleChange} />
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
}