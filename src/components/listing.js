import * as React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

import Layout from './layout';
import SEO from './seo';

const PostStyle = styled.article`
  box-shadow: 0px 3px 10px rgba(25, 17, 24, 0.05);
  padding: 1rem;
  border-radius: 4px;
  margin-bottom: 1rem;
  a {
    color: #000;
    text-decoration: none;
  }
  h2 {
    margin-bottom: 0;
  }
  p {
    font-size: 0.8rem;
  }
  .read-more {
    font-family: 'Helvetica, Arial';
    font-size: 0.8rem;
    text-decoration: underline;
    color: #524763;
  }
`;

const LISTING_QUERY = graphql`
  query BlogPostListing {
    allMarkdownRemark(
      limit: 10
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            slug
          }
        }
      }
    }
  }
`;

const Listing = () => (
  <StaticQuery
    query={LISTING_QUERY}
    render={({ allMarkdownRemark }) =>
      allMarkdownRemark.edges.map((edge) => (
        <PostStyle key={edge.node.frontmatter.slug}>
          <Link to={`/posts${edge.node.frontmatter.slug}`}>
            <h2>{edge.node.frontmatter.title}</h2>
          </Link>

          <p>{edge.node.frontmatter.date}</p>
          <p>{edge.node.excerpt}</p>
          <Link to={`/posts${edge.node.frontmatter.slug}`}>
            <p className="read-more">Read More</p>
          </Link>
        </PostStyle>
      ))
    }
  />
);

export default Listing;
