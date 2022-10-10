import { AppRoute } from '../../const';
import { PeopleType } from '../../types/people';
import { HeaderDetailsStyled, HeaderDetailsLink, HeaderDetailsAvatar, HeaderDetailsLinkContainer , HeaderDetailsName, HeaderDetailsUserTag, HeaderDetailsUserPosition, HeaderDetailsContainer, HeaderDetailsWrapper } from './style';

type DetailsProps = {
  element: PeopleType,
};


function HeaderDetails({element}: DetailsProps): JSX.Element {

  const { avatarUrl, firstName, lastName, userTag, position } = element;

  return (
    <HeaderDetailsStyled>
      <HeaderDetailsLinkContainer>
        <HeaderDetailsLink to={AppRoute.Main}>
          <span className='visually-hidden'>Назад</span>
        </HeaderDetailsLink>
      </HeaderDetailsLinkContainer>
      <HeaderDetailsWrapper>
        <div>
          <HeaderDetailsAvatar src={avatarUrl} alt={`Сотрудник ${firstName} ${lastName}`} />
        </div>
        <HeaderDetailsContainer>
          <HeaderDetailsName>{firstName} {lastName} <HeaderDetailsUserTag>{userTag}</HeaderDetailsUserTag></HeaderDetailsName>
          <HeaderDetailsUserPosition>{position}</HeaderDetailsUserPosition>
        </HeaderDetailsContainer>
      </HeaderDetailsWrapper>
    </HeaderDetailsStyled>
  );
}

export default HeaderDetails;
