import { TextBoxProps } from './types/TextBoxProps';
import { TextBoxView } from './views/TextBoxView';

export const TextBox = ({
	fontSize,
	color = '#08111E',
	fontWeight,
	text,
	customStyles,
}: TextBoxProps) => (
	<TextBoxView
		fontSize={fontSize}
		color={color}
		fontWeight={fontWeight}
		text={text}
		customStyles={customStyles}
	/>
);
