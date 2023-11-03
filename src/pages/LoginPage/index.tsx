import { useLoginPageViewModel } from './useLoginPageViewModel';
import { LoginPageView } from './views/LoginPageView';

export const LoginPage = () => {
	const {
		errorMessage,
		handleFormSubmit,
		handleInputChange,
		inputValue,
		objectLogin,
	} = useLoginPageViewModel();
	return (
		<LoginPageView
			errorMessage={errorMessage}
			handleFormSubmit={handleFormSubmit}
			handleInputChange={handleInputChange}
			inputValue={inputValue}
			objectLogin={objectLogin}
		/>
	);
};
