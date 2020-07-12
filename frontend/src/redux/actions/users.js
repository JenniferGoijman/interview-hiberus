import store from '../store';
import axios from 'axios';

export const register = async(user) => {
    return axios.post('https://acme-enterprises.herokuapp.com/users/register', user)
}
export const login = async(user) => {
    const res = await axios.post('https://acme-enterprises.herokuapp.com/users/login', user);
    store.dispatch({
        type: 'LOGIN',
        payload: res.data.user
    })
    localStorage.setItem('authToken', res.data.token);
    return res;
}
export const getMyUser = async() => {
    const res = await axios.get('https://acme-enterprises.herokuapp.com/users/user', {
        headers: {
            Authorization: localStorage.getItem('authToken')
        }
    });
    store.dispatch({
        type: 'SET_MY_USER',
        payload: res.data
    });
}
export const logout = async() => {
    const res = await axios.get('https://acme-enterprises.herokuapp.com/users/logout', {
        headers: {
            Authorization: localStorage.getItem('authToken')
        }
    })
    localStorage.removeItem('authToken');
    store.dispatch({
        type: 'LOGOUT'
    })
    return res;
}