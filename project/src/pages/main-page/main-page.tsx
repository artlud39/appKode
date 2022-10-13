/* eslint-disable no-nested-ternary */
import Header from '../../components/header/header';
import PeopleList from '../../components/people-list/people-list';
import Loading from '../../components/loading/loading';
import LoadingError from '../../components/loading-error/loading-error';
import { useAppSelector } from '../../hooks';
import { selectError, selectLoaded } from '../../store/select';
import { AppWrapper } from './style';

function MainPage(): JSX.Element {

  const isPeopleLoaded = useAppSelector(selectLoaded);
  const isPeopleError = useAppSelector(selectError);

  return (
    <AppWrapper>
      <Header/>
      <div>
        { isPeopleLoaded ?
          <PeopleList />
          : isPeopleError ? <LoadingError /> : <Loading />}
      </div>
    </AppWrapper>
  );
}

export default MainPage;
