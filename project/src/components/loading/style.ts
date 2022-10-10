import styled from 'styled-components';

interface DividerLoadingProps {
  borderRadius?: number;
  width?: number;
  height?: number;
}
export const LoadingWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding-top: 16px;
`;

export const LoadingInner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const DividerLoading = styled.div<DividerLoadingProps>`
  border-radius: ${({ borderRadius = 50 }) => borderRadius}px;
  background: linear-gradient(90deg, #F3F3F6 0%, #FAFAFA 100%);
  width: ${({ width}) => width}px;
  height: ${({ height}) => height}px;
`;

