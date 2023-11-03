export interface FormDataProps {
	email: string;
	password: string;
}

interface objectLogin {
	id: number;
	label: string;
	type: string;
	column: string;
}

export interface LoginPageProps {
	// sucessMessage: string | null;
	errorMessage: string | null;
	inputValue: string;
	handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	handleFormSubmit: (e: React.FormEvent) => void;
	// formData: FormDataProps;
	objectLogin: objectLogin[];
}
