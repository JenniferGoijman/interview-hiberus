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