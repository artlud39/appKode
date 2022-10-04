import { SortType } from '../../const';
import { useAppSelector } from '../../hooks';
import { getFilterPeople, getSortPeopleAlphabet, getSortPeopleBirthday } from '../../utils/utils';
import PeopleItem from '../people-item/people-item';
import { PeopleListStyled } from './style';

function PeopleList(): JSX.Element {
  const people = useAppSelector((state) => state.people);
  const sortType = useAppSelector((state) => state.activeSort);
  const activeDepartament = useAppSelector((state)=> state.departament);
  const filteredPeople = getFilterPeople([...people], activeDepartament);

  function getSortPeople() {
    switch(sortType) {
      case SortType.Alphabet :
        return filteredPeople.sort(getSortPeopleAlphabet);
      case SortType.Birthday :
        return filteredPeople.sort(getSortPeopleBirthday);
      default:
        return filteredPeople;
    }
  }
  const peopleads = getSortPeople();

  return (
    <PeopleListStyled>
      {
        peopleads.map((element) => (
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
