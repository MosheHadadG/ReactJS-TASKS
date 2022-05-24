import React from "react";
import axios from "axios";
import Button from "./UI/button/button";
import TextBox from "./UI/button/paragraph/paragraph";
import SearchBar from "./UI/button/search-bar/searchBar";
class ChuckNorris extends React.Component {
  state = {
    joke: "",
    categories: [],
    searchCategories: [],
    category: "",
    jokeByCategory: ''
  };

  getJoke = async () => {
    const response = await axios.get("https://api.chucknorris.io/jokes/random");
    this.setState({ joke: response.data.value });
  };

  getJokeCategories = async () => {
    const response = await axios.get(
      "https://api.chucknorris.io/jokes/categories"
    );
    this.setState({ categories: response.data });
    this.setState({ searchCategories: response.data });
  };

  getJokeByCategory = async (category) => {
    this.categoryValue();
    const response = await axios.get(
      `https://api.chucknorris.io/jokes/random?category=${this.state.category}`
    );
    // console.log(response);
    this.setState({ joke: response.data.value });
  };

  categoryValue = (e) => {
    this.setState({ category: e.target.value });
    console.log(this.state)
  };

  emptyValue = () => {
    this.setState({ category: '' })
  }

  componentDidMount = () => {
    this.getJokeCategories();
  };


  render = () => {
    return (
      <div>
        <Button name="Get a Chuck Norris Joke" clickedBtn={this.getJoke} />

        <TextBox text={this.state.joke} />

        <SearchBar
          categories={this.state.searchCategories}
          searchBarValue={this.categoryValue}
          emptyValue={this.emptyValue}
        />

        <Button
          name="Get joke by this category"
          clickedBtn={this.getJokeByCategory}
        />
        <TextBox text={this.state.jokeByCategory} />
      </div>
    );
  };
}
export default ChuckNorris;