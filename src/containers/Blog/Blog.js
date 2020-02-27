import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom'

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
                            <li><Link to="/" >Home</Link></li>
                            <li><Link to={{
                                pathname: '/novo-post',
                                hash: '#submit',
                                search: '?quick-submit=true'
                                }} >Novo Post</Link></li>
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