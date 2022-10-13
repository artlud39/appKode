import Title from '../title/title';
import SearchInput from '../search-input/search-input';
import DepartmentsList from '../departments-list/departments-list';
import { HeaderStyled } from './style';

function Header(): JSX.Element {

  return (
    <HeaderStyled>
      <Title>Поиск</Title>
      <SearchInput />
      <DepartmentsList />
    </HeaderStyled>
  );
}

export default Header;
