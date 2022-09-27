import Header from '../../components/header/header';
import { mockPeople } from '../../mock/people';
import { AppWrapper } from './style';
// import LoadingError from '../../components/loading-error/loading-error';
import PeopleList from '../../components/people-list/people-list';


function MainPage(): JSX.Element {
  return (
    <AppWrapper>
      <Header/>
      <div>
        <PeopleList data={mockPeople}/>
        {/* <LoadingError /> */}
      </div>
    </AppWrapper>
  );
}

export default MainPage;
