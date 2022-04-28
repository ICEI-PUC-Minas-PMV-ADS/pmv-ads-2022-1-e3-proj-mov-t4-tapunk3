import API from './webapi.services';
import { BASE_URL } from './urls';

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