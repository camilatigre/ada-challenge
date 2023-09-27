import axios from 'axios';
import { LoginCredentials } from '../types';

axios.defaults.baseURL = 'http://0.0.0.0:5000';

export async function login(credentials: LoginCredentials) {
    const response = await axios.post('/login', credentials);

    return response.data;
}