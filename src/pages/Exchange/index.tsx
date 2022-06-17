import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Header from '../../components/Header';
import { useParams } from 'react-router-dom';
import ExchangeCard from '../../components/Exchange';

export interface IExchangeInfo {
  name: string;
  year_established: number;
  country: string;
  description: string;
  url: string;
  image: string;
  facebook_url: string;
  reddit_url: string;
  telegram_url: string;
  slack_url: string;
  other_url_1: string;
  other_url_2: string;
  twitter_handle: string;
  has_trading_incentive: boolean;
  centralized: boolean;
  public_notice: string;
  alert_notice: string;
  trust_score: number;
  trust_score_rank: number;
  trade_volume_24h_btc: number;
  trade_volume_24h_btc_normalized: number;
  tickers: any[];
}

const Exchange = () => {
  const { exchangeId } = useParams();
  const [exchangeInfo, setExchangeInfo] = useState<IExchangeInfo>();

  useEffect(() => {
    if (exchangeId) {
      fetch(
        (process.env.REACT_APP_COINGECKO_EXCHANGE_API_URL || 'https://api.coingecko.com/api/v3/exchanges') +
          `/${exchangeId}`,
        { method: 'GET' }
      )
        .then((res) => res.json())
        .then((newData) => {
          setExchangeInfo(newData);
        })
        .catch((e) => {
          console.warn('have some error in loadExchangeData: ', e);
        });
    } else {
      console.log('exchangeId is undefined');
    }
  }, [exchangeId]);

  return (
    <Layout>
      <Header />
      {exchangeId && exchangeInfo ? (
        <ExchangeCard type="card" exInfo={exchangeInfo} />
      ) : (
        <div>Your request exchange is not exist.</div>
      )}
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
