import NextYearBirthday from '../next-year-birthday/next-year-birthday';
import PeopleItem from '../people-item/people-item';
import { PeoplesType } from '../../types/people';

type SortBirthdayScreenType = {
  users: PeoplesType
}
function SortBirthdayScreen({users} : SortBirthdayScreenType): JSX.Element {
  const currentMonth = new Date().getMonth();
  const currentDay = new Date().getDay();
  const birthdayThisYear: PeoplesType = [];
  const birthdayNextYear: PeoplesType = [];

  users.forEach((element) => {
    const monthBirthday = new Date(element.birthday).getMonth();
    const dayBirthday = new Date(element.birthday).getDate();

    if (monthBirthday > currentMonth) {
      birthdayThisYear.push(element);
    } else if (monthBirthday === currentMonth) {
      if (dayBirthday > currentDay) {
        birthdayThisYear.push(element);
      } else {
        birthdayNextYear.push(element);
      }
    } else {
      birthdayNextYear.push(element);
    }
  });

  return (
    <>
      {
        birthdayThisYear.map((element) => (
          <PeopleItem key={element.id} element={element}/>
        ))
      }
      <NextYearBirthday />
      {
        birthdayNextYear.map((element) => (
          <PeopleItem key={element.id} element={element}/>
        ))
      }
    </>
  );
}

export default SortBirthdayScreen;
