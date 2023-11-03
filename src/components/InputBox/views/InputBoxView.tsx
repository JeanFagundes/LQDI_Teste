import { InputBoxProps } from '../types/InputBoxProps';
import checkedIcon from 'assets/checkedIcon.svg';
import { useState } from 'react';

export const InputBoxView = ({
	id,
	placeholder,
	type,
	handleInputChange,
	border,
	inputValue,
	formData,
	column,
	getFormDataValue,
}: InputBoxProps) => {
	const [filled, setFilled] = useState(false);

	const valor =
		formData && column && getFormDataValue
			? getFormDataValue(formData, column.name)
			: '';

	const style = {
		width: border === 'fill' ? '393px' : '480px',
		height: border === 'fill' ? '78px' : '47px',
		borderRadius: border === 'fill' ? '50px' : '60px',
		border: border === 'fill' ? '2px solid #fff' : 'none',
		background: border === 'fill' ? '#000' : '#F1F4F9',
		color: border === 'fill' ? '#ffffff' : 'rgba(16, 17, 19, 0.80)',
	};

	return (
		<>
			<input
				id={id.toString()}
				onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
					handleInputChange(e);
					setFilled(e.target.value !== '');
				}}
				defaultValue={valor || ''}
				type={type}
				placeholder={placeholder}
				style={{
					borderRadius: style.borderRadius,
					width: style.width,
					height: style.height,
					border: style.border,
					background: style.background,
					color: style.color,
					outline: 'none',
					fontSize: '18px',
					fontWeight: '500',
					textAlign: 'center',
				}}
				onFocus={(e) => {
					if (border === 'fill') {
						e.target.style.background = 'rgba(255, 255, 255, 0.95)';
						e.target.style.color = '#080808';
						e.target.style.fontWeight = '400';
						if (inputValue) {
							e.target.style.textAlign = 'left';
							e.target.style.textIndent = '36px';
						}
					}
					if (border === 'none') {
						e.target.style.border = '1px solid #0999BA';
					}
				}}
				onBlur={(e) => {
					if (border === 'fill') {
						e.target.style.background = style.background;
						e.target.style.textIndent = '0';
						e.target.style.textAlign = 'center';
						e.target.style.color = '#fff';
						if (inputValue) {
							e.target.style.textAlign = 'left';
							e.target.style.textIndent = '36px';
						}
					}
					if (border === 'none') {
						e.target.style.border = 'none';
					}
				}}
			/>
			{filled && border === 'none' ? (
				<img src={checkedIcon} alt="check icon" width={16} height={10} />
			) : (
				''
			)}
		</>
	);
};
