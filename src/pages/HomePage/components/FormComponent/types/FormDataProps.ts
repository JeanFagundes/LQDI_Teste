export interface FormDataProps {
	name: string;
	email: string;
	subject?: string;
	message?: string;
	file?: File | null;
}
