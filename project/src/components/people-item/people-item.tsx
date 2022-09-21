import { AppRoute } from '../../const';
import { PeopleType } from '../../types/people';
import { PeopleItemStyled, PeopleItemStyledAvatar, PeopleItemStyledLink, PeopleItemStyledName, PeopleItemStyledUserPosition, PeopleItemStyledUserTag } from './style';

type PeopleItemProps = {
  element: PeopleType,
};

function PeopleItem({element}: PeopleItemProps): JSX.Element {
  const { avatarUrl, firstName, lastName, userTag, position } = element;
  return (
    <PeopleItemStyled>
      <PeopleItemStyledLink to={AppRoute.Details}>
        <div>
          <PeopleItemStyledAvatar src={avatarUrl} alt={`Сотрудник ${firstName} ${lastName}`} />
        </div>
        <div>
          <PeopleItemStyledName>{firstName} {lastName} <PeopleItemStyledUserTag>{userTag}</PeopleItemStyledUserTag></PeopleItemStyledName>
          <PeopleItemStyledUserPosition>{position}</PeopleItemStyledUserPosition>
        </div>
      </PeopleItemStyledLink>
    </PeopleItemStyled>
  );
}

export default PeopleItem;
