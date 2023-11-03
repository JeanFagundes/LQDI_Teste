import { Button } from 'components/Button';
import { TextBox } from 'components/TextBox';
import { requisicoesPageProps } from '../types/RequisicoesPageProps';

export const RequisicoesPageView = ({
	data,
	handleSubmitRequisicao,
}: requisicoesPageProps) => {
	return (
		<>
			<div style={{ padding: '50px', maxWidth: '1280px', paddingTop: '60px' }}>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						gap: '30px',
						alignItems: 'center',
					}}
				>
					<TextBox
						fontSize={'42px'}
						fontWeight={'600'}
						text={'Listar usuarios registrados'}
					/>
					<Button
						handleSubmitRequisicao={handleSubmitRequisicao}
						width={'150px'}
						height={'52px'}
						background={'#0AB2B7'}
						fontSize={'16px'}
						text={'Listar'}
					/>
				</div>
				{/* {data?.map((user) => (
					<div key={user.id}>
						<p>{user.name}</p>
						<p>{user.email}</p>
					</div>
				))} */}
				{data !== null && (
					<div
						style={{
							paddingTop: '60px',
							display: 'flex',
							justifyContent: 'center',
						}}
					>
						<pre
							style={{
								paddingTop: '40px',
								fontSize: '22px',
								border: '1px solid black',
								background: '#fff',
								boxShadow: '4px 4px 10px rgba(0, 0, 0, 0.2)',
								width: '700px',
							}}
						>
							{JSON.stringify(data, null, 2)}
						</pre>
					</div>
				)}
			</div>
		</>
	);
};
