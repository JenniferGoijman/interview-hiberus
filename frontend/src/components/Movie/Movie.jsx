import React, { useState } from 'react';
import './Movie.scss';
import { Rate } from 'antd';

const Movie = ({movie}) => {
    const [rating, setRating] = useState(movie.vote_average/2);

    const handleRatingChange = value => {
        setRating(value);
    };

    return (
        <div className="movie-container" key={movie.id}>
            <span className="movie-rating">
                <span><Rate allowHalf value={rating} onChange={handleRatingChange}/></span>
            </span>
            <img src={"http://image.tmdb.org/t/p/w185" + movie.poster_path} />
            <div className="title">{movie.original_title}</div>
            <div className="date">{movie.release_date.slice(0, 4)}</div>
        </div>
    )
}

export default Movie;