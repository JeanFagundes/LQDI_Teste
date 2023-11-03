import { ButtonProps } from '../types/ButtonProps';

export const ButtonView = ({
	width,
	height,
	background,
	fontSize,
	text,
	handleSubmitRequisicao,
}: ButtonProps) => {
	return (
		<>
			<button
				onClick={handleSubmitRequisicao}
				style={{
					width: width,
					height: height,
					borderRadius: '40px',
					color: '#ffffff',
					background: background,
					border: 'none',
					fontWeight: '700',
					fontSize: fontSize,
					cursor: 'pointer',
				}}
			>
				{text}
			</button>
		</>
	);
};
