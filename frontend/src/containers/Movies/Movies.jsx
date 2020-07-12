import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Spin } from 'antd';
import './Movies.scss'; 

import { getAll } from '../../redux/actions/movies';
import Movie from '../../components/Movie/Movie';

const Movies = props => {
    const [ movies, setMovies] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getAll()
        .then(res => {
            const query = props.match.params.query;
            if (query) {
                setMovies(res.data.filter(movie => movie.original_title.toLowerCase().includes(query)));
            } 

            const sortby = props.match.params.by;
            if (sortby==='az') {
                setMovies(res.data.sort((a, b) => a.original_title.localeCompare(b.original_title)));
            }
            if (sortby==='za') {
                setMovies(res.data.sort((a, b) => a.original_title.localeCompare(b.original_title)).reverse());
            }
            
            if (!query && !sortby) {
                setMovies(res?.data);
            }
            setLoading(false);
        })
    }, [props.match.params])

    return (
        <div className="movies-container">

            {loading && <div className="spin">
                <Spin size="large" />
            </div>}

            {movies?.map(movie =>
                <Movie movie={movie} />
            )
            }
        </div>
    )
}

const mapStateToProps = ({movie}) => ({ movies: movie.movies });
export default connect(mapStateToProps)(Movies);
