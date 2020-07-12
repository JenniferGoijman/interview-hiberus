import store from '../store';
import axios from 'axios';

export const getAll = async() => {
    try {
        const res = await axios.get('http://localhost:3001/movies');
        store.dispatch({
            type: 'GET_ALL_MOVIES',
            payload: res.data
        })
        return res;
    } catch (error) {
        console.error(error)
    }
}
export const insertRating = async(movierating) => {
    try {
        return await axios.post('http://localhost:3001/movieratings/', movierating, {
            headers: {
                Authorization: localStorage.getItem('authToken')
            }
        });
    } catch (error) {
        console.error(error)
    }
}
export const getRating = async(movie_id) => {
    try {
        return await axios.get('http://localhost:3001/movieratings/' + movie_id, {
            headers: {
                Authorization: localStorage.getItem('authToken')
            }
        });
    } catch (error) {
        console.error(error)
    }
}