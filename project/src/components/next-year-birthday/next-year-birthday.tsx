import { Line, NextYearBirthdayContainer, YearText } from './style';

function NextYearBirthday(): JSX.Element {

  return (
    <NextYearBirthdayContainer>
      <Line></Line>
      <YearText>{new Date().getFullYear() + 1}</YearText>
      <Line></Line>
    </NextYearBirthdayContainer>
  );
}

export default NextYearBirthday;
