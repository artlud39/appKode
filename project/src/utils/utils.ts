import dayjs from 'dayjs';

export const humanizePhrone = (phone: string) : string => phone
  .replace(/(\+7|8)[\s(]?(\d{3})[\s)]?(\d{3})[\s-]?(\d{2})[\s-]?(\d{2})/g, '$1 ($2) $3 $4 $5');

export const humanizeBirthdayYear = (birthday : string) => dayjs().year() - dayjs(birthday).year();
export const humanizeBirthdayFull = (birthday : string) => dayjs(birthday).format('D MMMM YYYY');

export function SortArrayAlphabet(x: any, y: any) {
  if (x.fullName < y.fullName) {return -1;}
  if (x.fullName > y.fullName) {return 1;}
  return 0;
}
