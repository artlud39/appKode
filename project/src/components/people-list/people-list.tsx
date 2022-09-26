import { PeoplesType } from '../../types/people';
import { SortArrayAlphabet } from '../../utils/utils';
import PeopleItem from '../people-item/people-item';
import { PeopleListStyled } from './style';

type PeopleListProps = {
  people: PeoplesType,
};

function PeopleList({people}: PeopleListProps): JSX.Element {

  const addFullName = people.map((item) => ({
    ...item,
    fullName: `${item.firstName} ${item.lastName}`
  }));

  const sortPeopleAlphabet = [...addFullName].sort(SortArrayAlphabet);

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
