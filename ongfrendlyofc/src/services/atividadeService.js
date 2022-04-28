import API from './webapi.services';
import { BASE_URL } from './urls';

export const getAtividades = async () => {
    return await API.get(`${BASE_URL}/atividades`)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.log(error);
            return null;
        });
}

export const insertAtividades = async (param) => {
    return await API.post(`${BASE_URL}/660/atividades`, param)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.log(error);
            return null;
        });
}

export const updateAtividades = async (param) => {
    return await API.put(`${BASE_URL}/660/atividades/${param.id}`, param)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.log(error);
            return null;
        });
}

export const deleteAtividades = async (id) => {
    return await API.delete(`${BASE_URL}/660/atividades/${id}`)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.log(error);
            return null;
        });
}