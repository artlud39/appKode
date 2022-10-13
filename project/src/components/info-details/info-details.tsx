import { humanizeBirthdayYear, humanizePhrone, humanizeBirthdayFull } from '../../utils/utils';
import { InfoDetailsStyled, PrhoneNumberLink, InfoDetailsText, InfoDetailsTextContainer } from './style';
import { PeopleType } from '../../types/people';
import { Color } from '../../types/style';

type DetailsProps = {
  element: PeopleType,
};

function InfoDetails({element}: DetailsProps): JSX.Element {

  const { phone, birthday } = element;
  const adaptivePhone = humanizePhrone(phone);
  const birthdayYear = humanizeBirthdayYear(birthday);
  const birthdayFull = humanizeBirthdayFull(birthday);

  return (
    <InfoDetailsStyled>
      <InfoDetailsTextContainer backgroundImage={'/img/star-icon.svg'} height={20} width={20}>
        <InfoDetailsText> {birthdayFull}</InfoDetailsText>
        <InfoDetailsText color={Color.SantasGrey}> {birthdayYear} years</InfoDetailsText>
      </InfoDetailsTextContainer>
      <InfoDetailsTextContainer backgroundImage={'/img/phone-icon.svg'} height={20} width={21}>
        <PrhoneNumberLink href={`tel:${phone}`}>{adaptivePhone}</PrhoneNumberLink>
      </InfoDetailsTextContainer>
    </InfoDetailsStyled>
  );
}

export default InfoDetails;
