import { Color } from '../../types/style';
import { StyledLink } from './style';

type DepartmentItemProps = {
  activeDepartament: string,
  departament: string,
  onDepartamentTypeClick: (departament: string) => void;
};

function DepartmentItem({departament, activeDepartament, onDepartamentTypeClick}: DepartmentItemProps): JSX.Element {

  const handleGenreClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onDepartamentTypeClick(departament);
  };

  return (
    <li>
      <StyledLink
        to={`/${departament}`}
        onClick={handleGenreClick}
        borderсolor={departament === activeDepartament ? Color.HanPurple : Color.Transparent}
        color={ Color.HanPurple}
      >
        {departament}
      </StyledLink>
    </li>
  );
}

export default DepartmentItem;
