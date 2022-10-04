import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeDepartamentTypeAction } from '../../store/action';
import DepartmentItem from '../department-item/department-item';
import { DepartmentsListStyled } from './style';


function DepartmentsList(): JSX.Element {
  const departaments = useAppSelector((state) => state.departaments);
  const dispatch = useAppDispatch();

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
            onDepartamentTypeClick={handleChangeDepartament}
          />
        ))
      }
    </DepartmentsListStyled>
  );
}

export default DepartmentsList;
