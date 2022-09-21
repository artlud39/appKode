import styled from 'styled-components';

export const StyledTitle = styled.h1`
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  margin: 0;
  padding: 12px;
  color: ${(props) => props.color || '#050510'};
`;
