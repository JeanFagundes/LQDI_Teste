/* eslint-disable react/prop-types */
import { TextBoxProps } from '../types/TextBoxProps';

export const TextBoxView: React.FC<TextBoxProps> = (props) => {
	const { fontSize, color, fontWeight, text, customStyles } = props;

	const style = {
		fontSize,
		text,
		color,
		fontWeight,
		fontFamily: 'Plus Jakarta Sans, sans-serif',
		...customStyles,
	};
	return (
		<>
			<p style={style}>{text}</p>
		</>
	);
};
