import { ObjectArticleProps } from 'pages/HomePage/components/ArticlesComponent/types/ObjectArticleProps';
import { ArticlesComponentView } from './views/ArticlesComponentView';

export const ArticlesComponent = ({
	img,
	title,
	subTitle,
}: ObjectArticleProps) => {
	return <ArticlesComponentView img={img} title={title} subTitle={subTitle} />;
};
