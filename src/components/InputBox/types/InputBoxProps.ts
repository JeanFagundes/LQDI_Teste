import { FormDataProps } from 'pages/HomePage/components/FormComponent/types/FormDataProps';
import { ChangeEvent } from 'react';

export interface InputBoxProps {
	id: number;
	placeholder?: string;
	type: string;
	handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
	border: string;
	inputValue: string;
	formData?: FormDataProps;
	column?: {
		id: number;
		name: string;
	};
	getFormDataValue?: (
		formData: FormDataProps,
		param: string
	) => string | undefined;
}
