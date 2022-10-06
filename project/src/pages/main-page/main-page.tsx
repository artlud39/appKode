/* eslint-disable no-nested-ternary */
import Header from '../../components/header/header';
import { AppWrapper } from './style';
import PeopleList from '../../components/people-list/people-list';
import { useAppSelector } from '../../hooks';
import Loading from '../../components/loading/loading';
import LoadingError from '../../components/loading-error/loading-error';

function MainPage(): JSX.Element {

  const isPeopleLoaded = useAppSelector((state) => state.isDataLoaded);
  const isPeopleError = useAppSelector((state) => state.error);

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
