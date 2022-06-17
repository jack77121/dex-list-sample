import styled from 'styled-components';
import { primary } from '../../../config/palette';

const Country = ({ type = 'list', countryName = '' }) => {
  return (
    <Layout>
      <Title>Ctry</Title>
      <Gap type={type} />
      <Info>
        <CtryName style={{ marginLeft: 6 }}>{countryName}</CtryName>
      </Info>
    </Layout>
  );
};

export default Country;

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

const CtryName = styled.div`
  /* width: 100px; */
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
