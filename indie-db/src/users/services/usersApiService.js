import axios from 'axios';

const apiUrl = import.meta.env.REACT_APP_API_URL || 'http://localhost:8181';

export const login = async user => {
    try {
        const { data } = await axios.post(`${apiUrl}/users/login`, user);
        return data;
    } catch (error) {
        return Promise.reject(error.message);
    }
};

export const signup = async normalizeUser => {
    try {
        const { data } = await axios.post(`${apiUrl}/users`, normalizeUser);
        return data;
    } catch (error) {
        return Promise.reject(error.message);
    }
};