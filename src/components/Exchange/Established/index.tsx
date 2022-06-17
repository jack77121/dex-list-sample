import styled from 'styled-components';
import { primary } from '../../../config/palette';

const EstablishedYear = ({ type = 'list', year = 0 }) => {
  return (
    <Layout type={type}>
      <Title>Established Year</Title>
      <Gap type={type} />
      <Info>
        <YearValue style={{ marginLeft: 6 }}>{year}</YearValue>
      </Info>
    </Layout>
  );
};

export default EstablishedYear;

interface IEstablishedYear {
  type: string;
}

const Layout = styled.div<IEstablishedYear>`
  width: ${(props) => (props.type === 'list' ? '220px' : '100%')};
  display: flex;
  box-sizing: border-box;
  align-items: center;
  margin: ${(props) => (props.type === 'list' ? '0px 8px' : '8px 0px')};
`;

const Title = styled.div`
  color: ${primary.color};
  font-size: 18px;
`;

const Gap = styled.div<IEstablishedYear>`
  width: 16px;
  flex-grow: 1;
`;

const Info = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const YearValue = styled.div`
  max-width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
