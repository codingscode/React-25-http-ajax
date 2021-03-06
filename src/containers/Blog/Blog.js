import React, { Component } from 'react';
import {Route, NavLink, Switch, Redirect} from 'react-router-dom'

import './Blog.css';
import Posts from '../../components/Posts/Posts'
import asyncComponent from '../../hoc/asyncComponent'

//import NovoPost from '../../components/NovoPost/NovoPost'
const AsyncNovoPost = asyncComponent(() => {
    return import('../../components/NovoPost/NovoPost')
})


class Blog extends Component {
    state = {
        autent: true
    }

    render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to="/posts/" exact activeClassName="meu-ativo" activeStyle={{
                                    color: '#fa923f',
                                    textDecoration: 'underline'
                                }}>Posts</NavLink></li>
                            <li><NavLink to={{      // o exact aqui não é necessário
                                pathname: '/novo-post',
                                hash: '#submit',
                                search: '?quick-submit=true'
                                }} >Novo Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
            <Switch>
                    {this.state.autent ? <Route path="/novo-post" component={AsyncNovoPost} /> : null}
                    <Route path="/posts" component={Posts} />
                    <Route render={() => <h1>Não encontrado</h1>} /> 
                    {/*< Redirect from="/" to="/posts" /> */}
                    {/*<Route path="/" component={Posts} />*/} 
            </Switch>
            </div>
        );
    }
}

export default Blog; //aparece http://localhost:3000/novo-post