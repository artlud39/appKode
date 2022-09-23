import styled from 'styled-components';
import { Color } from '../../types/style';

interface TextProps {
  weight?: 200 | 300 | 400 | 500 | 600 | 700;
  color?: Color.BlackRussian | Color.SantasGrey | Color.HanPurple;
  fontSize?: 16 | 17 | 20 | 24;
}

export const Text = styled.p<TextProps>`
  font-size: ${({ fontSize = 16 }) => fontSize}px;
  font-weight: ${({ weight = 600}) => weight};
  color: ${({color = Color.BlackRussian }) => color};
`;

interface DividerProps {
  display?: 'flex';
  flexDirection?: 'column'
}
export const Divider = styled.div<DividerProps>`
  display: ${({ display = 'block'}) => display};
  flex-direction: ${({ flexDirection = 'row'}) => flexDirection};
`;
