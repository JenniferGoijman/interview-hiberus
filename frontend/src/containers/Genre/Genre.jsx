import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getAll } from '../../redux/actions/genres';
import Movie from '../../components/Movie/Movie';

const Genre = props => {
    //const history = useHistory();
    const [currentGenre, setCurrentGenre] = useState(undefined);
    //const [notFound, setNotFound] = useState(false);
    //const [loading, setLoading] = useState(true);

    useEffect(() => {
        getAll()
        .then(res => {
            const genre = res?.find(p => p.id == props.match.params.id);
            if (genre) {
                setCurrentGenre(genre)
            } else {
                //setNotFound(true)
            }
            //setLoading(false);
        });

        return () => {
            setCurrentGenre(undefined);
        }
    }, [])

    return (
        <div className="movies-container">
            {props.movies?.filter(movie => movie.genre_ids.includes(currentGenre?.id)).map(movie =>
                <Movie movie={movie} />
            )}
        </div>
    )
}


const mapStateToProps = ({movie}) => ({ movies: movie.movies });
export default connect(mapStateToProps)(Genre);