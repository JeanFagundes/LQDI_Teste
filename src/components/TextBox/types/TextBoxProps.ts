export interface TextBoxProps extends React.HTMLProps<HTMLDivElement> {
	fontSize: string;
	color?: string;
	fontWeight: string;
	text: string;
	customStyles?: React.CSSProperties;
}
