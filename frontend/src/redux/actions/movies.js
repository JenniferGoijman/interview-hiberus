import store from '../store';
import axios from 'axios';

export const getAll = async() => {
    try {
        const res = await axios.get('https://acme-enterprises.herokuapp.com/movies');
        store.dispatch({
            type: 'GET_ALL_MOVIES',
            payload: res.data
        })
        return res;
    } catch (error) {
        console.error(error)
    }
}
export const getRating = async(movie_id) => {
    try {
        return await axios.get('https://acme-enterprises.herokuapp.com/movieratings/' + movie_id, {
            headers: {
                Authorization: localStorage.getItem('authToken')
            }
        });
    } catch (error) {
        console.error(error)
    }
}
export const insertRating = async(movierating) => {
    try {
        return await axios.post('https://acme-enterprises.herokuapp.com/movieratings/', movierating, {
            headers: {
                Authorization: localStorage.getItem('authToken')
            }
        });
    } catch (error) {
        console.error(error)
    }
}
export const updateRating = async(id, movierating) => {
    try {
        return await axios.put('https://acme-enterprises.herokuapp.com/movieratings/' + id, movierating, {
            headers: {
                Authorization: localStorage.getItem('authToken')
            }
        });
    } catch (error) {
        console.error(error)
    }
}