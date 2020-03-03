import React, { Component } from 'react';
import {Route, NavLink, Switch} from 'react-router-dom'

import './Blog.css';
import Posts from '../../components/Posts/Posts'
import NovoPost from '../../components/NovoPost/NovoPost'
import PostCompleto from '../../components/PostCompleto/PostCompleto'

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
            
            <Route path="/" exact component={Posts} /> 
            <Switch>
                    <Route path="/novo-post" component={NovoPost} />
                    <Route path="/:id" exact component={PostCompleto} /> 
            </Switch>
            </div>
        );
    }
}

export default Blog; //aparece http://localhost:3000/novo-post