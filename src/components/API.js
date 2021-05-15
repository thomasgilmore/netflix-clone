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
        // console.log("Perform search using The Movie DB")
        const urlString = "https://api.themoviedb.org/3/trending/all/day?api_key=" + process.env.REACT_APP_MOVIE_DB_API;
        const urlString2 = "https://api.themoviedb.org/3/tv/popular?api_key=" + process.env.REACT_APP_MOVIE_DB_API;
        const urlString3 = "https://api.themoviedb.org/3/movie/35/similar?api_key=" + process.env.REACT_APP_MOVIE_DB_API + "&language=en-US&page=1";
        const urlString4 = "https://api.themoviedb.org/3/movie/18/similar?api_key=" + process.env.REACT_APP_MOVIE_DB_API + "&language=en-US&page=1";
        const urlString5 = "https://api.themoviedb.org/3/movie/12/similar?api_key=" + process.env.REACT_APP_MOVIE_DB_API + "&language=en-US&page=1";
        const urlString6 = "https://api.themoviedb.org/3/movie/10770/similar?api_key=" + process.env.REACT_APP_MOVIE_DB_API + "&language=en-US&page=1";
        const urlString7 = "https://api.themoviedb.org/3/movie/9648/similar?api_key=" + process.env.REACT_APP_MOVIE_DB_API + "&language=en-US&page=1";



        $.ajax({
          url: urlString,
          success: (searchResults) => {
            console.log("Fetched data successfully")
            // console.log(searchResults)
            const results = searchResults.results
            // console.log(results)

            var movieMains = []
            var trendingNowMovies = []

            var i = 0;

            if (results[0]) {
                // console.log(results[i].name || results[i].title);
                var movieTitle = results[i].name || results[i].title;
                var movieBackdrop = "https://image.tmdb.org/t/p/original" + results[i].backdrop_path;
                // var moviePoster = "https://image.tmdb.org/t/p/w440_and_h660_face" + results[i].poster_path;
                var movieId = results[i].id;
                // console.log(movieBackdrop);
                const movieMain = <MainMovie key={movieId} movieTitle={movieTitle} movieBackdrop={movieBackdrop} />
                movieMains.push(movieMain)
                i++;
            }

            for (i = 1; i < results.length; i++) {
                // console.log(results[i].name || results[i].title);
                movieTitle = results[i].name || results[i].title;
                movieBackdrop = "https://image.tmdb.org/t/p/original" + results[i].backdrop_path;
                // moviePoster = "https://image.tmdb.org/t/p/w440_and_h660_face" + results[i].poster_path;
                movieId = results[i].id;
                const movieRow = <MovieRow key={movieId} movieTitle={movieTitle} movieBackdrop={movieBackdrop} />
                trendingNowMovies.push(movieRow)
            }

            this.setState({main: movieMains})
            this.setState({trendingNow: trendingNowMovies})
          },
          error: (xhr, status, err) => {
            console.log("Failed to fetch data")
          }
        })

        $.ajax({
          url: urlString2,
          success: (searchResults) => {
            console.log("Fetched data successfully")
            // console.log(searchResults)
            const results = searchResults.results
            // console.log(results)

            var netflixOriginals = []

            results.forEach((movie) => {
              var movieTitle = movie.name || movie.title;
              // var movieBackdrop = "https://image.tmdb.org/t/p/original" + movie.backdrop_path;
              var moviePoster = "https://image.tmdb.org/t/p/w440_and_h660_face" + movie.poster_path;
              var movieId = movie.id;
              const netflixOriginal = <MovieRow key={movieId} movieTitle={movieTitle} movieBackdrop={moviePoster} />
              netflixOriginals.push(netflixOriginal)
            })
     
            this.setState({netflixOrginal: netflixOriginals})
          },
          error: (xhr, status, err) => {
            console.log("Failed to fetch data")
          }
        })

        $.ajax({
          url: urlString3,
          success: (searchResults) => {
            console.log("Fetched data successfully")
            // console.log(searchResults)
            const results = searchResults.results
            // console.log(results)

            var comedies = []

            results.forEach((movie) => {
              var movieTitle = movie.name || movie.title;
              var movieBackdrop = "https://image.tmdb.org/t/p/original" + movie.backdrop_path;
              // var moviePoster = "https://image.tmdb.org/t/p/w440_and_h660_face" + movie.poster_path;
              var movieId = movie.id;
              const comedy = <MovieRow key={movieId} movieTitle={movieTitle} movieBackdrop={movieBackdrop} />
              comedies.push(comedy)
            })
     
            this.setState({comedies: comedies})
          },
          error: (xhr, status, err) => {
            console.log("Failed to fetch data")
          }
        })

        $.ajax({
          url: urlString4,
          success: (searchResults) => {
            console.log("Fetched data successfully")
            // console.log(searchResults)
            const results = searchResults.results
            // console.log(results)

            var dramas = []

            results.forEach((movie) => {
              var movieTitle = movie.name || movie.title;
              var movieBackdrop = "https://image.tmdb.org/t/p/original" + movie.backdrop_path;
              // var moviePoster = "https://image.tmdb.org/t/p/w440_and_h660_face" + movie.poster_path;
              var movieId = movie.id;
              const drama = <MovieRow key={movieId} movieTitle={movieTitle} movieBackdrop={movieBackdrop} />
              dramas.push(drama)
            })
     
            this.setState({dramas})
          },
          error: (xhr, status, err) => {
            console.log("Failed to fetch data")
          }
        })

        $.ajax({
          url: urlString5,
          success: (searchResults) => {
            console.log("Fetched data successfully")
            // console.log(searchResults)
            const results = searchResults.results
            // console.log(results)

            var adventures = []

            results.forEach((movie) => {
              var movieTitle = movie.name || movie.title;
              var movieBackdrop = "https://image.tmdb.org/t/p/original" + movie.backdrop_path;
              // var moviePoster = "https://image.tmdb.org/t/p/w440_and_h660_face" + movie.poster_path;
              var movieId = movie.id;
              const adventure = <MovieRow key={movieId} movieTitle={movieTitle} movieBackdrop={movieBackdrop} />
              adventures.push(adventure)
            })
     
            this.setState({adventures})
          },
          error: (xhr, status, err) => {
            console.log("Failed to fetch data")
          }
        })

        $.ajax({
          url: urlString6,
          success: (searchResults) => {
            console.log("Fetched data successfully")
            // console.log(searchResults)
            const results = searchResults.results
            // console.log(results)

            var tvMovies = []

            results.forEach((movie) => {
              var movieTitle = movie.name || movie.title;
              var movieBackdrop = "https://image.tmdb.org/t/p/original" + movie.backdrop_path;
              // var moviePoster = "https://image.tmdb.org/t/p/w440_and_h660_face" + movie.poster_path;
              var movieId = movie.id;
              const tvMovie = <MovieRow key={movieId} movieTitle={movieTitle} movieBackdrop={movieBackdrop} />
              tvMovies.push(tvMovie)
            })
     
            this.setState({tvMovies})
          },
          error: (xhr, status, err) => {
            console.log("Failed to fetch data")
          }
        })

        $.ajax({
          url: urlString7,
          success: (searchResults) => {
            console.log("Fetched data successfully")
            // console.log(searchResults)
            const results = searchResults.results
            // console.log(results)

            var mysteries = []

            results.forEach((movie) => {
              var movieTitle = movie.name || movie.title;
              var movieBackdrop = "https://image.tmdb.org/t/p/original" + movie.backdrop_path;
              // var moviePoster = "https://image.tmdb.org/t/p/w440_and_h660_face" + movie.poster_path;
              var movieId = movie.id;
              const mystery = <MovieRow key={movieId} movieTitle={movieTitle} movieBackdrop={movieBackdrop} />
              mysteries.push(mystery)
            })
     
            this.setState({mysteries})
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
            <h3 className="trendingTitle">Netflix Orginals</h3>
            <div className="trendingMoviesAndTVShows">
              {this.state.netflixOrginal}
            </div>
          </section>
          <section className="trendingSection">
            <h3 className="trendingTitle">Trending Now</h3>
            <div className="trendingMoviesAndTVShows">
              {this.state.trendingNow}
            </div>
          </section>
          <section className="trendingSection">
            <h3 className="trendingTitle">Adventures</h3>
            <div className="trendingMoviesAndTVShows">
              {this.state.adventures}
            </div>
          </section>
          <section className="trendingSection">
            <h3 className="trendingTitle">Comedies</h3>
            <div className="trendingMoviesAndTVShows">
              {this.state.comedies}
            </div>
          </section>
          <section className="trendingSection">
            <h3 className="trendingTitle">Dramas</h3>
            <div className="trendingMoviesAndTVShows">
              {this.state.dramas}
            </div>
          </section>
          <section className="trendingSection">
            <h3 className="trendingTitle">Mystery</h3>
            <div className="trendingMoviesAndTVShows">
              {this.state.mysteries}
            </div>
          </section>
          <section className="trendingSection">
            <h3 className="trendingTitle">TV Movies</h3>
            <div className="trendingMoviesAndTVShows">
              {this.state.tvMovies}
            </div>
          </section>
    
        </div>
      );
      }

}