 import React from "react"
 import PropTypes from "prop-types"
 import Helmet from "react-helmet"
 import { useStaticQuery, graphql } from "gatsby"
 
 function Seo({ description, lang, meta, keywords, title }) {
   const { site } = useStaticQuery(
     graphql`
       query {
         site {
           siteMetadata {
             title
             description
             author
           }
         }
       }
     `
   )
 
   const metaDescription = description || site.siteMetadata.description
 
   return (
     <Helmet
       htmlAttributes={{
         lang,
       }}
       title={title}
       titleTemplate={`%s | ${site.siteMetadata.title}`}
       meta={[
          {
            name: `description`,
            content: metaDescription,
          },  
         {
           name: `google-site-verification`,
           content: `A4_bAB127tIcSUORp94Te0dsYsFcOaBDWMt6X-_gYVQ`,
         },
         {
           property: `og:title`,
           content: title,
         },
         {
           property: `og:description`,
           content: metaDescription,
         },
         {
           property: `og:type`,
           content: `website`,
         },
         {
           name: `twitter:card`,
           content: `summary`,
         },
         {
           name: `twitter:creator`,
           content: site.siteMetadata.author,
         },
         {
           name: `twitter:title`,
           content: title,
         },
         {
           name: `twitter:description`,
           content: metaDescription,
         },
       ]
         .concat(
           keywords.length > 0
             ? {
                 name: `keywords`,
                 content: keywords.join(`, `),
               }
             : []
         )
         .concat(meta)}
     >
        
        <meta name="description" content={metaDescription} />
        <meta name="google-site-verification" content="A4_bAB127tIcSUORp94Te0dsYsFcOaBDWMt6X-_gYVQ" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" /> 
        <meta name="apple-mobile-web-app-title" content="Ajuda wEstoque" />
        
    </Helmet>
   )
 }
 
 Seo.defaultProps = {
   lang: `pt-br`,
   meta: [],
   keywords: [],
   description: ``,
 }
 
 Seo.propTypes = {
   description: PropTypes.string,
   lang: PropTypes.string,
   meta: PropTypes.arrayOf(PropTypes.object),
   keywords: PropTypes.arrayOf(PropTypes.string),
   title: PropTypes.string.isRequired,
 }
 
 export default Seo
 