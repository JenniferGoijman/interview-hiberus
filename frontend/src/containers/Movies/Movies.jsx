import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import './Movies.scss'; 
import { getAll } from '../../redux/actions/movies';
import Movie from '../../components/Movie/Movie';

const Movies = props => {
    useEffect(() => {
        getAll()
    }, [])

    return (
        <div className="movies-container">
            {props.movies.map(movie =>
                <Movie movie={movie} />
            )}
        </div>
    )
}

const mapStateToProps = ({movie}) => ({ movies: movie.movies });
export default connect(mapStateToProps)(Movies);
