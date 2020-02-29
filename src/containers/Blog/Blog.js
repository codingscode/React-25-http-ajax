import React, { Component } from 'react';
import {Route, NavLink} from 'react-router-dom'

import './Blog.css';
import Posts from '../../components/Posts/Posts'
import NovoPost from '../../components/NovoPost/NovoPost'

class Blog extends Component {
    
    render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to="/" exact activeClassName="meu-ativo" activeStyle={{
                                    color: '#fa923f',
                                    textDecoration: 'underline'
                                }}>Home</NavLink></li>
                            <li><NavLink to={{      // o exact aqui não é necessário
                                pathname: '/novo-post',
                                hash: '#submit',
                                search: '?quick-submit=true'
                                }} >Novo Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
            {/*<Route path="/" exact render={() => <h1>Home</h1>} />  
            <Route path="/" render={() => <h1>Home 2</h1>} />*/} 
            <Route path="/" exact component={Posts} /> 
            <Route path="/novo-post" component={NovoPost} /> 
            </div>
        );
    }
}

export default Blog; //aparece http://localhost:3000/novo-post