import React, { Component } from 'react';
import axios from 'axios'

import './PostCompleto.css';

class PostCompleto extends Component {
    state = {
        postCarregado: null
    }

    componentDidUpdate() {
        if(this.props.id) {
           if (!this.state.postCarregado || (this.state.postCarregado && this.state.postCarregado.id !== this.props.id)) {
            axios.get(`/posts/${this.props.id}`)
            .then(resposta => {
               //console.log(resposta)
               this.setState({postCarregado: resposta.data})
             }) 
           }
           
        }
    }

    gerenPostapagar = () => {
        axios.delete(`/posts/${this.props.id}`)
           .then(resposta => {
              console.log(resposta)
           })
    }

    render () {
        let post = <p style={{textAlign: 'center'}}>Por favor selecione um Post !</p>;
        if (this.props.id) {
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