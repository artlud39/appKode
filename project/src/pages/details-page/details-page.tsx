import Details from '../../components/details/deatail';
import { DetailsPageStyled } from './style';
import { mockPeople } from '../../mock/people';


function DetailsPage(): JSX.Element {

  return (
    <DetailsPageStyled>
      <Details element={mockPeople[1]}/>
    </DetailsPageStyled>
  );
}

export default DetailsPage;
