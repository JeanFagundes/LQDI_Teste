import { Button } from 'components/Button';
import { InputBox } from 'components/InputBox';
import { LoginPageProps } from '../types/LoginPageProps';
import { TextBox } from 'components/TextBox';

export const LoginPageView = ({
	errorMessage,
	handleFormSubmit,
	handleInputChange,
	inputValue,
	objectLogin,
}: LoginPageProps) => {
	return (
		<div
			style={{
				padding: '50px',
				maxWidth: '1280px',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				paddingTop: '60px',
			}}
		>
			<div
				style={{ textAlign: 'center', width: '650px', paddingBottom: '50px' }}
			>
				<TextBox fontSize={'48px'} fontWeight={'600'} text={'Login'} />
			</div>
			<form
				onSubmit={handleFormSubmit}
				style={{
					background: '#fff',
					alignItems: 'center',
					display: 'flex',
					flexDirection: 'column',
					borderRadius: '20px',
					boxShadow: '4px 4px 10px rgba(0, 0, 0, 0.2)',
					width: '650px',
					padding: '50px 0',
				}}
			>
				{objectLogin.map((item) => (
					<div
						key={item.id}
						style={{
							display: 'flex',
							flexDirection: 'column',
							gap: '22px',
							paddingBottom: '22px',
							alignItems: 'center',
						}}
					>
						<label style={{ fontSize: '32px', fontWeight: '600' }}>
							{item.label}
						</label>
						<InputBox
							type={item.type}
							border={'nonee'}
							inputValue={inputValue}
							id={item.id}
							handleInputChange={handleInputChange}
						/>
					</div>
				))}
				<p style={{ paddingBottom: '18px', fontSize: '18px' }}>
					Não tem cadastro ? <a href="/signup"> Clique aqui </a>
				</p>
				<Button
					width={'150px'}
					height={'52px'}
					background={'#0AB2B7'}
					fontSize={'16px'}
					text={'Logar'}
				/>
			</form>
			{errorMessage && (
				<div style={{ paddingTop: '24px' }}>
					<TextBox
						fontSize={'24px'}
						fontWeight={'600'}
						text={errorMessage || ''}
					/>
				</div>
			)}
		</div>
	);
};
