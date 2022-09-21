import { StyledTitle } from './style';

type TitileProps = {
  children: string,
  color?: string,
};

function Title(props : TitileProps): JSX.Element {

  return (
    <StyledTitle {...props}/>
  );
}

export default Title;
