import React, { Component } from 'react';
import axios from 'axios'

import Post from '../../components/Post/Post';
import PostCompleto from '../../components/PostCompleto/PostCompleto';
import NovoPost from '../../components/NovoPost/NovoPost';
import './Blog.css';

class Blog extends Component {
    state = {
        posts: []
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')  //C://Pib//Backup//Arquivo pessoal//TI//Minha Programação//INGLES//linguagem//javascript//Curso React//pasta25 React httpajax//posts.json  
           .then(resposta => {
              const posts = resposta.data.slice(0, 4)
              const postsAtualizados = posts.map(post => {
                return {
                    ...post,
                    author: 'Max'
                }
              })
              this.setState({posts: postsAtualizados})
              //console.log(resposta)
           })
    }
    
    render () {
        const posts = this.state.posts.map(post => {
            return <Post key={post.id} title={post.title} author={post.author} />
        })

        return (
            <div>
                <section className="Posts">
                    {posts}
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