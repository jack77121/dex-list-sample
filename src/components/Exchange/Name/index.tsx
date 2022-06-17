import styled from 'styled-components';
import { primary } from '../../../config/palette';

const Name = ({ type = 'list', name = '', imgUrl = '' }) => {
  return (
    <Layout>
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

const Info = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const ExName = styled.div`
  max-width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
