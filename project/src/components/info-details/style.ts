import styled from 'styled-components';
import { Color } from '../../types/style';


export const InfoDetailsStyled = styled.div`

`;

interface TextProps {
  weight?: 200 | 300 | 400 | 500 | 600 | 700;
  color?: Color.BlackRussian | Color.SantasGrey | Color.HanPurple;
  fontSize?: 16 | 17 | 20 | 24;
}

interface InfoDetailsProps {
  backgroundImage?: string;
  height?: number;
  width?: number;
}

export const InfoDetailsTextContainer = styled.div<InfoDetailsProps>`
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 22px 0;
  padding-left: 52px;
  padding-right: 18px;

  ::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 16px;
    height: ${({ height}) => height}px;
    width: ${({ width}) => width}px;
    background-image: url(${({ backgroundImage}) => backgroundImage});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 0 0;
    transform: translateY(-50%);
  }
`;

export const InfoDetailsText = styled.p<TextProps>`
  color: ${({color = Color.BlackRussian }) => color};
  font-weight: ${({ weight = 500}) => weight};
  font-size: ${({ fontSize = 16 }) => fontSize}px;
  line-height: 20px;
`;

export const PrhoneNumberLink = styled.a<TextProps>`
  color: #050510;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  text-decoration: none;
`;
