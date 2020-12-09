import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";
import "./App.css";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      cats: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://zilhamdev.github.io/web-development/db.json")
      .then((res) => res.json())
      .then((cat) => this.setState({ cats: cat }));
  }

  onSearchChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { cats, searchField } = this.state;

    const filteredCats = cats.filter((cat) =>
      cat.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return !cats.length ? (
      <h2>Loading... please wait...</h2>
    ) : (
      <div className="tc">
        <header>
          <h1 className="f1">CatFriends</h1>
          <SearchBox
            searchChange={this.onSearchChange}
            searchField={this.state.searchField}
          />
        </header>
        <Scroll>
          <ErrorBoundary>
            <CardList cats={filteredCats} />
          </ErrorBoundary>
        </Scroll>
      </div>
    );
  }
}
