import { ButtonProps } from './types/ButtonProps';
import { ButtonView } from './views/ButtonView';

export const Button = ({
	width,
	height,
	background,
	fontSize,
	text,
	handleSubmitRequisicao,
}: ButtonProps) => (
	<ButtonView
		width={width}
		height={height}
		background={background}
		fontSize={fontSize}
		text={text}
		handleSubmitRequisicao={handleSubmitRequisicao}
	/>
);
