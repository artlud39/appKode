import Header from '../../components/header/header';
import { mockPeople } from '../../mock/people';
import { AppWrapper } from './style';
// import LoadingError from '../../components/loading-error/loading-error';
import PeopleList from '../../components/people-list/people-list';
// import NotFoundSearch from '../../components/not-found-search/not-found-search';
// import { useAppSelector } from '../../hooks';


function MainPage(): JSX.Element {
  // const people = useAppSelector((state) => state.people);
  return (
    <AppWrapper>
      <Header/>
      <div>
        <PeopleList data={mockPeople}/>
        {/* <LoadingError /> */}
        {/* <NotFoundSearch /> */}
      </div>
    </AppWrapper>
  );
}

export default MainPage;
