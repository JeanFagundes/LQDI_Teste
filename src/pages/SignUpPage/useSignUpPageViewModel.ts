import { useCallback, useState } from 'react';
import axios from 'axios';
import { FormDataProps } from './types/SignUpPageProps';
import { useNavigate } from 'react-router-dom';

export const useSignUpPageViewModel = () => {
	const [inputValue, setInputvalue] = useState('');
	const [sucessMessage, setSucessMessage] = useState<string | null>(null);
	const [errorMessage, setErrorMessage] = useState<string | null>(null);
	const [formData, setFormData] = useState<FormDataProps>({
		email: '',
		password: '',
	});

	const navigate = useNavigate();

	const objectSignUp = [
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
		{
			id: 3,
			type: 'password',
			label: 'Confirm Password',
			column: 'confirmPassword',
		},
	];

	const formDataChange = useCallback(
		(event: React.ChangeEvent<HTMLInputElement>, id: number) => {
			const { value } = event.target;
			const findQuestion = objectSignUp.find((question) => question.id === id);
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

		const apiUrl = 'http://localhost:8000/api/register';
		axios
			.post(apiUrl, formData)
			.then((response) => {
				setErrorMessage(null);
				setSucessMessage(`Usuario criado com sucesso: ${response.data.id}`);
				console.log('id da inscrição', response.data.id);
				navigate('/login');
			})
			.catch((error) => {
				setSucessMessage(null);
				setErrorMessage(
					`Não foi possivel criar o usuario: ${error.response.data.message}`
				);
				console.error('Erro no cadastro:', error.response);
			});
	};

	console.log(formData);

	return {
		objectSignUp,
		inputValue,
		handleInputChange,
		formData,
		handleFormSubmit,
		sucessMessage,
		errorMessage,
	};
};
