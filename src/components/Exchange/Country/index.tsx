import styled from 'styled-components';
import { primary } from '../../../config/palette';

const Country = ({ type = 'list', countryName = '' }) => {
  return (
    <Layout type={type}>
      <Title>Ctry</Title>
      <Gap type={type} />
      <Info>
        <CtryName style={{ marginLeft: 6 }}>{countryName}</CtryName>
      </Info>
    </Layout>
  );
};

export default Country;

interface ICountry {
  type: string;
}

const Layout = styled.div<ICountry>`
  width: ${(props) => (props.type === 'list' ? 'auto' : '100%')};
  min-width: 220px;
  flex: 1;
  display: flex;
  box-sizing: border-box;
  align-items: center;
  margin: ${(props) => (props.type === 'list' ? '0px 8px' : '8px 0px')};
`;

const Title = styled.div`
  color: ${primary.color};
  font-size: 18px;
`;

const Gap = styled.div<ICountry>`
  width: 16px;
  flex-grow: 1;
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
