import React, { FC } from "react"

import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

export type MetaProps = JSX.IntrinsicElements["meta"]

export interface SEOProps {
  title?: string
  description?: string
  meta?: MetaProps[]
  lang?: string
}

interface SiteData {
  site: {
    metadata: {
      title: string
      description: string
      author: string
    }
  }
}

const SEO: FC<SEOProps> = ({ title, description, lang = "en", meta = [] }) => {
  const {
    site: {
      metadata: { title: siteTitle, description: siteDescription, author },
    },
  } = useStaticQuery<SiteData>(
    graphql`
      query {
        site {
          metadata: siteMetadata {
            title
            description
            author
          }
        }
      }
    `,
  )

  const metaDescription = description || siteDescription
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title ?? siteTitle}
      titleTemplate={title && `%s | ${siteTitle}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
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
        // {
        //   name: `twitter:card`,
        //   content: `summary`,
        // },
        // {
        //   name: `twitter:creator`,
        //   content: author,
        // },
        // {
        //   name: `twitter:title`,
        //   content: title,
        // },
        // {
        //   name: `twitter:description`,
        //   content: metaDescription,
        // },
        ...meta,
      ]}
    />
  )
}

export default SEO
