module.exports = {
	siteMetadata: {
		title: "Base de Conhecimento - wEstoque.com.br",
		author: "CodeBox Desenvolvimento de Sistemas",
		description: "Ajuda do wEstoque. Confira como configurar e gerenciar as principais funcionalidades do wEstoque com os nossos tutoriais, que explicam o passo a passo para utilizar o sistema de forma simples e eficiente.",
		siteUrl: "https://ajuda.westoque.com.br",
		social: {
			twitter: "sistemawestoque"
		},
	},
	plugins: [
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
		{
		resolve: `gatsby-plugin-manifest`,
		options: {
			name: `Ajuda wEstoque.com.br`,
			short_name: `Ajuda wEstoque`,
			background_color: `#f1f6fa`,
			theme_color: `#232323`,
			display: "standalone",
			start_url: "/",
			icon: `src/images/favicon.png`,
			cache_busting_mode: 'none',
		}
		},
		{
		resolve: `gatsby-plugin-offline`,
		options: {			  
			workboxConfig: {
			globPatterns: ['**/*.{js,jpg,png,html,css}']
			},
			precachePages: [`/`, `/chamado`, `/404`, `/index`, `/*`],
		}
		},
		{
		resolve: 'gatsby-plugin-robots-txt',
		options: {
			host: 'https://ajuda.westoque.com.br',
			policy: [{ userAgent: '*', allow: '/' }]
			}
		},
		'gatsby-plugin-postcss',
		`gatsby-plugin-image`,
		`gatsby-plugin-sharp`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-react-helmet`,
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
				// Footnotes mode (default: true)
				footnotes: true,
				// GitHub Flavored Markdown mode (default: true)
				gfm: true,
				// Plugins configs
				plugins: [],
			},
		},
		
		  

	],
}