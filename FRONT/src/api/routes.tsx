import axios from 'axios';
import { CardUnitProps, LoginCredentials } from '../types';

axios.defaults.baseURL = 'http://0.0.0.0:5000';


async function login(credentials: LoginCredentials) {
    const response = await axios.post('/login', credentials);

    return response.data;
}

async function getCards({ token }: { token: string }) {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };
    const response = await axios.get('/cards', config);

    return response.data;
}

async function createCard({
    token,
    params
}: {
    token: string,
    params: CardUnitProps
}) {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        data: {
            titulo: params.titulo,
            conteudo: params.conteudo,
            lista: params.lista
        }

    };
    const response = await axios.post('/cards', config);

    return response.data;
}

async function updateCard({
    token,
    params
}: {
    token: string,
    params: CardUnitProps
}) {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        data: {
            id: params.id,
            titulo: params.titulo,
            conteudo: params.conteudo,
            lista: params.lista
        }

    };
    const response = await axios.put(`/cards/${params.id}`, config);

    return response.data;
}

async function deleteCard({
    token,
    params
}: {
    token: string,
    params: CardUnitProps
}) {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },

    };
    const response = await axios.delete(`/cards/${params.id}`, config);

    return response.data;
}

export {
    login,
    getCards,
    createCard,
    updateCard,
    deleteCard,
}