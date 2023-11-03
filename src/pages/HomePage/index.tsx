import { useHomePageViewModel } from './useHomePageViewModel';
import { HomePageView } from './views/HomePageView';

export const HomePage = () => {
	const {
		objectArticle,
		objectSocialMidiaIcon,
		objectForm,
		handleInputChange,
		inputValue,
		formData,
		getFormDataValue,
		handleFormSubmit,
		sucessMessage,
		errorMessage,
	} = useHomePageViewModel();
	return (
		<>
			<HomePageView
				objectArticle={objectArticle}
				objectSocialMidiaIcon={objectSocialMidiaIcon}
				objectForm={objectForm}
				handleInputChange={handleInputChange}
				inputValue={inputValue}
				formData={formData}
				getFormDataValue={getFormDataValue}
				handleFormSubmit={handleFormSubmit}
				sucessMessage={sucessMessage}
				errorMessage={errorMessage}
			/>
		</>
	);
};
