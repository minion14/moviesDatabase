import React, { Component } from "react";
import { connect } from "react-redux";

import Cardlist from "../components/cardlist";
import SearchBox from '../components/SearchBox';
//import { actorsAndCharacters } from "./details";
import { movieDb } from "../data/moviedb";
import './App.css';
import * as action from '../store/actions'

class App extends Component {
    constructor() {
        super();
        this.state = {
            movies: movieDb
        }
    }

    render() {

        const filtermoive = this.state.movies.filter(mov => {
            return mov.name.toLowerCase().includes(this.props.searchField.toLocaleLowerCase()) || mov.description.toLocaleLowerCase().includes(this.props.searchField.toLowerCase())
        });
        return (
            
            <div className="tc">
                <h1>Top Grossing Movies</h1>
                <SearchBox searchChange={this.props.onSearchChange} />
                <div className='item-cards'>
                    {/* <Cardlist actorsAndCharacters={filterChar} /> */}
                    <Cardlist movies={filtermoive} />
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        searchField: state.searchField
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSearchChange: (event) => dispatch(action.setSearchField(event.target.value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);