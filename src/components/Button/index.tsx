import styled from 'styled-components';
import { primary } from '../../config/palette';

interface IButton {
  disabled?: boolean;
  title: string;
  onClick?: React.MouseEventHandler;
}

const Button: React.FC<IButton> = ({ title, disabled = false, onClick }) => {
  return (
    <Layout disabled={disabled} onClick={onClick}>
      {title}
    </Layout>
  );
};

export default Button;

const Layout = styled.button`
  width: 100%;
  font-size: 20px;
  color: white;
  background-color: ${primary.color};
  border-radius: 25px;
  border: 1px solid ${primary.color};
  cursor: pointer;
  padding: 6px;
`;
