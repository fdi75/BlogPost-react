import React, { Component } from "react";
import Sidebar from "./Sidebar";
import Getposts from "./Getposts";
import Content from "./Content";

export default class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: null,
      selectedPost: null,
    };

    this.handleClickPost = this.handleClickPost.bind(this);
  }

  handleClickPost(postId) {
    this.setState({ selectedPost: postId });
  }

  componentDidMount() {
    Getposts().then((data) => this.setState({ posts: data.posts, selectedPost: 0 }));
  }

  render() {
    return (
      <>
        <Sidebar posts={this.state.posts} onClickPost={this.handleClickPost} />
        {null != this.state.selectedPost && (
          <Content post={this.state.posts[this.state.selectedPost]} />
        )}
      </>
    );
  }
}
