module.exports = {
	siteMetadata: {
		title: "Base de Conhecimento - wEstoque.com.br",
		author: "Sistema wEstoque",
		description: "Informações e artigos de como usar o sistema wEstoque",
		siteUrl: "https://ajuda.westoque.com.br",
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
	],
}