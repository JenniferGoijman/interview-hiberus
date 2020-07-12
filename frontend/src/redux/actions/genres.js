import store from '../store';
import axios from 'axios';

export const getAll = async() => {
    try {
        const res = await axios.get('https://acme-enterprises.herokuapp.com/genres');
        store.dispatch({
            type: 'GET_ALL_GENRES',
            payload: res.data
        })
        return res;
    } catch (error) {
        console.error(error)
    }
}