import DepartmentItem from '../department-item/department-item';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeDepartamentTypeAction } from '../../store/action';
import { getDepartaments, getActiveDepartament } from '../../store/select';
import { DepartmentsListStyled } from './style';


function DepartmentsList(): JSX.Element {
  const departaments = useAppSelector(getDepartaments);
  const dispatch = useAppDispatch();
  const activeDepartament = useAppSelector(getActiveDepartament);

  const handleChangeDepartament = (filterType: string): void => {
    dispatch(changeDepartamentTypeAction(filterType));
  };

  return (
    <DepartmentsListStyled>
      {
        departaments.map((element) => (
          <DepartmentItem
            key={element}
            departament={element}
            activeDepartament={activeDepartament}
            onDepartamentTypeClick={handleChangeDepartament}
          />
        ))
      }
    </DepartmentsListStyled>
  );
}

export default DepartmentsList;
