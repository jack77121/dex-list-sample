import styled from 'styled-components';
import { primary } from '../../../config/palette';

const Name = ({ type = 'list', name = '', imgUrl = '' }) => {
  return (
    <Layout>
      <Title>EX</Title>
      <Gap type={type} />
      <Info>
        <img style={{ width: 32, height: 32 }} src={imgUrl} alt={`${name}-icon`} />
        <ExName style={{ marginLeft: 6 }}>{name}</ExName>
      </Info>
    </Layout>
  );
};

export default Name;

interface IName {
  type: string;
}

const Layout = styled.div`
  width: 220px;
  display: flex;
  box-sizing: border-box;
  margin: 0px 8px;
`;

const Title = styled.div`
  color: ${primary.color};
  font-size: 18px;
`;

const Gap = styled.div<IName>`
  width: 16px;
  flex-grow: ${(props) => (props.type === 'list' ? 1 : 0)};
`;

const Info = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ExName = styled.div`
  max-width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
