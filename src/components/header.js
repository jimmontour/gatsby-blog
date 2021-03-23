import * as React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'styled-components';

import gatsbyLogo from '../images/gatsby-icon.png';

const HeaderStyle = styled.div`
  background: #524763;
  margin-bottom: 1.45rem;
  img {
    margin-bottom: 0;
  }
`;

const HeaderContainerStyle = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0.5rem;
`;

const Header = ({ siteTitle, description }) => (
  <HeaderStyle>
    <HeaderContainerStyle>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          <img style={{ width: '100px' }} src={gatsbyLogo} alt="Gatsby Logo" />
        </Link>
      </h1>
    </HeaderContainerStyle>
  </HeaderStyle>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
