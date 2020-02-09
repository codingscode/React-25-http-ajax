import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import PostCompleto from '../../components/PostCompleto/PostCompleto';
import NovoPost from '../../components/NovoPost/NovoPost';
import './Blog.css';

class Blog extends Component {
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