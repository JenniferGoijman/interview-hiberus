import React from 'react';
import { useHistory } from 'react-router-dom';
import './Movie.scss';
import { Rate } from 'antd';

const Movie = ({movie}) => {
    const history = useHistory();

    const showMovieDetails = movie_id => {
        history.push('/movie/'+ movie_id);
    }

    return (
        <div className="movie-container" key={movie.id} onClick={showMovieDetails.bind(this, movie.id)}>
            <span className="movie-rating">
                <span><Rate allowHalf disabled defaultValue={movie.vote_average/2}/></span>
            </span>
            <img src={"http://image.tmdb.org/t/p/w185" + movie.poster_path} />
            <div className="title">{movie.original_title}</div>
            <div className="date">{movie.release_date.slice(0, 4)}</div>
        </div>
    )
}

export default Movie;