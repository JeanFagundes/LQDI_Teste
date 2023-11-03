import { InputBoxProps } from './types/InputBoxProps';
import { InputBoxView } from './views/InputBoxView';

export const InputBox = ({
	placeholder,
	type,
	handleInputChange,
	id,
	border,
	inputValue,
	formData,
	column,
	getFormDataValue,
}: InputBoxProps) => {
	return (
		<InputBoxView
			border={border}
			id={id}
			placeholder={placeholder}
			type={type}
			inputValue={inputValue}
			handleInputChange={handleInputChange}
			formData={formData}
			column={column}
			getFormDataValue={getFormDataValue}
		/>
	);
};
