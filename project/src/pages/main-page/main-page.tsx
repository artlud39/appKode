import Header from '../../components/header/header';
import PeopleList from '../../components/people-list/people-list';
import { mockPeople } from '../../mock/people';
import { AppWrapper } from './style';


function MainPage(): JSX.Element {

  return (
    <AppWrapper>
      <Header />
      <div>
        <PeopleList people={mockPeople}/>
      </div>

    </AppWrapper>
  );
}

export default MainPage;
