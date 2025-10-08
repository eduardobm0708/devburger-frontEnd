import axios from 'axios';

export const api = axios.create({
	baseURL: 'http://localhost:3001',
});

api.interceptors.request.use(config => {
	const UserData = localStorage.getItem('devburger:userData');

	const token = UserData && JSON.parse(UserData).token;
	if (token) {
		config.headers.authorization = `Bearer ${token}`;
	}
	return config;
});
