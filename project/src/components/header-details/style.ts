import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderDetailsStyled = styled.div`
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  background-color: #F7F7F8;
  width: 100%;
  min-height: 280px;
  padding-bottom: 24px;
`;

export const HeaderDetailsLinkContainer = styled.div`
  position: absolute;
  top: 24px;
  left: 24px;
`;

export const HeaderDetailsLink = styled(Link)`
  position: relative;
  display: flex;
  align-items: center;
  gap: 16px;
  text-decoration: none;
  padding: 15px;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 7px;
    height: 12px;
    background-image: url("/img/arrow-back.svg");
    background-position: 0 0;
    background-repeat: no-repeat;
    background-size: cover;
    transform: translate(-50%,-50%);
  }
`;

export const HeaderDetailsAvatar = styled.img`
  display: block;
  border-radius: 64px;
  width: 104px;
  height: 104px;
  filter:
    drop-shadow(0px 1px 5px rgba(22, 30, 52, 0.039))
    drop-shadow(0px 8px 12px rgba(22, 30, 52, 0.08));
`;

export const HeaderDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;

export const HeaderDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeaderDetailsName = styled.p`
  color: #050510;
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
`;

export const HeaderDetailsUserTag = styled.span`
  color: #97979B;
  font-weight: 400;
  font-size: 17px;
  line-height: 22px;
`;

export const HeaderDetailsUserPosition = styled.p`
  color: #55555C;
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
`;
