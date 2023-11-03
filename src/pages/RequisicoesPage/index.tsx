import { useRequisicoesViewPageModel } from './useRequisicoesPageViewModel';
import { RequisicoesPageView } from './views/RequisicoesPageView';

export const RequisicoesPage = () => {
	const { data, handleSubmitRequisicao } = useRequisicoesViewPageModel();
	return (
		<>
			<RequisicoesPageView
				data={data}
				handleSubmitRequisicao={handleSubmitRequisicao}
			/>
		</>
	);
};
