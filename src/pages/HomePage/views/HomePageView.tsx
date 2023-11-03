import { Button } from 'components/Button';
import { TextBox } from 'components/TextBox';

import Rectangle109 from 'assets/Rectangle109.svg';
import Rectangle110 from 'assets/Rectangle110.svg';
import Rectangle111 from 'assets/Rectangle111.svg';
import Rectangle112 from 'assets/Rectangle112.svg';

import { ArticlesComponent } from '../components/ArticlesComponent';
import { HomePageProps } from '../types/HomePageProps';
import { InputBox } from 'components/InputBox';
import { SocialMidiaComponent } from '../components/SocialMidiaComponent';
import { FormComponent } from '../components/FormComponent';
export const HomePageView = ({
	objectArticle,
	objectSocialMidiaIcon,
	objectForm,
	handleInputChange,
	inputValue,
	formData,
	getFormDataValue,
	handleFormSubmit,
	sucessMessage,
	errorMessage,
}: HomePageProps) => {
	return (
		<>
			<div style={{ maxWidth: '1280px', padding: '50px', minWidth: '1280px' }}>
				<div
					style={{
						display: 'flex',
						flexDirection: 'row',
						justifyContent: 'space-between',
						width: '100%',
						// background: '#f1f4f9',
						gap: '95px',
						maxWidth: '1280px',
					}}
				>
					<div
						style={{
							paddingTop: '142px',
							display: 'flex',
							flexDirection: 'column',
							gap: '38.5px',
							width: '46%',
							minWidth: '505px',
						}}
					>
						<TextBox
							fontSize={'36px'}
							fontWeight={'600'}
							text={
								'Construímos estratégias, design e tecnologia de ponta para o seu negócio'
							}
						/>
						<TextBox
							fontSize={'20px'}
							fontWeight={'500'}
							text={'Converse com nossa equipe sobre o seu projeto.'}
						/>

						<Button
							width={'150px'}
							height={'52px'}
							background={'#0AB2B7'}
							fontSize={'16px'}
							text={'Começar'}
						/>
					</div>

					<div
						style={{
							width: '54%',
							paddingTop: '111px',
							minWidth: '580px',
							display: 'flex',
							flexWrap: 'wrap',
							gap: '20px',
							zIndex: -1,
						}}
					>
						<img
							src={Rectangle109}
							alt=""
							style={{ borderRadius: '20px', alignSelf: 'start' }}
						/>
						<img
							src={Rectangle110}
							alt=""
							style={{ position: 'relative', top: '100px' }}
						/>
						<img
							src={Rectangle111}
							alt=""
							style={{ position: 'relative', bottom: '80px' }}
						/>
						<img
							src={Rectangle112}
							alt=""
							style={{ position: 'relative', bottom: '7px', right: '598px' }}
						/>
					</div>
				</div>
				<div
					style={{
						display: 'flex',
						flexDirection: 'row',
						gap: '33px',
						paddingTop: '131px',
						height: '644px',
					}}
				>
					<div style={{ display: 'flex', gap: '33px', flex: 1 }}>
						{objectArticle.map((object, index) => (
							<div key={index}>
								<ArticlesComponent
									img={object.img}
									title={object.title}
									subTitle={object.subTitle}
								/>
							</div>
						))}
					</div>

					<div
						style={{
							background: '#000',
							padding: '40px',
							borderRadius: '19px',
						}}
					>
						<TextBox
							fontSize={'32px'}
							fontWeight={'600'}
							text={
								'Receba os nossos artigo de interesse na sua caixa de entrada.'
							}
							color={'#fff'}
							customStyles={{
								paddingTop: '18px',
								paddingBottom: '78px',
								width: '297px',
							}}
						/>

						<InputBox
							id={0}
							placeholder={'Escreva aqui seu e-mail...'}
							type={'text'}
							border={'fill'}
							inputValue={inputValue}
							handleInputChange={handleInputChange}
						/>

						<TextBox
							fontSize={'15px'}
							fontWeight={'500'}
							text={'Siga-nos em nossas mídias sociais'}
							color={'#fff'}
							customStyles={{
								paddingTop: '71px',
								width: '117px',
							}}
						/>
						<div
							style={{
								display: 'flex',
								gap: '13px',
								alignItems: 'center',
								paddingTop: '24px',
							}}
						>
							{objectSocialMidiaIcon.map((image, index) => (
								<div key={index}>
									<SocialMidiaComponent img={image.img} alt={image.alt} />
								</div>
							))}
						</div>
					</div>
				</div>
				<div style={{ display: 'flex', paddingTop: '107px', gap: '85px' }}>
					<div style={{ paddingLeft: '100px' }}>
						<TextBox
							fontSize={'32px'}
							fontWeight={'600'}
							text={
								'Viva uma nova experiência de comunicação integrada com foco nos resultados.'
							}
							customStyles={{ paddingBottom: '21px' }}
						/>
						<TextBox
							fontSize={'20px'}
							fontWeight={'500'}
							text={'Escreva-nos sobre o seu projeto'}
						/>
					</div>

					<div style={{ paddingRight: '150px' }}>
						<FormComponent
							objectForm={objectForm}
							handleInputChange={handleInputChange}
							inputValue={inputValue}
							formData={formData}
							getFormDataValue={getFormDataValue}
							handleFormSubmit={handleFormSubmit}
							sucessMessage={sucessMessage}
							errorMessage={errorMessage}
						/>
					</div>
				</div>
			</div>
		</>
	);
};
