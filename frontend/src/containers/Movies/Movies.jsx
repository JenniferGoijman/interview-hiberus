import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import './Movies.scss';
//import { Spin, Breadcrumb, Slider, InputNumber, Select } from 'antd';
import { getAll } from '../../redux/actions/movies';
//import PhoneInCatalogue from '../../components/PhoneInCatalogue/PhoneInCatalogue';

const Movies = props => {
    useEffect(() => {
        getAll()
    }, [])

    return (
        <div className="movies-container">
            {props.movies.map(movie =>
                <div className="movie-container">
                    {/* <div>{movie.overview}</div> */}
                    <img src={"http://image.tmdb.org/t/p/w185" + movie.poster_path} />
                    <div className="title">{movie.original_title}</div>
                    <div className="date">{movie.release_date.slice(0, 4)}</div>
                </div>
            )}
        </div>
    )
}

const mapStateToProps = ({movie}) => ({ movies: movie.movies });
export default connect(mapStateToProps)(Movies);
