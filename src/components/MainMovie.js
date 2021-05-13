import React from 'react';
import './mainmovie.css';
import { GrPlayFill } from "react-icons/gr";
import { AiOutlineInfoCircle } from "react-icons/ai";

class MainMovie extends React.Component {
    render() {
        return (
          <div className="imageContainer">
            <img src={this.props.movieBackdrop} alt="Movie or TV Show Back Drop" className="mainMovie" />
            <div className="movieTitle"><h1>{this.props.movieTitle}</h1></div>
            <div className="buttonMain">
              <button className="btn btn-light playButton" type="button"><GrPlayFill className="playIcon" /><span className="playText"> Play</span></button>
              <button className="btn btn-light moreInfoButton" type="button"><AiOutlineInfoCircle className="infoIcon" /><span className="infoText"> More Info</span></button>
            </div>
          </div>
        )
    }
}

export default MainMovie