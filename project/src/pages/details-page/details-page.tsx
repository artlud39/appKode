import { Navigate, useParams } from 'react-router-dom';
import Details from '../../components/details/deatail';
import { AppRoute } from '../../const';
import { useAppSelector } from '../../hooks';
import { DetailsPageStyled } from './style';


function DetailsPage(): JSX.Element {
  const people = useAppSelector((state) => state.people);
  const { id } = useParams();
  const humanActive = people.find((human) => human.id === id);

  if (!humanActive) {
    return <Navigate to={AppRoute.NotFound} />;
  }

  return (
    <DetailsPageStyled>
      <Details element={humanActive}/>
    </DetailsPageStyled>
  );
}

export default DetailsPage;
