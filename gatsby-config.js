module.exports = {
	siteMetadata: {
		title: 'WP Gatsby',
	},
	plugins: [
		{
			resolve: 'gatsby-plugin-mailchimp',
			options: {
				endpoint:
					'https://millertchris.us6.list-manage.com/subscribe/post?u=191e66f8a9560ce71d523e4e2&amp;id=089420b37c', // string; add your MC list endpoint here; see instructions below
				timeout: 3500, // number; the amount of time, in milliseconds, that you want to allow mailchimp to respond to your request before timing out. defaults to 3500
			},
		},
		{
			resolve: 'gatsby-source-wordpress',
			options: {
				url: 'http://millertchris.local/graphql',
			},
		},
		'gatsby-plugin-sass',
		{
			resolve: 'gatsby-plugin-google-analytics',
			options: {
				trackingId: '[tracking_ID_goes_here]',
			},
		},
		'gatsby-plugin-sharp',
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-sitemap',
		'gatsby-plugin-offline',
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				icon: 'src/images/icon.png',
			},
		},
		'gatsby-transformer-sharp',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: './src/images/',
			},
			__key: 'images',
		},
	],
};
