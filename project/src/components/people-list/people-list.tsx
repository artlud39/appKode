import { useEffect } from 'react';
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

  useEffect(() => {
    switch(sortType) {
      case SortType.Alphabet :
        data.sort(getSortPeopleAlphabet);
        break;
      case SortType.Birthday :
        data.sort(getSortPeopleBirthday);
        break;
    }
  }, [data, sortType]);

  const activeDepartament = useAppSelector((state)=> state.departament);
  const filteredPeople = getFilterPeople(data, activeDepartament);

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
