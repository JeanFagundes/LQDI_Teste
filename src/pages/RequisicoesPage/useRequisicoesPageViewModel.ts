import { requisicaoApi } from 'hook/api';
import { useState } from 'react';
import { UserData } from './types/RequisicoesPageProps';

export const useRequisicoesViewPageModel = () => {
	const [data, setData] = useState<UserData[] | null>(null);

	const handleSubmitRequisicao = async () => {
		try {
			const requisicao = await requisicaoApi();
			setData(requisicao);
		} catch (error) {
			console.error(error);
		}
	};

	console.log(data);

	return { handleSubmitRequisicao, data };
};
