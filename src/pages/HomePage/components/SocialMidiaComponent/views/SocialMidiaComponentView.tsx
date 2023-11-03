import { SocialMidiaComponentProps } from '../types/SocialMidiaComponentProps';

export const SocialMidiaComponentView = ({
	img,
	alt,
}: SocialMidiaComponentProps) => {
	return (
		<div
			style={{
				width: '48px',
				borderRadius: '50%',
				background: '#fff',
				height: '48px',
				display: 'flex',
				justifyContent: 'center',
				flexWrap: 'wrap',
			}}
		>
			<img src={img} alt={alt} />
		</div>
	);
};
