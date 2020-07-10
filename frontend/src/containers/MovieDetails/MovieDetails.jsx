import React, { useEffect, useState } from 'react';
import { Spin, Rate } from 'antd';
import './MovieDetails.scss';

import { getAll } from '../../redux/actions/movies';
import NotFound from '../../components/NotFound/NotFound';

const MovieDetails = props => {
    const [currentMovie, setCurrentMovie] = useState();
    const [notFound, setNotFound] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getAll()
        .then(res => {
            const movie = res?.find(m => m.id == props.match.params.id);
            if (movie) {
                setCurrentMovie(movie)
            } else {
                setNotFound(true)
            }
            setLoading(false);
        });
    }, [])

    return (
        <div className="movie-details-container">
            {notFound && <NotFound />}
            
            {loading && <Spin size="large" />}

            {currentMovie && 
                <div className="movie-details">
                    <div>
                        <img src={"http://image.tmdb.org/t/p/w300" + currentMovie.poster_path} />
                    </div>
                    <div className="info">
                        <div className="title">{currentMovie.original_title}</div>
                        <div className="epigraph">
                            <div className="date">{currentMovie.release_date.slice(0, 4)}</div>
                            <div> • </div>
                            {/* {currentMovie.release_date} DURACION?*/}
                            {/* {currentMovie.release_date} GENEROS?*/}
                            <Rate allowHalf disabled value={currentMovie.vote_average/2}/>
                            
                        </div>                
                        <div className="overview">{currentMovie.overview}</div>
                    </div>
                </div>
            }
            
            {/* poster_path: "/bTL9PlNlcX8kZZNLym80zpWucU4.jpg",
            backdrop_path: "/m11Mej9vbQqcXWgYrgPboCJ9NUh.jpg",
            genre_ids: [ 12, 18, 10752 ] */}


        </div>
    )
}

export default MovieDetails;