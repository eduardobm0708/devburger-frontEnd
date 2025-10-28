import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import GlobalStyle from './styles/globalstyles';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import AppProvider from './hooks';
import { Elements } from '@stripe/react-stripe-js';
import stripePromise from './config/stripeConfig';
import { standardTheme } from './styles/themes/standard';
import { Router } from './routes';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<ThemeProvider theme={standardTheme}>
			<AppProvider>
				<Elements stripe={stripePromise}>
					<BrowserRouter>
						<Router />
					</BrowserRouter>
				</Elements>
				<GlobalStyle />
				<ToastContainer autoClose={2000} theme="light" />
			</AppProvider>
		</ThemeProvider>
	</StrictMode>
);
