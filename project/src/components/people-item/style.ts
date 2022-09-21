import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const PeopleItemStyled = styled.li`
  display: flex;
  padding-bottom: 6px;
`;

export const PeopleItemStyledLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 16px;
  text-decoration: none;
`;

export const PeopleItemStyledAvatar = styled.img`
  display: flex;
  border-radius: 50%;
  width: 72px;
  height: 72px;
`;

export const PeopleItemStyledName = styled.p`
  color: #050510;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
`;

export const PeopleItemStyledUserTag = styled.span`
  color: #97979B;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
`;

export const PeopleItemStyledUserPosition = styled.p`
  color: #55555C;
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
`;
