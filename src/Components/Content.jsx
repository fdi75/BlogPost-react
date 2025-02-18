import React, { Component } from "react";
import Image from "./Image";
import Comments from "./Comments.jsx";
export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: null,
    };
  }

  async Getcomments() {
    const res = await fetch(
      `http://localhost:3002/comments?postId=${this.props.post.id}`
    );
    const data = await res.json();
    return await data;
  }

  componentDidMount() {
    this.Getcomments().then((data) => this.setState({ comments: data }));
  }

  componentDidUpdate(prevprops) {
    if (prevprops.post.id != this.props.post.id) {
      this.Getcomments().then((data) => this.setState({ comments: data }));
    }
  }

  render() {
    return (
      <>
        <div className="container">
          <Image post={this.props.post} />
          <Comments comments={this.state.comments} />
        </div>
      </>
    );
  }
}
