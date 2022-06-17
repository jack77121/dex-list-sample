import styled from 'styled-components';

const Name = ({ type = 'list', name = '', imgUrl = '' }) => {
  return (
    <Layout type={type}>
      <Info type={type}>
        <img
          style={{ width: `${type === 'list' ? 32 : 64}px`, height: `${type === 'list' ? 32 : 64}px` }}
          src={imgUrl}
          alt={`${name}-icon`}
        />
        <ExName type={type}>{name}</ExName>
      </Info>
    </Layout>
  );
};

export default Name;

interface IName {
  type: string;
}

const Layout = styled.div<IName>`
  width: ${(props) => (props.type === 'list' ? '220px' : '100%')};
  display: flex;
  box-sizing: border-box;
  margin: ${(props) => (props.type === 'list' ? '0px 8px' : '8px 0px')};
`;

const Info = styled.div<IName>`
  width: 100%;
  display: flex;
  justify-content: ${(props) => (props.type === 'list' ? 'flex-start' : 'center')};
  align-items: center;
`;

const ExName = styled.div<IName>`
  max-width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-left: 6px;
  font-size: ${(props) => (props.type === 'list' ? 'inherit' : '32px')};
`;
