import styled from 'styled-components';
import { Divider } from '../style-components/style';


export const NotFoundSearchStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  margin-top: 133px;
`;

export const NotFoundSearchImg = styled.img`
  display: block;
  width: 56px;
  height: 56px;
`;

export const NotFoundSearchDiv = styled(Divider)`
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;
