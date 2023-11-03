import { InputBox } from 'components/InputBox';
import { ObjectForm } from '../types/FormComponentProps';
import { Button } from 'components/Button';
import './styles.css';
import { ChangeEvent, useState } from 'react';
import checkedIcon from 'assets/checkedIcon.svg';
import { TextBox } from 'components/TextBox';

export const FormComponentView = ({
	objectForm,
	handleInputChange,
	inputValue,
	formData,
	getFormDataValue,
	handleFormSubmit,
	sucessMessage,
	errorMessage,
}: ObjectForm) => {
	const [filled, setFilled] = useState(false);

	return (
		<>
			<form
				onSubmit={handleFormSubmit}
				style={{
					display: 'flex',
					flexDirection: 'column',
					gap: '20px',
					fontFamily: 'Plus Jakarta Sans, sans-serif',
					paddingLeft: '19px',
				}}
			>
				{objectForm.map((form) => (
					<div
						key={form.id}
						style={{ display: 'flex', flexDirection: 'column', gap: '17px' }}
					>
						{form.type === 'text' && (
							<>
								<label
									style={{
										color: '#101113',
										fontSize: '15px',
										fontWeight: '500',
										textIndent: '17px',
									}}
								>
									{form.label}
								</label>
								<div
									style={{
										display: 'flex',
										flexDirection: 'row',
										alignItems: 'center',
										gap: '7px',
									}}
								>
									<InputBox
										id={form.id}
										type={form.type}
										border={'none'}
										handleInputChange={handleInputChange}
										inputValue={inputValue}
										formData={formData}
										column={form.column}
										getFormDataValue={getFormDataValue}
									/>
								</div>
							</>
						)}
						{form.type === 'textArea' && (
							<div style={{ display: 'flex', gap: '7px' }}>
								<textarea
									id={form.id.toString()}
									onInput={(e: ChangeEvent<HTMLTextAreaElement>) => {
										handleInputChange(e);
										setFilled(e.target.value !== '');
									}}
									defaultValue={formData.message}
									className="textArea"
									style={{
										width: '480px',
										height: '192px',
										borderRadius: '10px',
										background: '#F1F4F9',
										resize: 'none' /* Impede o redimensionamento do textarea */,
										overflow: 'hidden',
										outline: 'none',
										fontSize: '18px',
										fontWeight: '500',
										padding: '16px',
										boxSizing: 'border-box',
									}}
								></textarea>
								{filled ? (
									<img
										src={checkedIcon}
										alt="check icon"
										width={16}
										height={10}
									/>
								) : (
									''
								)}
							</div>
						)}
						{form.type === 'file' && (
							<>
								<input
									type="file"
									id={form.id.toString()}
									onChange={handleInputChange}
								/>
							</>
						)}
					</div>
				))}
				<div style={{ paddingTop: '14px' }}>
					<Button
						width={'122px'}
						height={'52px'}
						background={'#000'}
						fontSize={'16px'}
						text={'Enviar'}
					/>
				</div>
			</form>
			{sucessMessage && (
				<div style={{ paddingTop: '24px' }}>
					<TextBox
						fontSize={'32px'}
						fontWeight={'600'}
						text={sucessMessage || ''}
					/>
				</div>
			)}

			{errorMessage && (
				<div style={{ paddingTop: '24px' }}>
					<TextBox
						fontSize={'24px'}
						fontWeight={'600'}
						text={errorMessage || ''}
					/>
				</div>
			)}
		</>
	);
};
