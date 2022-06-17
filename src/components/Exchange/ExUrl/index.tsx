import styled from 'styled-components';
import { primary } from '../../../config/palette';
import { Link } from 'react-router-dom';

const ExUrl = ({ type = 'list', exUrl = '' }) => {
  return (
    <Layout>
      <Title>Site</Title>
      <Gap type={type} />
      <Info>
        <Link style={{ textDecoration: 'none', color: '#bbbec7' }} to={exUrl} target="_blank">
          {exUrl}
        </Link>
      </Info>
    </Layout>
  );
};

export default ExUrl;

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
  display: inline-block;
  position: relative;
  line-height: 32px;
  /* top: 10%; */
  /* justify-content: flex-end; */
  /* align-items: center; */
  /* margin: auto 0; */
  width: 150px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
