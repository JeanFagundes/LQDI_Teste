import { FormDataProps } from './FormDataProps';

export interface FormComponentProps {
	id: number;
	label: string;
	type: string;
	column: { id: number; name: string };
}

export interface ObjectForm {
	objectForm: FormComponentProps[];
	handleInputChange: (
		event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => void;
	inputValue: string;
	formData: FormDataProps;
	getFormDataValue?: (
		formData: FormDataProps,
		param: string
	) => string | undefined;
	handleFormSubmit: (e: React.FormEvent) => void;
	sucessMessage: string | null;
	errorMessage: string | null;
}
