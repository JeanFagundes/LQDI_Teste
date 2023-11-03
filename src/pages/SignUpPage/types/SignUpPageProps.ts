export interface FormDataProps {
	email: string;
	password: string;
}

interface objectSignUp {
	id: number;
	label: string;
	type: string;
	column: string;
}
// 4722
export interface SignUpPageProps {
	errorMessage: string | null;
	inputValue: string;
	handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	handleFormSubmit: (e: React.FormEvent) => void;
	objectSignUp: objectSignUp[];
}
