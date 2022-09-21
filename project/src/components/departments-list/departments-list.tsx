import { Departments } from '../../const';
import DepartmentItem from '../department-item/department-item';
import { DepartmentsListStyled } from './style';

const departments = [Departments.All, Departments.Designers, Departments.Analysts, Departments.Managers, Departments.Ios, Departments.Android];

function DepartmentsList(): JSX.Element {
  return (
    <DepartmentsListStyled>
      {
        departments.map((element) => (
          <DepartmentItem
            key={element}
          >
            {element}
          </DepartmentItem>
        ))
      }
    </DepartmentsListStyled>
  );
}

export default DepartmentsList;
