import styled from 'styled-components';
import { primary } from '../../../config/palette';

const ExUrl = ({ type = 'list', exUrl = '' }) => {
  return (
    <Layout type={type}>
      <Title>Site</Title>
      <Gap type={type} />
      <Info type={type}>
        <a
          style={{ textDecoration: 'none', color: `${primary.gray}`, fontWeight: 'bold' }}
          href={exUrl}
          target="_blank"
          rel="noreferrer"
        >
          {exUrl}
        </a>
      </Info>
    </Layout>
  );
};

export default ExUrl;

interface IExUrl {
  type: string;
}
const Layout = styled.div<IExUrl>`
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

const Gap = styled.div<IExUrl>`
  width: 16px;
  flex-grow: 1;
`;

const Info = styled.div<IExUrl>`
  display: inline-block;
  position: relative;
  line-height: 32px;
  width: ${(props) => (props.type === 'list' ? '150px' : '100%')};
  text-align: right;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
