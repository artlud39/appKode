import { StyledLink } from './style';

type DepartmentItemProps = {
  children: string,
};

function DepartmentItem({children}: DepartmentItemProps): JSX.Element {
  return (
    <li>
      <StyledLink href="todo#">{children}</StyledLink>
    </li>
  );
}

export default DepartmentItem;
