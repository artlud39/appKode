import dayjs from 'dayjs';
import { PeopleType } from '../types/people';

export const humanizePhrone = (phone: string) : string => phone
  .replace(/(\+7|8)[\s(]?(\d{3})[\s)]?(\d{3})[\s-]?(\d{2})[\s-]?(\d{2})/g, '$1 ($2) $3 $4 $5');

export const humanizeBirthdayYear = (birthday : string) => dayjs().year() - dayjs(birthday).year();
export const humanizeBirthdayFull = (birthday : string) => dayjs(birthday).format('D MMMM YYYY');

export const getSortArrayAlphabet = (x: PeopleType, y: PeopleType) => {
  const fullNameX = `${x.firstName} ${x.lastName}`;
  const fullNameY = `${y.firstName} ${y.lastName}`;
  if (fullNameX < fullNameY) {return -1;}
  if (fullNameX > fullNameY) {return 1;}
  return 0;
};

export const getSortArrayBirthday = (x: PeopleType, y: PeopleType) => {
  if (Date.parse(x.birthday) < Date.parse(y.birthday)) {return -1;}
  if (Date.parse(x.birthday) > Date.parse(y.birthday)) {return 1;}
  return 0;
};

