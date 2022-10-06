import { SortType } from '../../const';
import { useAppSelector } from '../../hooks';
import { PeopleType } from '../../types/people';
import { getHumanUrl, humanizeBirthdayDayMonth } from '../../utils/utils';
import { PeopleItemBirthday, PeopleItemStyled, PeopleItemStyledAvatar, PeopleItemStyledLink, PeopleItemStyledName, PeopleItemStyledUserPosition, PeopleItemStyledUserTag } from './style';

type PeopleItemProps = {
  element: PeopleType,
};

function PeopleItem({element}: PeopleItemProps): JSX.Element {
  const { id, avatarUrl, firstName, lastName, userTag, position, birthday } = element;
  const sortType = useAppSelector((state) => state.activeSort);
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
      {
        sortType === SortType.Birthday &&
        <div>
          <PeopleItemBirthday>{humanizeBirthdayDayMonth(birthday)}</PeopleItemBirthday>
        </div>
      }

    </PeopleItemStyled>
  );
}

export default PeopleItem;
