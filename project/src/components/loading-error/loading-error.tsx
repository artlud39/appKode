import { Color } from '../../types/style';
import { DividerLoadingError, LoadingErrorImg, LoadingErrorStyled, LinkReload } from './style';
import { Divider, Text } from '../style-components/style';

function LoadingError(): JSX.Element {
  return (
    <LoadingErrorStyled>
      <Divider>
        <LoadingErrorImg src="./img/flying-saucer.png" alt="Летающая тарелка" />
      </Divider>
      <DividerLoadingError display={'flex'} flexDirection={'column'}>
        <Text fontSize={17}>Какой-то сверхразум все сломал</Text>
        <Text weight={400} color={Color.SantasGrey}>Постараемся быстро починить</Text>
        <LinkReload href="#" color={Color.HanPurple}>Попробовать снова</LinkReload>
      </DividerLoadingError>
    </LoadingErrorStyled>
  );
}

export default LoadingError;
