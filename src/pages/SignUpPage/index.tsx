import { useSignUpPageViewModel } from './useSignUpPageViewModel';
import { SignUpPageView } from './views/SignUpPageView';

export const SignUpPage = () => {
	const {
		errorMessage,
		handleInputChange,
		inputValue,
		handleFormSubmit,
		objectSignUp,
	} = useSignUpPageViewModel();
	return (
		<>
			<SignUpPageView
				errorMessage={errorMessage}
				handleInputChange={handleInputChange}
				inputValue={inputValue}
				handleFormSubmit={handleFormSubmit}
				objectSignUp={objectSignUp}
			/>
		</>
	);
};
