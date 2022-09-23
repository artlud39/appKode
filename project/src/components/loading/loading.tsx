import { DividerLoading, LoadingInner, LoadingWrapper} from './style';

function Loading(): JSX.Element {
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
