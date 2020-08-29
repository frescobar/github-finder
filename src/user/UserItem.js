import React, { Component } from "react";

export default class UserItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 1,
      login: "Mojombo",
      avatar_url: "https://randomuser.me/api/portraits/men/51.jpg",
      html_url: "https://github.com/octocat",
    };
  }

  render() {
    const { avatar_url, login, html_url } = this.state;
    return (
      <div className='card text-center'>
        <img
          src={avatar_url}
          alt='login imag'
          className='round-img'
          style={{ width: "100px", height: "auto" }}
        />
        <h3>{login}</h3>
        <div>
          <a href={html_url} className='btn  btn-dark btn-sm my-1'>
            More
          </a>
        </div>
      </div>
    );
  }
}
