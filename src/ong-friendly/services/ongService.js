import API from './web_api';
import { BASE_URL } from './url';

export const getOng = async () => {
    return await API.get(`${BASE_URL}/ong`)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.log(error);
            return null;
        });
}

export const insertOng = async (param) => {
    return await API.post(`${BASE_URL}/ong`, param)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.log(error);
            return null;
        });
}

export const updateOng = async (param) => {
    return await API.put(`${BASE_URL}/ong/${param.id}`, param)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.log(error);
            return null;
        });
}

export const deleteOng = async (id) => {
    return await API.delete(`${BASE_URL}/ong/${id}`)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.log(error);
            return null;
        });
}