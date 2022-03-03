import React, { Component } from "react";
import Cardlist from "./cardlist";
import SearchBox from './SearchBox';
//import { actorsAndCharacters } from "./details";
import { movieDb } from "./moviedb";
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            movies: movieDb,
            searchField: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value });
    }
    render() {

        // const filterChar = this.state.actorsAndCharacters.filter(actor => {
        //     // console.log(this.state.searchField);
        //     return actor.name.toLowerCase().includes(this.state.searchField.toLowerCase())||actor.description.toLowerCase().includes(this.state.searchField.toLowerCase());
        // })

        const filtermoive = this.state.movies.filter(mov => {
            return mov.name.toLowerCase().includes(this.state.searchField.toLocaleLowerCase()) || mov.description.toLocaleLowerCase().includes(this.state.searchField.toLowerCase())
        });
        return (
            <div className="tc">
                <h1>Top Grossing Movies</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <div className='item-cards'>
                    {/* <Cardlist actorsAndCharacters={filterChar} /> */}
                    <Cardlist movies={filtermoive} />
                </div>
            </div>
        );
    }
}
export default App;