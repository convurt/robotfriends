import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import "./App.css";
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";
// STATE >> props

//the class app controls the application
class App extends Component {
    //create the state (smart component), super() is a reference to the parent class and has to come first
    // look at life cycle hooks https://reactjs.org/docs/react-component.html
    constructor() {
        super();
        this.state = {
            robots: [],
            searchfield: ""
        }
        console.log("constructor");
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(users => this.setState({robots: users}));
    }

    //changing the state when searching in searchbox
    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value });

    }
    render() {
        // structure robts and searchfield so you dont have to use this.state.robots and this.state.searchfield
        const { robots, searchfield } = this.state;
        //filtering the robots with the searchfield from above, the includes is what connected them together
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
            return !robots.length ?
            <h1>Loading</h1> :
            (
                <div className="tc">
                    <h1>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robots={filteredRobots}/>
                        </ErrorBoundry>
                    </Scroll>
                </div>
            );
        }
    }


export default App;