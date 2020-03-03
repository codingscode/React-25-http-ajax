import React, {Component} from 'react'
import axios from '../../axios'
import {Route} from 'react-router-dom'

import Post from '../Post/Post'
import './Posts.css'
import PostCompleto from '../PostCompleto/PostCompleto'

class Posts extends Component {

    state = {
        posts: []
    }

    componentDidMount() {
        console.log(this.props)
        axios.get('/posts/')  //https://jsonplaceholder.typicode.com/posts
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
           .catch(erro => {
               console.log(erro)
               //this.setState({erro: true})
           })
    }

    gerenpostSelecionado = (id) => {
        //this.setState({postIdSelecionado: id})
        this.props.history.push('/posts/' + id)
    }

    render() {
       let posts = <p style={{textAlign: 'center'}}>Algo deu errado!</p>
       if(!this.state.erro) {
           posts = this.state.posts.map(post => {
               return (
                            <Post key={post.id} titulo={post.titulo} autor={post.autor}  
                            clicado={() => this.gerenpostSelecionado(post.id)} />
                     )
           })
       }

       return (
          <div>
              <section className="Posts">
                 {posts}
              </section>
              <Route path={this.props.match.url + '/:id'} exact component={PostCompleto} /> 
          </div>
          
       )
    }
}

export default Posts