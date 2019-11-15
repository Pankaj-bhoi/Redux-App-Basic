import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchPost } from '../actions/postActions';

class Posts extends Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         posts: []
    //     }
    // }
    componentWillMount() {

        this.props.fetchPost();
        // fetch('https://jsonplaceholder.typicode.com/posts')
        //     .then(res => res.json())
        //     .then(data => this.setState({ posts: data }));
    }
    componentWillReceiveProps(nextProp) {
        if (nextProp.newpost) {
            this.props.posts.unshift(nextProp.newpost);
        }
    }
    render() {
        const postItems = this.props.posts.map(post => (
            <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
        ))
        return (
            <div>
                <h1>Posts</h1>
                {postItems}
            </div>
        )
    }
}

Posts.propTypes = {
    fetchPost: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired
}
const mapStateToProps = state => ({
    posts: state.posts.items,
    newpost: state.posts.item
})
export default connect(mapStateToProps, { fetchPost })(Posts);