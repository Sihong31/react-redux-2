import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './Posts.css';
import axios from '../../../axios';
import FullPost from '../FullPost/FullPost';
import Post from '../../../components/Post/Post';

class Posts extends Component {
  state = {
    posts: []
  }

  componentDidMount () {
    axios.get( '/posts' )
        .then( response => {
            const posts = response.data.slice(0, 4);
            const updatedPosts = posts.map(post => {
                return {
                    ...post,
                    author: 'Max'
                }
            });
            this.setState({posts: updatedPosts});
        } )
        .catch(error => {
            console.log(error);
        });
  }

  postSelectedHandler = (id) => {
    // this.props.history.push({pathname: '/posts/' + id});
    this.props.history.push('/posts/' + id);
  }

  render() {
    let posts = <p style={{textAlign: 'center'}}>Something went wrong!</p>;
    if (!this.state.error) {
        posts = this.state.posts.map(post => {
            return (
              // <Link key={post.id} to={'/' + post.id}>
                <Post 
                  key={post.id}
                  title={post.title} 
                  author={post.author}
                  clicked={() => this.postSelectedHandler(post.id)} />
              // </Link>
            );
        });
    }

    return (
      <div>
        <section className="Posts">
          {posts}
        </section>
        <Route path={this.props.match.url + '/:id'} component={ FullPost } />
      </div>
      )
  }
}

export default Posts;