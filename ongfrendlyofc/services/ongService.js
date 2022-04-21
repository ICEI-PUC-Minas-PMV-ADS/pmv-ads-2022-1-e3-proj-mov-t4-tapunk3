import API from './webapi.services';
import { BASE_URL } from './urls';

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
    return await API.post(`${BASE_URL}/660/ong`, param)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.log(error);
            return null;
        });
}

export const updateOng = async (param) => {
    return await API.put(`${BASE_URL}/660/ong/${param.id}`, param)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.log(error);
            return null;
        });
}

export const deleteOng = async (id) => {
    return await API.delete(`${BASE_URL}/660/ong/${id}`)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.log(error);
            return null;
        });
}