import React, { Component } from "react";
import axios from "axios";
import LargeHeading from "./largeHeading/LargeHeading";

class ChuckNorris extends Component {
  state = {
    randomJoke: '',
    categories: [],
    isSpinning: true,
    categoryJoke: '',
    listOfJokes: []
  }

  componentDidMount = async () => {
    const response = await axios.get('https://api.chucknorris.io/jokes/categories');
    this.setState({categories: response.data, isSpinning: false});

  }

  getRandomJoke = async () => {
    try {
      const response = await axios.get('https://api.chucknorris.io/jokes/random');
      return response.data.value;

    } catch (err) {
      console.log(err)
    }
  }

  handleRandomJoke = async () => {
    this.setState({ randomJoke: await this.getRandomJoke()})
  }

  handleGetCategory = async (category) => {
    try {
      const response = await axios.get(`https://api.chucknorris.io/jokes/random?category=${category}`);
      this.setState({ categoryJoke: await this.getRandomJoke()});
    } catch (err) {
      console.log(err)
    }
  }
  
  handleInputPress = async (event) => {
    if(event.key === 'Enter') {
      const response = await axios.get(`https://api.chucknorris.io/jokes/search?query=${event.target.value}`);
      this.setState({listOfJokes: response.data.result});
    }
  }

  render() {
    return (
      <div>
        <input onKeyPress={this.handleInputPress} />
        <button onClick={this.handleRandomJoke}>Random Joke</button>
        {this.state.isSpinning && <LargeHeading text={'Amazing Spinner'} />}
        <LargeHeading text={this.state.randomJoke} />
        {this.state.categories.map((category) => <button key={category} onClick={() => this.handleGetCategory(category)}>{category}</button>)}
        <LargeHeading text={this.state.categoryJoke} />
        {this.state.listOfJokes.map((joke) => <p key={joke.id}>{joke.value}</p>)}
      </div>

    );
  }

}


export default ChuckNorris;