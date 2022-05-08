import API from './web_api';
import { BASE_URL } from './url';

export const register = async (param) => {

    return await API.post(`${BASE_URL}/register`, param)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.log(error);
            return null;
        });
}

export const login = async (param) => {

    return await API.post(`${BASE_URL}/login`, param)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.log(error);
            return null;
        });
}