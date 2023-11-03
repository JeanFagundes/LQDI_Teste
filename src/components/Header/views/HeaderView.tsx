import logoLQDI from 'assets/logo-LQDI.svg';
import { Button } from 'components/Button';
import { TextBox } from 'components/TextBox';

export const HeaderView = () => {
	return (
		<header
			style={{
				position: 'fixed',
				width: '100%',
				top: '0',
				left: '0',
				background: '#F1F4F9',
				display: 'flex',
				justifyContent: 'center',
			}}
		>
			<div
				style={{
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
					maxWidth: '1280px',
					padding: '0 50px',
					height: '62px',
					zIndex: '1000',
					width: '100%',
				}}
			>
				<a href="/">
					<img src={logoLQDI} alt="Logo" width={'78px'} height={'46px'} />
				</a>

				<div style={{ display: 'flex', gap: '21px', alignItems: 'center' }}>
					<TextBox
						fontSize={'15px'}
						fontWeight={'600px'}
						text={'Agende uma reunião conosco'}
						color={'rgba(0, 0, 0, 0.70)'}
					/>
					<a href="/signUp">
						<Button
							width={'119px'}
							height={'42px'}
							background={'#000000'}
							fontSize={'14px'}
							text={'Começar'}
						/>
					</a>
				</div>
			</div>
		</header>
	);
};
