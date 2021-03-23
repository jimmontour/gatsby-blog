import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import styled from 'styled-components';

const UlStyle = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  a {
    font-family: 'Helvetica, Arial';
    font-size: 0.8rem;
    text-decoration: underline;
    color: #524763;
  }
`;

const POST_ARCHIVE_QUERY = graphql`
  query BlogPostArchive {
    allMarkdownRemark(
      limit: 5
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          frontmatter {
            title
            slug
          }
        }
      }
    }
  }
`;

const Archive = () => (
  <StaticQuery
    query={POST_ARCHIVE_QUERY}
    render={({ allMarkdownRemark }) => (
      <>
        <aside>
          <h3>Archive</h3>
          <UlStyle>
            {allMarkdownRemark.edges.map((edge) => (
              <li key={edge.node.frontmatter.slug}>
                <Link to={`/posts${edge.node.frontmatter.slug}`}>
                  {edge.node.frontmatter.title}
                </Link>
              </li>
            ))}
          </UlStyle>
        </aside>
      </>
    )}
  />
);

export default Archive;
