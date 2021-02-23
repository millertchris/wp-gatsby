import React from 'react';
import Helmet from 'react-helmet';

function SEO({ data }) {
	console.log(data);
	return (
		<Helmet>
			{data.canonical !== undefined && (
				<link rel='canonical' href={data.canonical} />
			)}

			<title>{data.title}</title>
			<meta name='description' content={data.description} />
			<meta name='keywords' content={data.keywords} />
			<meta
				property='robots'
				content={
					data.metaRobotsNoindex +
					', ' +
					data.metaRobotsNofollow
				}
			/>
			<meta property='og:title' content={data.ogTitle} />
			<meta
				property='og:description'
				content={data.ogDescription}
			/>
			<meta property='og:type' content={data.ogType} />
			<meta property='og:url' content={data.ogUrl} />
			<meta property='og:image' content={data.ogImage} />
			<meta
				property='og:site_name'
				content={data.ogSitename}
			/>
			<meta
				property='article:author'
				content={data.ogAuthor}
			/>
			<meta
				property='article:publisher'
				content={data.ogPublisher}
			/>

			<meta
				name='twitter:title'
				content={data.twitterTitle}
			/>
			<meta
				name='twitter:description'
				content={data.twitterDescription}
			/>
			<meta
				name='twitter:image'
				content={data.twitterImage}
			/>
			<meta
				name='twitter:card'
				content='summary_large_image'
			/>
		</Helmet>
	);
}

export default SEO;
