import { PeoplesType } from '../../types/people';
import PeopleItem from '../people-item/people-item';
import { PeopleListStyled } from './style';

type PeopleListProps = {
  people: PeoplesType,
};

function PeopleList({people}: PeopleListProps): JSX.Element {
  return (
    <PeopleListStyled>
      {
        people.map((element) => (
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
