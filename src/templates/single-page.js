import React, { Fragment } from 'react';
import { graphql } from 'gatsby';
import Header from '../components/header';
import Footer from '../components/footer';

export default function SinglePage({ data }) {
	const post = data.allWpPage.nodes[0];
	return (
		<Fragment>
			<Header seo={post.seo} />
			<div className='page'>
				<div className='wrapper'>
					<h1>{post.title}</h1>
					<div
						dangerouslySetInnerHTML={{
							__html: post.content,
						}}
					/>
				</div>
			</div>
			<Footer />
		</Fragment>
	);
}
export const query = graphql`
	query($slug: String!) {
		allWpPage(filter: { slug: { eq: $slug } }) {
			nodes {
				id
				title
				slug
				content
				seo {
					canonical
					metaDesc
					metaKeywords
					opengraphAuthor
					opengraphDescription
					opengraphPublishedTime
					opengraphSiteName
					opengraphTitle
					opengraphUrl
					opengraphType
					title
					twitterTitle
					focuskw
					opengraphModifiedTime
					opengraphPublisher
					twitterDescription
					opengraphImage {
						sourceUrl
					}
					metaRobotsNofollow
					metaRobotsNoindex
					twitterImage {
						sourceUrl
					}
				}
			}
		}
	}
`;
