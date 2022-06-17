import { useEffect } from 'react';
import styled from 'styled-components';
import Header from '../../components/Header';
import { useSearchParams } from 'react-router-dom';
import { IData } from '../Landing';

const Exchange = () => {
  const [urlQuery] = useSearchParams();

  useEffect(() => {
    const exChangeId = urlQuery.get('id');
    console.log('query exchange id: ', exChangeId);
    const tmpData = localStorage.getItem('exchange-list@exchange-list-sample');
    if (tmpData) {
      const storageExchange: IData[] = JSON.parse(tmpData);
      const targetExchange = storageExchange.find((exchange) => exchange.id === exChangeId);
      if (targetExchange) {
        console.log('target exchange: ', targetExchange);
      } else {
        console.log('target exchange is not exist');
      }
    } else {
      console.log('local storage is empty');
    }
  }, [urlQuery]);

  return (
    <Layout>
      <Header />
      Exchange
    </Layout>
  );
};

export default Exchange;

const Layout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
