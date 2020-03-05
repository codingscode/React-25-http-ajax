import React, { Component } from 'react';
import axios from '../../axios'
import {Redirect} from 'react-router-dom'

import './NovoPost.css';

class NovoPost extends Component {
    state = {
        titulo: '',
        conteudo: '',
        autor: 'Max',
        submetido: false
    }

    componentDidMount() {
        console.log(this.props)
    }

    gerenPostdado = () => {
        const dado = {
           titulo: this.state.titulo,
           body: this.state.conteudo,
           autor: this.state.autor
        }
        axios.post(`/posts`, dado)
           .then(resposta => {
              console.log(resposta)
              this.setState({submetido: true})
           })
     }

    render () {
        let redirecionar = null
        if (this.state.submetido) {
            redirecionar = <Redirect to="/posts" />
        }

        return (
            <div className="NovoPost">
                {redirecionar}
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

export default NovoPost; //http://localhost:3000/novo-post/2?quick-submit=true#submit ver