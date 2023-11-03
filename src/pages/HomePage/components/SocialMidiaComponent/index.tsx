import { SocialMidiaComponentProps } from './types/SocialMidiaComponentProps';
import { SocialMidiaComponentView } from './views/SocialMidiaComponentView';

export const SocialMidiaComponent = ({
	img,
	alt,
}: SocialMidiaComponentProps) => {
	return <SocialMidiaComponentView img={img} alt={alt} />;
};
