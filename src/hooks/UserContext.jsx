import { createContext, useContext, useState, useEffect } from 'react';

const UserContext = createContext({});

export const UserProvider = ({ children }) => {
	const [userInfo, setUserInfo] = useState({ id: 1, name: 'Eduardo' });

	const putUserData = userInfo => {
		setUserInfo(userInfo);

		localStorage.setItem('devburger:userData', JSON.stringify(userInfo));
	};

	const logout = () => {
		setUserInfo(null);
		localStorage.removeItem('devburger:userData');
	};

	useEffect(() => {
		const userInfoLocalStorage = localStorage.getItem('devburger:userData');

		if (userInfoLocalStorage) {
			setUserInfo(JSON.parse(userInfoLocalStorage));
		}
	}, []);

	return (
		<UserContext.Provider value={{ userInfo, putUserData, logout }}>
			{children}
		</UserContext.Provider>
	);
};

export const useUser = () => {
	const context = useContext(UserContext);

	if (!context) {
		throw new Error('useUser must be used within a UserProvider');
	}

	return context;
};
