import axios from 'axios';

export const requisicaoApi = async () => {
	const apiUrl = 'http://localhost:8000/api/users'; // Substitua pela URL da sua API
	try {
		const response = await axios.get(apiUrl);
		const data = response.data;
		return data;
	} catch (error) {
		console.error('Erro na solicitação:', error);
		throw error; // Lança o erro para ser tratado posteriormente, se necessário
	}
};
