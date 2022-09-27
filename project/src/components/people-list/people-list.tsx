import { useState } from 'react';
import { PeoplesType } from '../../types/people';
import { getSortArrayBirthday, getSortArrayAlphabet } from '../../utils/utils';
import PeopleItem from '../people-item/people-item';
import { PeopleListStyled } from './style';

type PeopleListProps = {
  data: PeoplesType,
};

function PeopleList({data}: PeopleListProps): JSX.Element {

  const [sortPeople, setSortPeople] = useState([...data]);

  const sortPeopleAlphabet = [...data].sort(getSortArrayAlphabet);
  const sortPeopleBirthday = [...data].sort(getSortArrayBirthday);

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
