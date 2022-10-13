import styled from 'styled-components';
import { Divider } from '../style-components/style';

export const LoadingErrorStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  margin-top: 133px;
`;

export const LoadingErrorImg = styled.img`
  display: block;
  width: 56px;
  height: 56px;
`;

export const DividerLoadingError = styled(Divider)`
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

export const LinkReload = styled.a`
  font-size: 16px;
  font-weight: 600;
  color: ${({color }) => color};
  text-decoration: none;
`;
