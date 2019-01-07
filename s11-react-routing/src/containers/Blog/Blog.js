import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

import './Blog.css';
import Posts from './Posts/Posts';
// import NewPost from './NewPost/NewPost';
import asyncComponent from '../../hoc/asyncComponent';

// lazy loading
const AsyncNewPost = asyncComponent(() => {
    return import('./NewPost/NewPost');
});

class Blog extends Component {
    state = {
        auth: true
    }

    render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            {/* when using NavLink, can use activeClassName, activeStyle, (the default class is "active" when not using activeClassName) */}
                            <li><NavLink exact activeClassName="my-active" activeStyle={{
                                color: '#fa923f',
                                textDecoration: 'underline'
                            }} to="/posts">Posts</NavLink></li>
                            <li><NavLink to={{
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                
                {/* Switch ensures we will only load one route that matches our criteria */}
                <Switch>
                    {this.state.auth ? <Route path="/new-post" component={ AsyncNewPost } /> : null}
                    <Route path="/posts" component={ Posts } />
                    <Route render={()=><h1>not found</h1>}/>
                    {/* <Redirect from="/" to="/posts" /> */}
                    {/* <Route path="/" component={ Posts } />  */}
                </Switch>
            </div>
        );
    }
}

export default Blog;