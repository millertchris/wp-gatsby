import React, { Fragment } from 'react';
import { graphql } from 'gatsby';
import Header from '../components/header';
import Footer from '../components/footer';
import Gist from 'react-gist';
import Markdown from 'markdown-to-jsx';
import MailChimpForm from '../components/mailChimp.js';

const ScriptHandler = (props) => {
	// if the script is a gist override it with our react component.
	if (props.src && props.src.includes('gist.github.com')) {
		return <Gist id={props.src.split('/')[4].split('.')[0]} />;
	}
	return null;
};

export default function SinglePost({ data }) {
	const post = data.allWpPost.nodes[0];
	const meta = data.meta.nodes[0];
	return (
		<Fragment>
			<Header seo={post.seo} />
			<article className='post'>
				<div className='wrapper'>
					<header>
						<h1 class='title'>
							{post.title}
						</h1>
						<time datetime={meta.date}>
							Published on:{' '}
							{post.date}
						</time>
					</header>
					<Markdown
						options={{
							overrides: {
								script: {
									component: ScriptHandler,
								},
								Gist: Gist,
							},
						}}
					>
						{post.content}
					</Markdown>

					<div className='author'>
						<div className='image'>
							<img
								src={
									post
										.author
										.node
										.avatar
										.url
								}
								alt='Chris Miller'
							/>
						</div>
						<div className='content'>
							<h2 className='name'>
								{
									post
										.author
										.node
										.name
								}
							</h2>
							<h3 className='description'>
								{
									post
										.author
										.node
										.description
								}
							</h3>
						</div>
					</div>
					<div className='subscribe'>
						<h2 className='title'>
							Subscribe to receive
							updates.
						</h2>
						<MailChimpForm />
					</div>
				</div>
			</article>
			<Footer />
		</Fragment>
	);
}

export const query = graphql`
	query($slug: String!) {
		allWpPost(filter: { slug: { eq: $slug } }) {
			nodes {
				id
				title
				date(formatString: "MMMM d, y")
				slug
				content
				author {
					node {
						name
						description
						avatar {
							url
						}
					}
				}
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
		meta: allWpPost(filter: { slug: { eq: "hello-world" } }) {
			nodes {
				date(formatString: "y-MM-DD")
			}
		}
	}
`;
