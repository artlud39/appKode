import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Color } from '../../types/style';

interface LinkProps {
  borderсolor: Color.HanPurple | Color.Transparent;
  color: Color.Ghost | Color.HanPurple;
}

export const StyledLink = styled(Link)<LinkProps>`
  display: flex;
  text-decoration: none;
  color: #97979B;
  font-weight: 500;
  font-size: 15px;
  line-height: 20px;
  padding: 8px 12px;
  border-bottom: 2px solid transparent;
  border-color: ${({borderсolor = Color.Transparent}) => borderсolor};

  :hover,
  :focus {
    color: #050510;
  }
`;
