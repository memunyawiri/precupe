import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './NewRecipe.css';


class NewRecipe extends Component {
  render() {
    return (
      <div className="App">

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">precüpe</h1>
        </header>

        <div className= "Recipe-Buttons">
        <input class='buttons' type='submit' value='ADD'/>
        </div>

        <footer className="App-footer">
        Copyright &copy; 2017 &middot; Created by Mutsa Munyawiri
        </footer>
      </div>
    );
  }
}

export default NewRecipe;
