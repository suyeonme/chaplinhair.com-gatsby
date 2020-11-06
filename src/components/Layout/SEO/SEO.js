import React from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from '@reach/router';
import { useStaticQuery, graphql } from 'gatsby';

const SEO = () => {
  let currentPath = useLocation();
  if (currentPath.pathname === '/') {
    currentPath = 'home';
  } else {
    currentPath = currentPath.pathname.split('/')[1];
  }

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          keyword
          description
          siteUrl
          image
          author
          socialLinks {
            instagram
            blog
            youtube
          }
        }
      }
    }
  `);

  return (
    <Helmet>
      <meta name="keywords" content={data.site.siteMetadata.keyword} />
      <meta name="description" content={data.site.siteMetadata.description} />
      <meta name="author" content={data.site.siteMetadata.author} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="채플린헤어" />
      <meta
        property="og:description"
        content={data.site.siteMetadata.description}
      />
      <meta property="og:image" content={data.site.siteMetadata.image} />
      <meta property="og:url" content={data.site.siteMetadata.siteUrl} />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;600&display=swap"
        rel="stylesheet"
      />
      <link rel="canonical" href={`${data.site.siteMetadata.siteUrl}`} />
      <title>{`${currentPath} | ${data.site.siteMetadata.title}`}</title>
      <script type="application/ld+json">
        {`
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                "url": "http://www.chaplinhair.com",
                "name": "채플린헤어",
                "sameAs": [
                  "${data.site.siteMetadata.socialLinks.instagram}",
                  "${data.site.siteMetadata.socialLinks.blog}",
                  "${data.site.siteMetadata.socialLinks.youtube}"
                ]
              }
            `}
      </script>
    </Helmet>
  );
};

export default SEO;
