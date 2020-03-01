import React, {Component} from 'react'
import axios from '../../axios'

import Post from '../Post/Post'
import './Posts.css'

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
        this.props.history.push({pathname: '/posts/' + id})
    }

    render() {
       let posts = <p style={{textAlign: 'center'}}>Algo deu errado!</p>
       if(!this.state.erro) {
           posts = this.state.posts.map(post => {
               return (//<Link to={`/posts${post.id}`} >
                            <Post key={post.id} titulo={post.titulo} autor={post.autor}  
                            clicado={() => this.gerenpostSelecionado(post.id)} />
                     /*</Link>*/)
           })
       }

       return (
          <section className="Posts">
              {posts}
          </section>
       )
    }
}

export default Posts