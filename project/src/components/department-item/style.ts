import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLinkres = styled(Link)`
  display: flex;
  text-decoration: none;
  color: #97979B;
  font-weight: 500;
  font-size: 15px;
  line-height: 20px;
  padding: 8px 12px;
  border-bottom: 2px solid transparent;
  :hover {
    border-bottom: 2px solid #6534FF;
    color: #050510;
  }
`;

export const StyledLink = styled.a`
  display: flex;
  text-decoration: none;
  color: #97979B;
  font-weight: 500;
  font-size: 15px;
  line-height: 20px;
  padding: 8px 12px;
  border-bottom: 2px solid transparent;
  :hover {
    border-bottom: 2px solid #6534FF;
    color: #050510;
  }
`;
