import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(
	'pk_test_51SIKgDPFtHsCS62GoCmRJviIzM55RrKGvOAnWVEaBTJVyB6oIjft6zLXLB6iZMLPsrmMh4ClIqKGcXu3bWjeHPyY00CLQQmwSh'
);

export default stripePromise;
