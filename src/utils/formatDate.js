export function formatDate(date) {
	return new Date(date).toLocaleDateString('pt-BR', {
		month: 'short',
		day: '2-digit',
		hour: '2-digit',
		minute: '2-digit',
	});
}
