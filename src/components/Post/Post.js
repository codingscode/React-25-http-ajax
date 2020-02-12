import React from 'react';

import './Post.css';

const post = (props) => (
    <article className="Post" onClick={props.clicado}>
        <h1>{props.title}</h1>
        <div className="Informacao">
            <div className="Autor">{props.author}</div>
        </div>
    </article>
);

export default post;