import Header from '../../components/header/header';
import { AppWrapper } from './style';
// import LoadingError from '../../components/loading-error/loading-error';
import PeopleList from '../../components/people-list/people-list';
import { useAppSelector } from '../../hooks';
import Loading from '../../components/loading/loading';


function MainPage(): JSX.Element {

  const isPeopleLoaded = useAppSelector((state) => state.isDataLoaded);

  return (
    <AppWrapper>
      <Header/>
      <div>
        { isPeopleLoaded ?
          <PeopleList />
          : <Loading />}
        {/* <LoadingError /> */}
      </div>
    </AppWrapper>
  );
}

export default MainPage;
