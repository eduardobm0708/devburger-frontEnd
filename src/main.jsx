import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import GlobalStyle from './styles/globalstyles';
import { ToastContainer } from 'react-toastify';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<RouterProvider router={router} />
		<GlobalStyle />
		<ToastContainer autoClose={2000} theme="light" />
	</StrictMode>
);
