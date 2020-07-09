import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import './Movies.scss';
//import { Spin, Breadcrumb, Slider, InputNumber, Select } from 'antd';
import { getAll } from '../../redux/actions/movies';
//import PhoneInCatalogue from '../../components/PhoneInCatalogue/PhoneInCatalogue';
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
