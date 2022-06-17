import styled from 'styled-components';
import { primary } from '../../config/palette';

const Header = () => {
  return (
    <Layout>
      <Title>EX list sample</Title>
    </Layout>
  );
};

export default Header;

const Layout = styled.div`
  width: 100%;
  height: 64px;
  background-color: ${primary.color};
  box-sizing: border-box;
  padding: 0 32px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  font-size: 32px;
  color: white;
  font-family: Montserrat;
  font-weight: bold;
`;
