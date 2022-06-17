import styled from 'styled-components';
import { primary } from '../../../config/palette';

const TrustRank = ({ type = 'list', rank = 0 }) => {
  return (
    <Layout type={type}>
      <Title>Trust rank</Title>
      <Gap type={type} />
      <Info>
        <RankValue style={{ marginLeft: 6 }}>{rank}</RankValue>
      </Info>
    </Layout>
  );
};

export default TrustRank;

interface ITrustRank {
  type: string;
}

const Layout = styled.div<ITrustRank>`
  width: ${(props) => (props.type === 'list' ? 'auto' : '100%')};
  min-width: 220px;
  flex: 1;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  margin: ${(props) => (props.type === 'list' ? '0px 8px' : '8px 0px')};
`;

const Title = styled.div`
  color: ${primary.color};
  font-size: 18px;
`;

const Gap = styled.div<ITrustRank>`
  width: 16px;
  flex-grow: 1;
`;

const Info = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RankValue = styled.div`
  max-width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
