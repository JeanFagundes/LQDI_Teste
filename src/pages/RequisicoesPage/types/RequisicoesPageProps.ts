export interface UserData {
	id: number;
	name: string;
	email: string;
	subject?: string;
	message?: string;
}

export interface requisicoesPageProps {
	data: UserData[] | null;
	handleSubmitRequisicao: () => void;
}
