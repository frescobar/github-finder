import React, { Component } from "react";

export default class UserItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 1,
      loging: "Mojombo",
      avatar_url: "https://github.com/images/error/octocat_happy.gif",
      html_url: "https://github.com/octocat",
    };
  }

  render() {
    return <div>UserItem</div>;
  }
}
