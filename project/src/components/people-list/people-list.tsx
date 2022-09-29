import { useState, useEffect } from 'react';
import { SortType } from '../../const';
import { useAppSelector } from '../../hooks';
import { PeoplesType } from '../../types/people';
import { getSortArrayBirthday, getSortArrayAlphabet } from '../../utils/utils';
import PeopleItem from '../people-item/people-item';
import { PeopleListStyled } from './style';

type PeopleListProps = {
  data: PeoplesType,
};

function PeopleList({data}: PeopleListProps): JSX.Element {

  const sortType = useAppSelector((state) => state.activeSort);

  const [sortPeople, setSortPeople] = useState([...data]);

  useEffect(() => {
    switch(sortType) {
      case SortType.Alphabet :
        setSortPeople(() => sortPeople.sort(getSortArrayAlphabet));
        break;
      case SortType.Birthday :
        setSortPeople(() => sortPeople.sort(getSortArrayBirthday));
        break;
      default:
        setSortPeople(sortPeople);
    }
  }, [sortPeople, sortType]);

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
