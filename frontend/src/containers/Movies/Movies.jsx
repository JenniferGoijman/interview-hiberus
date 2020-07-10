import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import './Movies.scss'; 
import { getAll } from '../../redux/actions/movies';
import Movie from '../../components/Movie/Movie';

const Movies = props => {
    const [ movies, setMovies] = useState();

    useEffect(() => {
        getAll()
        .then(res => {
            const query = props.match.params.query;
            if (query) {
                setMovies(res.filter(movie => movie.original_title.toLowerCase().includes(query)));
            } else {
                setMovies(res);
            }
        })
    }, [props.match.params.query])

    return (
        <div className="movies-container">
            {movies?.map(movie =>
                    <Movie movie={movie} />
                )
            }
        </div>
    )
}

const mapStateToProps = ({movie}) => ({ movies: movie.movies });
export default connect(mapStateToProps)(Movies);
