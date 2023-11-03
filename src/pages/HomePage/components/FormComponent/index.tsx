import { ObjectForm } from './types/FormComponentProps';
import { FormComponentView } from './views/FormComponentView';

export const FormComponent = ({
	objectForm,
	handleInputChange,
	inputValue,
	formData,
	getFormDataValue,
	handleFormSubmit,
	sucessMessage,
	errorMessage,
}: ObjectForm) => {
	return (
		<FormComponentView
			objectForm={objectForm}
			handleInputChange={handleInputChange}
			inputValue={inputValue}
			formData={formData}
			getFormDataValue={getFormDataValue}
			handleFormSubmit={handleFormSubmit}
			sucessMessage={sucessMessage}
			errorMessage={errorMessage}
		/>
	);
};
