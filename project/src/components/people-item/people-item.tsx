import { PeopleType } from '../../types/people';
import { getHumanUrl } from '../../utils/utils';
import { PeopleItemStyled, PeopleItemStyledAvatar, PeopleItemStyledLink, PeopleItemStyledName, PeopleItemStyledUserPosition, PeopleItemStyledUserTag } from './style';

type PeopleItemProps = {
  element: PeopleType,
};

function PeopleItem({element}: PeopleItemProps): JSX.Element {
  const { id, avatarUrl, firstName, lastName, userTag, position } = element;
  return (
    <PeopleItemStyled>
      <PeopleItemStyledLink to={getHumanUrl(id)}>
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
