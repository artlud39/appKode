export enum Departments {
  All = 'Все',
  Designers = 'Designers',
  Analysts = 'Analysts',
  Managers = 'Managers',
  Ios = 'iOS',
  Android = 'Android',
}

export enum AppRoute {
  Main = '/',
  Details = 'details/:id',
  NotFound = '*',
}
export enum SortType {
  Alphabet = 'alphabet',
  Birthday = 'birthday',
  Custom = 'custom',
}

export const BACKEND_URL = 'https://stoplight.io/mocks/kode-frontend-team/koder-stoplight/86566464/users?__example=all&__dynamic=true';
export const REQUEST_TIMEOUT = 5000;
export const DEFAULT_DEPARTAMENT = 'Все';
