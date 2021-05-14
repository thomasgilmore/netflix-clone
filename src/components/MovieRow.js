import React from 'react';
import './movierow.css'

class MovieRow extends React.Component {
    render() {
        return (
            <img src={this.props.moviePoster} alt="Movie or TV Show Poster" className="movieOrTVShowPoster" />
        )
    }
}

export default MovieRow