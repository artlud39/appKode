import { SortType } from '../../const';
import { useAppSelector } from '../../hooks';
import { getFilterPeople, getSortCustom, getSortPeopleAlphabet, getSortPeopleBirthday } from '../../utils/utils';
import NotFoundSearch from '../not-found-search/not-found-search';
import PeopleItem from '../people-item/people-item';
import { PeopleListStyled } from './style';

function PeopleList(): JSX.Element {
  const people = useAppSelector((state) => state.people);
  const sortType = useAppSelector((state) => state.activeSort);
  const activeDepartament = useAppSelector((state)=> state.departament);
  const filteredPeople = getFilterPeople([...people], activeDepartament);
  const query = useAppSelector((state)=> state.query);

  function getSortPeople() {
    switch(sortType) {
      case SortType.Alphabet :
        return filteredPeople.sort(getSortPeopleAlphabet);
      case SortType.Birthday :
        return filteredPeople.sort(getSortPeopleBirthday);
      case SortType.Custom :
        return getSortCustom(filteredPeople, query);
      default:
        return filteredPeople;
    }
  }

  const sortPeople = getSortPeople();

  return (
    <PeopleListStyled>
      { sortPeople.length !== 0 ?
        sortPeople.map((element) => (
          <PeopleItem
            key={element.id}
            element={element}
          />
        ))
        : <NotFoundSearch />}
    </PeopleListStyled>
  );
}

export default PeopleList;

