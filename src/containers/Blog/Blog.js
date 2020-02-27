import React, { Component } from 'react';
import {Route} from 'react-router-dom'

import './Blog.css';
import Posts from '../../components/Posts/Posts'

class Blog extends Component {
    
    render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/novo-post">Novo Post</a></li>
                        </ul>
                    </nav>
                </header>
            <Route path="/" exact render={() => <h1>Home</h1>} />  
            <Route path="/" render={() => <h1>Home 2</h1>} />  
            </div>
        );
    }
}

export default Blog; //aparece http://localhost:3000/novo-post