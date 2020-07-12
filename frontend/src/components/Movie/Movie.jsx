import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './Movie.scss';
import { Rate, Button } from 'antd';
import { getRating } from '../../redux/actions/movies';

const Movie = (props) => {
    const history = useHistory();
    const [rating, setRating] = useState(0);

    useEffect(() => {
        if (props.myUser) {
            getRating(props.movie.id)
            .then(res => 
                setRating(res.data.length>0? res.data[0].rating : null)
            )
        }       
    }, [])

    const showMovieDetails = movie_id => {
        history.push('/movie/'+ movie_id);
    }

    return (
        <div className="movie-container" key={props.movie.id} onClick={showMovieDetails.bind(this, props.movie.id)}>
            <span className="movie-rating">
                {rating !== 0 && <span><Rate allowHalf disabled defaultValue={rating}/></span>}
                {!props.myUser && <span><Rate allowHalf disabled defaultValue={props.movie.vote_average/2}/></span>}
                <Button type="primary" style={{width:'50%', marginTop:20}}>See details</Button>
            </span>
            <img src={"http://image.tmdb.org/t/p/w185" + props.movie.poster_path} />
            <div className="title">{props.movie.original_title}</div>
            <div className="date">{props.movie.release_date.slice(0, 4)}</div>
        </div>
    )
}

const mapStateToProps = ({ user }) => ({ myUser: user.myUser });
export default connect(mapStateToProps)(Movie);