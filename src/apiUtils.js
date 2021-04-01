import request from 'superagent';

const URL = 'https://rocky-refuge-35369.herokuapp.com';

export async function fetchChars() {
    const data = await request.get(`${URL}/characters`);
    return data;
}

export async function fetchSpecies() {
    const data = await request.get(`${URL}/species`);
    return data;
}

export async function fetchSingleChar(name) {
    const data = await request.get(`${URL}/characters/${name}`);
    return data;
}

export async function addNewChar(newChar) {
    const data = await request.post(`${URL}/characters/`)
        .send(newChar);
    return data;
}

export async function deleteChar(name) {
    const data = await request.delete(`${URL}/characters/${name}`);
    return data;
}

export async function updateChar(id, updatedChar) {
    const data = await request.put(`${URL}/characters/${id}`)
        .send(updatedChar);
    return data;
}

export function speciesTypetoId(type) {
    if (type === 'human') {
        return '1';
    } else if (type === 'animal') {
        return '2';
    } else if (type === 'talking animal') {
        return '3';
    } else return '4';
}