import NotFoundSearch from '../not-found-search/not-found-search';
import PeopleItem from '../people-item/people-item';
import SortBirthdayScreen from '../sort-birthday-screen/sort-birthday-screen';
import { useAppSelector } from '../../hooks';
import { getPeople, getAcvtiveSort, getActiveDepartament, getQuery } from '../../store/select';
import { getFilterPeople, getSortCustom, getSortPeopleAlphabet, getSortPeopleBirthday } from '../../utils/utils';
import { SortType } from '../../const';
import { PeopleListStyled } from './style';

function PeopleList(): JSX.Element {
  const people = useAppSelector(getPeople);
  const sortType = useAppSelector(getAcvtiveSort);
  const activeDepartament = useAppSelector(getActiveDepartament);
  const filteredPeople = getFilterPeople([...people], activeDepartament);
  const query = useAppSelector(getQuery);

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

  if (sortPeople.length === 0) {
    return <NotFoundSearch />;
  }

  if (sortType === SortType.Birthday) {
    return <SortBirthdayScreen users={sortPeople}/>;
  }

  return (
    <PeopleListStyled>
      {
        sortPeople.map((element) => (
          <PeopleItem
            key={element.id}
            element={element}
          />
        ))
      }
    </PeopleListStyled>
  );
}

export default PeopleList;
