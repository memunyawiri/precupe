import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Precüpe</h1>
        </header>

        <p className="App-intro">
          Add your own recipes, new & old or load the url of a recipe from your favourite foodie blogs and sites.
        </p>

        <div className="Recipes">
        // Interpolate recipes here
        </div>

        <div className="Footer">
        // Footer to go here
        </div>
      </div>
    );
  }
}

export default App;
