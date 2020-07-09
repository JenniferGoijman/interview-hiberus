import React from 'react';
import './Movie.scss';
import { Rate } from 'antd';

const Movie = ({movie}) => {
    return (
        <div className="movie-container">
            <span class="movie-rating">
                <span><Rate allowHalf defaultValue={movie.vote_average/2} /></span>
            </span>
            <img src={"http://image.tmdb.org/t/p/w185" + movie.poster_path} />
            <div className="title">{movie.original_title}</div>
            <div className="date">{movie.release_date.slice(0, 4)}</div>
        </div>
    )
}

export default Movie;