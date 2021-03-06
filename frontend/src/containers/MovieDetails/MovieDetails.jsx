import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Spin, Rate } from 'antd';
import './MovieDetails.scss';

import { getAll, getRating, insertRating, updateRating } from '../../redux/actions/movies';
import NotFound from '../../components/NotFound/NotFound';

const MovieDetails = props => {
    const [currentMovie, setCurrentMovie] = useState();
    const [notFound, setNotFound] = useState(false);
    const [loading, setLoading] = useState(true);
    const [rating, setRating] = useState();

    useEffect(() => {
        getAll()
        .then(res => {
            const movie = res.data?.find(m => m.id == props.match.params.id);
            if (movie) {
                setCurrentMovie(movie);
                if (props.myUser) {
                    getRating(movie.id)
                    .then(res => setRating(res.data.length>0? res.data[0].rating : null))
                }
            } else {
                setNotFound(true)
            }
            setLoading(false);
        });
    }, [])

    const handleRatingChange = value => {
        const movierating = {
            MovieId: currentMovie.id,
            rating: value
        }
        getRating(currentMovie.id)
        .then(res => {
            const currentRating = res.data;
            if (currentRating.length > 0) {
                console.log(currentRating[0].id)
                console.log("update")
                updateRating(currentRating[0].id, movierating);
            } else {
                console.log("insert")
                insertRating(movierating);
         }   }
        )
        
        
        
        setRating(value);
    };

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
                            <div>
                                {currentMovie.Categories.map((genre, i) =>
                                    <span>{genre.name}{currentMovie.Categories.length-1>i?', ':''}</span>
                                )}
                            </div>
                            <div> • </div>
                            {props.myUser &&  <Rate allowHalf value={rating} onChange={handleRatingChange}/>}
                            {!props.myUser &&  <Rate allowHalf disabled value={currentMovie.vote_average/2} />}

                            <div>Vote average: {currentMovie.vote_average}</div>
                        </div>                
                        <div className="overview">{currentMovie.overview}</div>
                    </div>
                </div>
            }
            
            {/* backdrop_path: "/m11Mej9vbQqcXWgYrgPboCJ9NUh.jpg",*/}


        </div>
    )
}


const mapStateToProps = ({user}) => ({ myUser: user.myUser });
export default connect(mapStateToProps)(MovieDetails);