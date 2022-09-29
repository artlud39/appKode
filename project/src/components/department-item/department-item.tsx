import { StyledLink } from './style';

type DepartmentItemProps = {
  departament: string,
  onDepartamentTypeClick: (departament: string) => void;
};

function DepartmentItem({departament, onDepartamentTypeClick}: DepartmentItemProps): JSX.Element {

  const handleGenreClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onDepartamentTypeClick(departament);
  };

  return (
    <li>
      <StyledLink to={`/${departament}`} onClick={handleGenreClick}>{departament}</StyledLink>
    </li>
  );
}

export default DepartmentItem;
