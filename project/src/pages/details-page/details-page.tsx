import Details from '../../components/details/deatail';
import { useAppSelector } from '../../hooks';
import { DetailsPageStyled } from './style';


function DetailsPage(): JSX.Element {

  const humanActive = useAppSelector((state)=> state.people[1]);

  return (
    <DetailsPageStyled>
      <Details element={humanActive}/>
    </DetailsPageStyled>
  );
}

export default DetailsPage;
