import React, { Component } from 'react';
import axios from 'axios'

import './NovoPost.css';

class NovoPost extends Component {
    state = {
        titulo: '',
        conteudo: '',
        autor: 'Max'
    }

    gerenPostdado = () => {
        const dado = {
           titulo: this.state.titulo,
           body: this.state.conteudo,
           autor: this.state.autor
        }
        axios.post(`http://localhost:8081/posts`, dado)
           .then(resposta => {
              console.log(resposta)
           })
     }

    render () {
        return (
            <div className="NovoPost">
                <h1>Adicione um Post</h1>
                <label>Titulo</label>
                <input type="text" value={this.state.titulo} onChange={(evento) => this.setState({titulo: evento.target.value})} />
                <label>Conteudo</label>
                <textarea rows="4" value={this.state.conteudo} onChange={(evento) => this.setState({conteudo: evento.target.value})} />
                <label>Autor</label>
                <select value={this.state.autor} onChange={(evento) => this.setState({autor: evento.target.value})}>
                    <option value="Max">Max</option>
                    <option value="Manu">Manu</option>
                </select>
                <button onClick={this.gerenPostdado} >Add Post</button>
            </div>
        );
    }
}

export default NovoPost;