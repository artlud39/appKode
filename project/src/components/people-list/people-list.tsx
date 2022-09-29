import { useState, useEffect } from 'react';
import { SortType } from '../../const';
import { useAppSelector } from '../../hooks';
import { PeoplesType } from '../../types/people';
import { getFilterPeople, getSortPeopleAlphabet, getSortPeopleBirthday } from '../../utils/utils';
import PeopleItem from '../people-item/people-item';
import { PeopleListStyled } from './style';

type PeopleListProps = {
  data: PeoplesType,
};

function PeopleList({data}: PeopleListProps): JSX.Element {

  const sortType = useAppSelector((state) => state.activeSort);

  const [people, setPeople] = useState([...data]);

  useEffect(() => {
    switch(sortType) {
      case SortType.Alphabet :
        setPeople(() => people.sort(getSortPeopleAlphabet));
        break;
      case SortType.Birthday :
        setPeople(() => people.sort(getSortPeopleBirthday));
        break;
      default:
        setPeople(people);
    }
  }, [people, sortType]);

  const activeDepartament = useAppSelector((state)=> state.departament);
  const filteredPeople = getFilterPeople(people, activeDepartament);

  return (
    <PeopleListStyled>
      {
        filteredPeople.map((element) => (
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
