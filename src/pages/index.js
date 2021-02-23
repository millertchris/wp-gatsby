import * as React from 'react';
import { Link, graphql } from 'gatsby';
import '../scss/main.scss';

// markup
const IndexPage = ({ data }) => {
	return (
		<div>
			<h1>My WordPress Blog</h1>
			<h4>Posts</h4>
			{data.allWpPost.nodes.map((node) => (
				<div>
					<Link to={node.slug}>
						<p>{node.title}</p>
					</Link>
					<div
						dangerouslySetInnerHTML={{
							__html: node.excerpt,
						}}
					/>
				</div>
			))}
		</div>
	);
};

export const pageQuery = graphql`
	query {
		allWpPost(sort: { fields: [date] }) {
			nodes {
				title
				excerpt
				slug
			}
		}
	}
`;

export default IndexPage;
