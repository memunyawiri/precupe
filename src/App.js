import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">precüpe</h1>
        </header>

        <p className="App-intro">
          Add your own recipes, new & old or load the url of a recipe from your favourite foodie blogs and sites.
        </p>

        <div className= "Recipe-Buttons">
        <input class='buttons' type='submit' value='Add New Recipe'/>
        <input class='buttons' type='submit' value='Add Existing Recipe'/>
        </div>

        <body className="Recipes">
        // Interpolate recipes here
        </body>

        <footer className="App-footer">
        Copyright &copy; 2017 &middot; Created by Mutsa Munyawiri
        </footer>
      </div>
    );
  }
}

export default App;
