import axios from 'axios';

export const BASE_URL = 'https://localhost:7262/';

export const ENDPOINTS = {
    participant: 'participant',
    question:'Quetion',
    getAnswers : 'Quetion/GetAnswers',
    getCloth: 'Quetion/GetCloth',
    getFood: 'Quetion/GetFood',
    getSport: 'Quetion/GetSport'
}

export const createAPIEndpoint = endpoint => {

    let url = BASE_URL + 'api/' + endpoint + '/';
    return {
        fetch: () => axios.get(url),
        fetchById: id => axios.get(url + id),
        post: newRecord => axios.post(url, newRecord),
        put: (id, updatedRecord) => axios.put(url + id, updatedRecord),
        delete: id => axios.delete(url + id),
    }
}