import React, { Component } from 'react';
import './api.css';
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

            var movieMains = []
            var trendingNowMovies = []

            var i = 0;

            if (results[0]) {
                // console.log(results[i].name || results[i].title);
                var movieTitle = results[i].name || results[i].title;
                var movieBackdrop = "https://image.tmdb.org/t/p/original" + results[i].backdrop_path;
                var moviePoster = "https://image.tmdb.org/t/p/w440_and_h660_face" + results[i].poster_path;
                var movieId = results[i].id;
                // console.log(movieBackdrop);
                const movieMain = <MainMovie key={movieId} movieTitle={movieTitle} movieBackdrop={movieBackdrop} />
                movieMains.push(movieMain)
                i++;
            }

            for (i = 1; i < results.length; i++) {
                console.log(results[i].name || results[i].title);
                movieTitle = results[i].name || results[i].title;
                movieBackdrop = "https://image.tmdb.org/t/p/original" + results[i].backdrop_path;
                moviePoster = "https://image.tmdb.org/t/p/w440_and_h660_face" + results[i].poster_path;
                movieId = results[i].id;
                const movieRow = <MovieRow key={movieId} movieTitle={movieTitle} movieBackdrop={movieBackdrop} />
                trendingNowMovies.push(movieRow)
            }

            // const foodRow = <FoodRow key={pairings} food={pairings} info={text} />
            // foodRows.push(foodRow)
    
            // results.forEach((food) => {
            //   console.log(food)
            //   const wineRow = <WineRow key={food} food={food} />
            //   wineRows.push(wineRow)
            // })
            this.setState({main: movieMains})
            this.setState({trendingNow: trendingNowMovies})
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
    
          {this.state.main}
          <section className="trendingSection">
            <h3 className="trendingTitle">Trending Now</h3>
            <div className="trendingMoviesAndTVShows">
              {this.state.trendingNow}
            </div>
          </section>
            
    
        </div>
      );
      }

}