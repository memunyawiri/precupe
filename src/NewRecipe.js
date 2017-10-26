import React, { Component } from 'react';
import logo from './logo.svg';
import './index.css'
import './precupeApp.css';
import './newRecipe.css';


class NewRecipe extends Component {
  constructor (props) {
    super()
    this.state = { recipe: '' }

    this.handleChange = this.handleChange.bind(this)
    this.handleAdd = this.handleChange.bind(this)
  }

  handleChange (event) {
    this.setState({recipe: event.target.value})
  }
  handleAdd (event) {
    event.preventDefault()
    this.props.onSubmit(this.state.recipe)
  }

  render() {
    return (
      <div className="App">

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">precüpe</h1>
        </header>

        <body className="App-body">

        <form onSubmit={this.handleAdd}>
        <p><label class='fixed-width-label' for='Title'>
        Title<br />
        <input name ='new-title' type='text' value={this.state.recipe} onChange={this.handleChange} placeholder='Recipe Title' required />
        </label></p>

        <p><label class='fixed-width-label' for='Cooking-Time'>
        Cooking & Prep Time time<br />
        <input name ='new-time' type='text' value={this.state.recipe} onChange={this.handleChange} placeholder='Prep time | Cooking Time' required />
        </label></p>

        <p><label class='fixed-width-label' for='Equipment'>
        Equipment & Utensils <br />
        <input name ='new-equipment' type='text' value={this.state.recipe} onChange={this.handleChange} placeholder='What you need to get cookin...' required />
        </label></p>

        <p><label class='fixed-width-label' for='Ingredients'>
        Ingredients<br />
        <input name ='new-ingredients' type='text' value={this.state.recipe} onChange={this.handleChange} placeholder='Ingredients...' required />
        </label></p>

        <p><label class='fixed-width-label' for='Method'>
        Method<br />
        <input name ='new-method' type='text' value={this.state.recipe} onChange={this.handleChange} placeholder='Method...' required />
        </label></p>

        <button className= "Recipe-Buttons">
        <input class='buttons' type='submit' value='ADD'/>
        </button>
        </form>
        </body>

        <footer className="App-footer">
        Copyright &copy; 2017 &middot; Created by Mutsa Munyawiri
        </footer>
      </div>
    );
  }
}

export default NewRecipe;
