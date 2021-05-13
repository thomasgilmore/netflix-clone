import React from 'react';
import './mainmovie.css';

class MainMovie extends React.Component {
    render() {
        return (
          <div className="imageContainer">
            <img src={this.props.movieBackdrop} alt="Movie or TV Show Back Drop Picture" className="mainMovie" />
            <div className="movieTitle"><h1>{this.props.movieTitle}</h1></div>
            <div className="buttonMain">
              <button className="btn btn-light playButton" type="button">Play</button>
              <button className="btn btn-light moreInfoButton" type="button">More Info</button>
            </div>
          </div>
        )
    }
}

export default MainMovie