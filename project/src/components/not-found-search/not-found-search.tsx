import { Color } from '../../types/style';
import { NotFoundSearchDiv, NotFoundSearchImg, NotFoundSearchStyled } from './style';
import { Divider, Text } from '../style-components/style';

function NotFoundSearch(): JSX.Element {
  return (
    <NotFoundSearchStyled>
      <Divider>
        <NotFoundSearchImg src="./img/not-found-search-icon.png" alt="лупа поиска" />
      </Divider>
      <NotFoundSearchDiv display={'flex'} flexDirection={'column'}>
        <Text fontSize={17}>Мы никого не нашли</Text>
        <Text weight={400} color={Color.SantasGrey}>Попробуй скорректировать запрос</Text>
      </NotFoundSearchDiv>
    </NotFoundSearchStyled>
  );
}

export default NotFoundSearch;
