import React from 'react';
import {withRouter} from 'react-router-dom'

import './Post.css';

const post = (props) => {      // transforma em componente
    console.log(props)

    return (
        <article className="Post" onClick={props.clicado}>
            <h1>{props.titulo}</h1>
            <div className="Informacao">
                <div className="Autor">{props.autor}</div>
            </div>
        </article>
    )
    
};

export default withRouter(post);