import { useCallback, useState } from 'react';
import { FormDataProps } from './types/LoginPageProps';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const useLoginPageViewModel = () => {
	const [inputValue, setInputvalue] = useState('');
	const [errorMessage, setErrorMessage] = useState<string | null>(null);
	const [sucessMessage, setSucessMessage] = useState<string | null>(null);
	const [formData, setFormData] = useState<FormDataProps>({
		email: '',
		password: '',
	});

	const navigate = useNavigate();

	const objectLogin = [
		{
			id: 1,
			type: 'text',
			label: 'Email',
			column: 'email',
		},
		{
			id: 2,
			type: 'password',
			label: 'Password',
			column: 'password',
		},
	];

	const formDataChange = useCallback(
		(event: React.ChangeEvent<HTMLInputElement>, id: number) => {
			const { value } = event.target;
			const findQuestion = objectLogin.find((question) => question.id === id);
			if (findQuestion) {
				setFormData((prevFormData) => ({
					...prevFormData,
					[findQuestion.column]: value,
				}));
			}
		},
		[formData]
	);

	const handleInputChange = useCallback(
		(event: React.ChangeEvent<HTMLInputElement>) => {
			const value = event.target.value;
			setInputvalue(value);
			formDataChange(event, Number(event.target.id));
		},
		[setInputvalue]
	);

	const handleFormSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		const apiUrl = 'http://localhost:8000/api/login';
		axios
			.post(apiUrl, formData)
			.then((response) => {
				setErrorMessage(null);
				setSucessMessage(`Usuario logado com sucesso: ${response.data.id}`);
				console.log('usuario logado com sucesso com id: ', response.data.id);
				navigate('/requisicoes');
			})
			.catch((error) => {
				setSucessMessage(null);
				setErrorMessage(
					`Não foi possivel autenticar o usuario: ${error.response.data.message}`
				);
				console.error('Erro no cadastro:', error.response);
			});
	};

	return {
		objectLogin,
		inputValue,
		errorMessage,
		handleInputChange,
		handleFormSubmit,
	};
};
