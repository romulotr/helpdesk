module.exports = {
	siteMetadata: {
		title: "Base de Conhecimento - wEstoque.com.br",
		author: "Sistema wEstoque",
		description: "Informações e artigos de como usar o sistema wEstoque.com.br",
		siteUrl: "https://westoque.netlify.app",
		social: {
			twitter: "westoqueapp"
		},
	},
	plugins: [
		'gatsby-plugin-postcss',
		`gatsby-plugin-image`,
		`gatsby-plugin-sharp`,
		`gatsby-transformer-sharp`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/src/content/sessoes`,
				name: `sessoes`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/src/content/artigos`,
				name: `artigos`,
			},
		},
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				// CommonMark mode (default: true)
				commonmark: true,
				// Footnotes mode (default: true)
				footnotes: true,
				// Pedantic mode (default: true)
				pedantic: true,
				// GitHub Flavored Markdown mode (default: true)
				gfm: true,
				// Plugins configs
				plugins: [],
			},
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
			  name: `Base de Conhecimento - wEstoque.com.br`,
			  short_name: `Ajuda wEstoque`,
			  background_color: `#f1f6fa`,
			  theme_color: `#232323`,
			  display: "standalone",
			  start_url: "/",
			  icon: `src/images/favicon.png`,
			}
		  },
		  {
			resolve: `gatsby-plugin-offline`,
			options: {
			  precachePages: [`/chamado`, `/404`, `/index`, `/*`],
			}
		  },
		  {
			resolve: `gatsby-plugin-google-gtag`,
			options: {
				// You can add multiple tracking ids and a pageview event will be fired for all of them.
				trackingIds: [
				"G-TDSD8782RG"
				],
				// This object is used for configuration specific to this plugin
				pluginConfig: {
				// Puts tracking script in the head instead of the body
				head: true,
				// Setting this parameter is also optional
				respectDNT: true
				},
			},
		  },
		  `gatsby-plugin-offline`,
		  `gatsby-plugin-react-helmet`,
	],
}