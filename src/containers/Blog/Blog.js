import React, { Component } from 'react';
import axios from 'axios'

import Post from '../../components/Post/Post';
import PostCompleto from '../../components/PostCompleto/PostCompleto';
import NovoPost from '../../components/NovoPost/NovoPost';
import './Blog.css';

class Blog extends Component {
    state = {
        posts: [],
        postIdSelecionado: null
    }

    componentDidMount() {
        axios.get('http://localhost:8081/posts/')  //https://jsonplaceholder.typicode.com/posts
           .then(resposta => {
              const posts = resposta.data.slice(0, 4)
              const postsAtualizados = posts.map(post => {
                return {
                    ...post,
                    autor: 'Max'
                }
              })
              this.setState({posts: postsAtualizados})
              //console.log(resposta)
           })
    }
    
    gerenpostSelecionado = (id) => {
        this.setState({postIdSelecionado: id})
    }

    render () {
        const posts = this.state.posts.map(post => {
            return <Post key={post.id} titulo={post.titulo} autor={post.autor} clicado={() => this.gerenpostSelecionado(post.id)} />
        })

        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <PostCompleto id={this.state.postIdSelecionado}/>
                </section>
                <section>
                    <NovoPost />
                </section>
            </div>
        );
    }
}

export default Blog;