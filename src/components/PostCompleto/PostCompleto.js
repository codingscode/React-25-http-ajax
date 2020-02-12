import React, { Component } from 'react';

import './PostCompleto.css';

class PostCompleto extends Component {
    render () {
        let post = <p style={{textAlign: 'center'}}>Por favor selecione um Post !</p>;
        
        if (this.props.id) {
            post = (
                <div className="PostCompleto">
                    <h1>Titulo</h1>
                    <p>Conteudo</p>
                    <div className="Editar">
                        <button className="Apagar">Apagar</button>
                    </div>
                </div>

            );
        }
        return post;
    }
}

export default PostCompleto;