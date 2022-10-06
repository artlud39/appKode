import dayjs from 'dayjs';
import Fuse from 'fuse.js';
import { AppRoute, DEFAULT_DEPARTAMENT, Departments } from '../const';
import { PeopleType, PeoplesType } from '../types/people';

export const humanizePhrone = (phone: string) : string => phone
  .replace(/(\+7|8)[\s(]?(\d{3})[\s)]?(\d{3})[\s-]?(\d{2})[\s-]?(\d{2})/g, '$1 ($2) $3 $4 $5');

export const humanizeBirthdayYear = (birthday : string) => dayjs().year() - dayjs(birthday).year();
export const humanizeBirthdayFull = (birthday : string) => dayjs(birthday).format('D MMMM YYYY');
export const humanizeBirthdayDayMonth = (birthday : string) => dayjs(birthday).format('D MMM');

export const getSortPeopleAlphabet = (x: PeopleType, y: PeopleType) => {
  const fullNameX = `${x.firstName} ${x.lastName}`;
  const fullNameY = `${y.firstName} ${y.lastName}`;
  if (fullNameX < fullNameY) {return -1;}
  if (fullNameX > fullNameY) {return 1;}
  return 0;
};

export const getSortPeopleBirthday = (x: PeopleType, y: PeopleType) => {
  if (Date.parse(x.birthday) < Date.parse(y.birthday)) {return -1;}
  if (Date.parse(x.birthday) > Date.parse(y.birthday)) {return 1;}
  return 0;
};


export const getDepartaments = (people: PeoplesType): string[] =>
  [Departments.All, ...new Set(people.map((person) => person.department))];

export const getFilterPeople = (people: PeoplesType, activeDepartament: string) => {
  if (activeDepartament === DEFAULT_DEPARTAMENT) {
    return people;
  }
  return people.filter((person) => person.department === activeDepartament);
};

export const getHumanUrl = (id: string): string => `/${AppRoute.Details.replace(':id', `${id}`)}`;

export const getSortCustom = (sortPeople: PeoplesType, query : string) => {
  const fuse = new Fuse(sortPeople, {
    keys: ['firstName','lastName','userTag'],
  });
  const results = fuse.search(query);
  const peopleResults = query ? results.map((result) => result.item) : sortPeople;
  return peopleResults;
};
