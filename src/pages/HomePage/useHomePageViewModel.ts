import ArticleRectangle113 from 'assets/ArticleRectangle113.svg';
import ArticleRectangle114 from 'assets/ArticleRectangle114.svg';
import facebookIcon from 'assets/facebookIcon.svg';
import instagramIcon from 'assets/instagramIcon.svg';
import linkedinIcon from 'assets/linkedinIcon.svg';
import { useCallback, useEffect, useState } from 'react';
import { FormDataProps } from './components/FormComponent/types/FormDataProps';
import { requisicaoApi } from 'hook/api';
import axios from 'axios';

export const useHomePageViewModel = () => {
	const [inputValue, setInputvalue] = useState('');
	const [sucessMessage, setSucessMessage] = useState<string | null>(null);
	const [errorMessage, setErrorMessage] = useState<string | null>(null);

	const savedData = localStorage?.getItem('formData');
	let initialState;
	if (savedData) {
		// Se existem dados válidos no localStorage, analise-os
		initialState = JSON.parse(savedData);
	} else {
		// Se não há dados válidos, inicialize com valores padrão
		initialState = { name: '', email: '', subject: '', message: '' };
	}
	const [formData, setFormData] = useState<FormDataProps>(initialState);

	const objectArticle = [
		{
			img: ArticleRectangle113,
			title: 'Por que é importante ter um site de qualidade?',
			subTitle:
				'Um site de qualidade passou a ser um dos meios de exposição de marca mais eficientes no ambiente online. Ele funciona como uma espécie de cartão...',
		},
		{
			img: ArticleRectangle114,
			title: '6 dicas para trabalhar com marketing digital com verba limitada',
			subTitle:
				'Um site de qualidade passou a ser um dos meios de exposição de marca mais eficientes no ambiente online. Ele funciona como uma espécie de cartão...',
		},
	];

	const objectSocialMidiaIcon = [
		{
			img: facebookIcon,
			alt: 'facebook icon',
		},
		{
			img: instagramIcon,
			alt: 'instagram icon',
		},
		{
			img: linkedinIcon,
			alt: 'linkedin icon',
		},
	];

	const objectForm = [
		{
			id: 1,
			label: 'Seu nome(requerido)',
			type: 'text',
			column: { id: 1, name: 'name' },
		},
		{
			id: 2,
			label: 'Seu E-mail(requerido)',
			type: 'text',
			column: { id: 2, name: 'email' },
		},
		{
			id: 3,
			label: 'Assunto',
			type: 'text',
			column: { id: 3, name: 'subject' },
		},
		{
			id: 4,
			label: 'Mensagem',
			type: 'textArea',
			column: { id: 4, name: 'message' },
		},
		{
			id: 5,
			label: 'Anexe um documento explicando seu projeto',
			type: 'file',
			column: { id: 5, name: 'file' },
		},
	];

	useEffect(() => {
		localStorage.setItem('formData', JSON.stringify(formData));
	}, [formData]);

	const formDataChange = useCallback(
		(
			event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
			id: number
		) => {
			const { value } = event.target;
			const findQuestion = objectForm.find((question) => question.id === id);
			if (findQuestion) {
				setFormData((prevFormData) => ({
					...prevFormData,
					[findQuestion.column.name]: value,
				}));
			}
		},
		[formData]
	);

	const getFormDataValue = useCallback(
		(formData: FormDataProps, column: string): string | undefined => {
			switch (column) {
				case 'name':
					return formData.name;
				case 'email':
					return formData.email;
				case 'subject':
					return formData.subject;
				default:
					return undefined;
			}
		},
		[formData]
	);

	const handleInputChange = useCallback(
		(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
			const value = event.target.value;
			setInputvalue(value);
			formDataChange(event, Number(event.target.id));
		},
		[setInputvalue, formDataChange]
	);

	const handleSendEmail = (id: number) => {
		const apiUrl = `http://localhost:8000/api/sendEmail/${id}`;

		axios
			.post(apiUrl)
			.then((response) => {
				console.log(response.data);
			})
			.catch((error) => {
				console.error(error);
			});
	};

	const handleFormSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		const apiUrl = 'http://localhost:8000/api/users'; // Substitua pela URL da sua API
		axios
			.post(apiUrl, formData)
			.then((response) => {
				setErrorMessage(null);
				setSucessMessage(
					`Formulario enviado com sucesso, id da inscrição: ${response.data.id}`
				);
				console.log('id da inscrição', response.data.id);

				handleSendEmail(response.data.id);
				localStorage.clear();
			})
			.catch((error) => {
				setSucessMessage(null);
				setErrorMessage(
					`Não foi possível enviar o formulario: ${error.response.data.message}`
				);
				console.error('Erro no cadastro:', error.response);
			});
	};
	return {
		objectArticle,
		objectSocialMidiaIcon,
		objectForm,
		handleInputChange,
		inputValue,
		formData,
		getFormDataValue,
		handleFormSubmit,
		sucessMessage,
		errorMessage,
	};
};
