import React, { Component } from "react";
import Navbar from "./components/layout/Navbar";
import "./App.css";
import UserItem from "./user/UserItem";

class App extends Component {
  render() {
    return (
      <nav className='navbar bg-primary'>
        <Navbar title='Github Finder' />
        <UserItem />
      </nav>
    );
  }
}

export default App;
