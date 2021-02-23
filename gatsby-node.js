const path = require(`path`);

exports.createPages = ({ graphql, actions }) => {
	const { createPage } = actions;

	const pages = graphql(`
		{
			allWpPost(sort: { fields: [date] }) {
				nodes {
					title
					excerpt
					content
					slug
				}
			}
		}
	`).then((result) => {
		result.data.allWpPost.nodes.forEach((node) => {
			createPage({
				path: node.slug,
				component: path.resolve(
					`./src/templates/single-post.js`
				),
				context: {
					// This is the $slug variable
					// passed to blog-post.js
					slug: node.slug,
				},
			});
		});
	});

	const posts = graphql(`
		{
			allWpPage {
				nodes {
					id
					title
					slug
					content
				}
			}
		}
	`).then((result) => {
		result.data.allWpPage.nodes.forEach((node) => {
			createPage({
				path: node.slug,
				component: path.resolve(
					`./src/templates/single-page.js`
				),
				context: {
					// This is the $slug variable
					// passed to blog-post.js
					slug: node.slug,
				},
			});
		});
	});

	return Promise.all([pages, posts]);
};
