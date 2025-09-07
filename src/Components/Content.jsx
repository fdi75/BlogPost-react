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
    const res = await fetch(process.env.PUBLIC_URL + "/db.json");
    const data = await res.json();
    return data.comments
      ? data.comments.filter((c) => c.postId === this.props.post.id)
      : [];
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
