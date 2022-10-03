import styled from 'styled-components';

export const SearchInputContainer = styled.div`
  display: flex;
  position: relative;
`;

export const ContainerSearchIcon = styled.div`
  display: block;
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
`;

export const ButtonStyled = styled.button`
  display: block;
  position: absolute;
  right: 12px;
  top: 50%;
  border: none;
  background-color: transparent;
  cursor: pointer;
  transform: translateY(-50%);
`;

export const SearchInputBar = styled.input.attrs(() => ({
  type: 'search',
  placeholder: 'Введи имя, тег, почту...',
}))`
  position: relative;
  width: 100%;
  border: none;
  border-radius: 16px;
  padding: 8px 44px;
  background: #F7F7F8;
  min-height: 40px;
  font-size: 15px;
  font-weight: 500;

  ::placeholder {
    color: #C3C3C6;
    font-size: 15px;
    font-weight: 500;
  }
`;


