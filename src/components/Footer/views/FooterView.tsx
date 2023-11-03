import logoLQDIFooter from 'assets/logoLQDIFooter.svg';
import { TextBox } from 'components/TextBox';
import './Footer.css';
export const FooterView = () => {
	const country = [
		{
			id: 1,
			country: 'Portugal',
			address: 'Av. República Nº6 - 1º Andar Lisboa',
			phone: '+351 916 029 443',
		},
		{
			id: 2,
			country: 'Holanda',
			address: 'Jasykoffstraat 631506AT ZaandamThe Netherlands',
			phone: '+31 622 333 744',
		},
	];
	return (
		<>
			<footer
				style={{
					display: 'flex',
					flexDirection: 'row',
					color: '#fff',
					background: '#000',
					marginTop: '86px',
					width: '100%',
				}}
			>
				<div style={{ maxWidth: '1280px', display: 'flex', padding: '0 50px' }}>
					<div style={{ paddingTop: '54px', paddingRight: '423px' }}>
						<img src={logoLQDIFooter} alt="" />
					</div>
					<div
						style={{
							display: 'flex',
							flexDirection: 'row',
							gap: '70px',
						}}
					>
						<div
							style={{
								display: 'flex',
								flexDirection: 'column',
								color: '#fff',
								gap: '17px',
								paddingTop: '54px',
							}}
						>
							<div>
								<TextBox
									color={'#fff'}
									fontSize={'15px'}
									fontWeight={'700'}
									text={'Brasil'}
								/>
								<TextBox
									color={'#fff'}
									fontSize={'15px'}
									fontWeight={'400'}
									text={'Rua da Consolação, 4393º andar, Consolação São Paulo'}
									customStyles={{ paddingTop: '3px' }}
								/>
							</div>
							<div>
								<TextBox
									color={'#fff'}
									fontSize={'15px'}
									fontWeight={'400'}
									text={'+55 11 3280-0283'}
								/>
							</div>
						</div>
						<div
							className="logoLQDIFooter"
							style={{
								display: 'flex',
								flexDirection: 'column',
								color: '#fff',
								gap: '21px',
								paddingTop: '54px',
								paddingBottom: '66px',
							}}
						>
							{country.map((item) => (
								<>
									<div
										key={item.id}
										style={{
											display: 'flex',
											flexDirection: 'column',
											color: '#fff',
											gap: '17px',
										}}
									>
										<div>
											<TextBox
												color={'#fff'}
												fontSize={'15px'}
												fontWeight={'700'}
												text={item.country}
											/>
											<TextBox
												color={'#fff'}
												fontSize={'15px'}
												fontWeight={'400'}
												text={item.address}
												customStyles={{ paddingTop: '3px' }}
											/>
										</div>
										<div>
											<TextBox
												color={'#fff'}
												fontSize={'15px'}
												fontWeight={'400'}
												text={item.phone}
											/>
										</div>
									</div>
								</>
							))}
						</div>
					</div>
				</div>
			</footer>
		</>
	);
};
