import React, { Component } from "react";
import Navbar from "./components/layout/Navbar";
import "./App.css";
import UserItem from "./user/UserItem";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar title='Github Finder' />
        <UserItem />
      </div>
    );
  }
}

export default App;
