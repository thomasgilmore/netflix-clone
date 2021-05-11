import React, { Component } from 'react';
import MainMovie from './MainMovie';
import MovieRow from './MovieRow';
import $ from 'jquery';

require('dotenv').config()

export class API extends Component {

    constructor(props) {
        super(props)
        this.state = {}

        this.performSearch()
    }

    performSearch() {
        console.log("Perform search using The Movie DB")
        const urlString = "https://api.themoviedb.org/3/trending/all/day?api_key=" + process.env.REACT_APP_MOVIE_DB_API;
        $.ajax({
          url: urlString,
          success: (searchResults) => {
            console.log("Fetched data successfully")
            console.log(searchResults)
            const results = searchResults.results
            console.log(results)

            var movieMain = []
            var moviesRows = []

            var i = 0;

            if (results[0]) {
                console.log(results[i].name || results[i].title);
                i++;
            }

            for (i = 1; i < results.length; i++) {
                console.log(results[i].name || results[i].title);
            }

            // const foodRow = <FoodRow key={pairings} food={pairings} info={text} />
            // foodRows.push(foodRow)
    
            // results.forEach((food) => {
            //   console.log(food)
            //   const wineRow = <WineRow key={food} food={food} />
            //   wineRows.push(wineRow)
            // })
            this.setState({main: movieMain})
            this.setState({rows: moviesRows})
          },
          error: (xhr, status, err) => {
            console.log("Failed to fetch data")
          }
        })
      }
    
    //   searchChangeHandler(event) {
    //     // console.log(event.target.value);
    //     const boundObject = this
    //     const searchTerm = event.target.value;
    //     boundObject.performSearch(searchTerm);
    //   }
    
      render() {
      return (
        <div>
    
          {this.state.rows}
            
    
        </div>
      );
      }

}