import { ObjectArticleProps } from '../components/ArticlesComponent/types/ObjectArticleProps';
import { FormComponentProps } from '../components/FormComponent/types/FormComponentProps';
import { FormDataProps } from '../components/FormComponent/types/FormDataProps';
import { SocialMidiaComponentProps } from '../components/SocialMidiaComponent/types/SocialMidiaComponentProps';

export interface HomePageProps {
	objectArticle: ObjectArticleProps[];
	objectSocialMidiaIcon: SocialMidiaComponentProps[];
	objectForm: FormComponentProps[];
	handleInputChange: (
		event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => void;
	inputValue: string;
	formData: FormDataProps;
	getFormDataValue: (
		formData: FormDataProps,
		param: string
	) => string | undefined;
	handleFormSubmit: (e: React.FormEvent) => void;
	sucessMessage: string | null;
	errorMessage: string | null;
}
