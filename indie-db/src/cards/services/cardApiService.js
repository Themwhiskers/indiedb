import axios from 'axios';
import '../../hooks/useAxios';

const apiUrl = import.meta.env.REACT_APP_API_URL || 'http://localhost:8181';

export const getCards = async () => {
    try {
        const { data } = await axios.get(`${apiUrl}/cards`);
        return data;
    } catch (error) {
        return Promise.reject(error.message);
    }
}