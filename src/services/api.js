import axios from 'axios';

export const api = axios.create({
	baseURL: 'http://localhost:3001',
});

api.interceptors.request.use(config => {
	const token = localStorage.getItem('@devburger:token');
	config.headers.authorization = `Bearer ${token}`;
	return config;
});
