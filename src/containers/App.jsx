import React, { useState, useEffect } from "react";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";
import CardList from "../components/CardList";
import './App.css'

const App = () => {
  const [robots, setRobots] = useState([])
  const [searchField, setSearchField] = useState('')

  useEffect(() => {
    fetch('https://jsonplaceholder.cypress.io/users')
      .then(response => response.json())
      .then(users => setRobots(users))
  }, [])

  const handleSearchChange = (event) => {
    setSearchField(event.target.value)
  }

  const filteredRobots = robots.filter(robot => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase())
  }) || null

  {
    return !filteredRobots ? (
      <h2 className="tc">Loading</h2>
    ) :
      (
        <div className="tc">
          <h1>ROBOFRIENDS</h1>
          <SearchBox handleSearchChange={handleSearchChange} />
          <Scroll>
            <ErrorBoundary>
              <CardList robots={filteredRobots} />
            </ErrorBoundary>
          </Scroll>
        </div>
      )
  }

}

export default App
