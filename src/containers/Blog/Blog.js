import React, { Component } from 'react';
import axios from 'axios'

import Post from '../../components/Post/Post';
import PostCompleto from '../../components/PostCompleto/PostCompleto';
import NovoPost from '../../components/NovoPost/NovoPost';
import './Blog.css';

class Blog extends Component {
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
           .then(resposta => {
              console.log(resposta)
           })
    }
    
    render () {
        return (
            <div>
                <section className="Posts">
                    <Post />
                    <Post />
                    <Post />
                </section>
                <section>
                    <PostCompleto />
                </section>
                <section>
                    <NovoPost />
                </section>
            </div>
        );
    }
}

export default Blog;