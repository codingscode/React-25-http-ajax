import React, { Component } from 'react';
import axios from '../../axios'

import './PostCompleto.css';

class PostCompleto extends Component {
    state = {
        postCarregado: null
    }

    componentDidMount() {
        console.log(this.props)
        this.carregarDado()
    }

    componentDidUpdate() {
        this.carregarDado()
    }

    carregarDado() {
        if(this.props.match.params.id) {
            if (!this.state.postCarregado || (this.state.postCarregado && this.state.postCarregado.id !== +this.props.match.params.id)) {
             axios.get('/posts/'+ this.props.match.params.id)
                 .then(resposta => {
                     //console.log(resposta)
                     this.setState({postCarregado: resposta.data})
                 }) 
            }
            
        }
    }

    gerenPostapagar = () => {
        axios.delete(`/posts/${this.props.match.params.id}`)
           .then(resposta => {
              console.log(resposta)
           })
    }

    render () {
        let post = <p style={{textAlign: 'center'}}>Por favor selecione um Post !</p>;
        if (this.props.match.params.id) {
            post = <p style={{textAlign: 'center'}}>Carregando..... !</p>;
        }

        if (this.state.postCarregado) {
            post = (
                <div className="PostCompleto">
                    <h1>{this.state.postCarregado.titulo}</h1>
                    <p>{this.state.postCarregado.body}</p>
                    <div className="Editar">
                        <button onClick={this.gerenPostapagar} className="Apagar">Apagar</button>
                    </div>
                </div>

            );
        }
        return post;
    }
}

export default PostCompleto;