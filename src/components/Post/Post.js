import React from 'react';

import './Post.css';

const post = (props) => (
    <article className="Post">
        <h1>{props.title}</h1>
        <div className="Informacao">
            <div className="Autor">Autor</div>
        </div>
    </article>
);

export default post;