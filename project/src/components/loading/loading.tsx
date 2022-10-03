import { DividerLoading, LoadingInner, LoadingWrapper} from './style';
import { nanoid } from 'nanoid';

function Loading() {
  const emptyList = [];
  for (let i = 0; i < 10; i++) {
    emptyList.push(<LoadingItem key={nanoid()}/>);
  }

  return (
    <div>
      {emptyList}
    </div>
  );
}

function LoadingItem(): JSX.Element {

  return (
    <LoadingWrapper>
      <div>
        <DividerLoading width={72} height={72}></DividerLoading>
      </div>
      <LoadingInner>
        <DividerLoading width={144} height={16}></DividerLoading>
        <DividerLoading width={80} height={12}></DividerLoading>
      </LoadingInner>
    </LoadingWrapper>
  );
}

export default Loading;
