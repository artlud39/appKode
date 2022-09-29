import { useAppDispatch } from '../../hooks';
import { mockPeople } from '../../mock/people';
import { changeDepartamentTypeAction } from '../../store/action';
import { getDepartaments } from '../../utils/utils';
import DepartmentItem from '../department-item/department-item';
import { DepartmentsListStyled } from './style';


function DepartmentsList(): JSX.Element {
  const departments = getDepartaments(mockPeople);

  const dispatch = useAppDispatch();

  const handleChangeDepartament = (filterType: string): void => {
    dispatch(changeDepartamentTypeAction(filterType));
  };

  return (
    <DepartmentsListStyled>
      {
        departments.map((element) => (
          <DepartmentItem
            key={element}
            departament={element}
            onDepartamentTypeClick={handleChangeDepartament}
          />
        ))
      }
    </DepartmentsListStyled>
  );
}

export default DepartmentsList;
