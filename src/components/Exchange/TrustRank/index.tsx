import styled from 'styled-components';
import { primary } from '../../../config/palette';

const TrustRank = ({ type = 'list', rank = 0 }) => {
  return (
    <Layout>
      <Title>Trust rank</Title>
      <Gap type={type} />
      <Info>
        <RankValue style={{ marginLeft: 6 }}>{rank}</RankValue>
      </Info>
    </Layout>
  );
};

export default TrustRank;

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

const RankValue = styled.div`
  max-width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
