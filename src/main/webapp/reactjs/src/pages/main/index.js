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
        console.log(response);
    };

    render() {

    return (
        <div>aa</div>
    )

    }
}