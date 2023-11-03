import ArticleIconNext from 'assets/ArticleIconNext.svg';
import { TextBox } from 'components/TextBox';
import { ObjectArticleProps } from 'pages/HomePage/components/ArticlesComponent/types/ObjectArticleProps';

export const ArticlesComponentView = ({
	img,
	title,
	subTitle,
}: ObjectArticleProps) => {
	return (
		<>
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
				}}
			>
				<img src={img} alt="LogoArticle" />

				<div
					style={{
						WebkitBoxOrient: 'vertical',
						WebkitLineClamp: '3',
						overflow: 'hidden',
						textOverflow: 'elipsis',
						display: '-webkit-box',
					}}
				>
					<TextBox
						fontSize={'24px'}
						fontWeight={'700'}
						text={title}
						customStyles={{
							paddingTop: '36px',
						}}
					/>
				</div>

				<div
					style={{
						WebkitBoxOrient: 'vertical',
						WebkitLineClamp: '6',
						overflow: 'hidden',
						textOverflow: 'elipsis',
						display: '-webkit-box',
					}}
				>
					<TextBox
						fontSize={'16px'}
						fontWeight={'400'}
						text={subTitle}
						customStyles={{
							paddingTop: '19px',
						}}
					/>
				</div>

				<div
					style={{
						display: 'flex',
						flexDirection: 'row',
						gap: '8px',
						alignItems: 'center',
						paddingTop: '74px',
						position: 'absolute',
						top: '1581px',
					}}
				>
					<TextBox
						fontSize={'15px'}
						fontWeight={'700'}
						text={'Ir para o artigo'}
					/>
					<img src={ArticleIconNext} alt="" />
				</div>
			</div>
		</>
	);
};
