import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Spin } from 'antd';

import { getAll } from '../../redux/actions/genres';
import Movie from '../../components/Movie/Movie';
import NotFound from '../../components/NotFound/NotFound';

const Genre = props => {
    const [currentGenre, setCurrentGenre] = useState(null);
    const [notFound, setNotFound] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getAll()
        .then(res => {
            const genre = res?.find(p => p.id == props.match.params.id);
            if (genre) {
                setCurrentGenre(genre)
            } else {
                setNotFound(true)
            }
            setLoading(false);
        });
    }, [props.match.params])

    return (
        <div className="movies-container">
            {notFound && <NotFound />} 

            {loading && <Spin size="large" />}

            {currentGenre && 
                props.movies?.filter(movie => movie.genre_ids.includes(currentGenre?.id)).map(movie =>
                    <Movie movie={movie} />
                )
            }
        </div>
    )
}

const mapStateToProps = ({movie}) => ({ movies: movie.movies });
export default connect(mapStateToProps)(Genre);