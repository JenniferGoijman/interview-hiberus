import React from 'react';
import './Movie.scss';

const Movie = ({movie}) => {
    return (
        <div className="movie-container">
            <img src={"http://image.tmdb.org/t/p/w185" + movie.poster_path} />
            <div className="title">{movie.original_title}</div>
            <div className="date">{movie.release_date.slice(0, 4)}</div>
        </div>
    )
}

export default Movie;