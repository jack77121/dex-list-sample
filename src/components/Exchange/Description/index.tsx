import styled from 'styled-components';
import { primary } from '../../../config/palette';

const Description = ({ type = 'list', descValue = '' }) => {
  return (
    <Layout type={type}>
      <Title>Description</Title>
      <Info>
        <DescValue style={{ marginLeft: 6 }}>{descValue || '(no description)'}</DescValue>
      </Info>
    </Layout>
  );
};

export default Description;

interface IDescription {
  type: string;
}

const Layout = styled.div<IDescription>`
  width: ${(props) => (props.type === 'list' ? '220px' : '100%')};
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  margin: ${(props) => (props.type === 'list' ? '0px 8px' : '0px')};
`;

const Title = styled.div`
  color: ${primary.color};
  font-size: 18px;
`;

const Info = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DescValue = styled.div`
  max-width: 100%;
`;
