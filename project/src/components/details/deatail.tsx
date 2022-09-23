import { PeopleType } from '../../types/people';
import HeaderDetails from '../header-details/header-details';
import InfoDetails from '../info-details/info-details';
import { DetailsStyled } from './style';

type DetailsProps = {
  element: PeopleType,
};


function Details({element}: DetailsProps): JSX.Element {

  return (
    <DetailsStyled>
      <HeaderDetails element={element}/>
      <InfoDetails element={element}/>
    </DetailsStyled>

  );
}

export default Details;
