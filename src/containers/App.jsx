import React, { Component } from "react";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import CardList from "../components/CardList";
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: [],
      searchField : ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.cypress.io/users')
      .then(response => response.json())
      .then(user => this.setState({ robots: user }))
  }

  handleSearchChange = (event) => {
    this.setState({ searchField: event.target.value })
  }

  render() {
    const { robots, searchField } = this.state
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase())
    }) || null

    { return !filteredRobots ? (
        <h2 className="tc">Loading</h2>
      ) :
      (
        <div className="tc">
          <h1>ROBOFRIENDS</h1>
          <SearchBox handleSearchChange={this.handleSearchChange}/>
          <Scroll>
            <CardList robots={filteredRobots} />
          </Scroll>
        </div>
      )
    }
    
  }
}

export default App
