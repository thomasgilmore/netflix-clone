import React from 'react';
import './mainmovie.css';

class MainMovie extends React.Component {
    render() {
        return (
          <div className="imageContainer">
            <img src={this.props.movieBackdrop} alt="Movie or TV Show Back Drop Picture" className="mainMovie" />
          </div>
        )
    }
}

export default MainMovie