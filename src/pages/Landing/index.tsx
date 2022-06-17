import { useState, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import Header from '../../components/Header';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Link } from 'react-router-dom';
import ExchangeCard from '../../components/Exchange';
import { primary } from '../../config/palette';

export interface IData {
  id: string;
  name: string;
  year_established: number;
  country: string;
  description: string;
  url: string;
  image: string;
  has_trading_incentive: false;
  trust_score: number;
  trust_score_rank: number;
  trade_volume_24h_btc: number;
  trade_volume_24h_btc_normalized: number;
}

const Landing = () => {
  const [pagination, setPagination] = useState({
    page: 1,
    perPage: 100,
    hasMore: true,
  });
  const [data, setData] = useState<IData[]>([]);

  const loadExchangeData = useCallback(() => {
    // if (pagination.page > 1) {
    console.log('page: ', pagination.page);
    fetch(
      process.env.REACT_APP_COINGECKO_EXCHANGE_API_URL +
        `?per_page=${pagination.perPage}&page=${pagination.page}` ||
        'https://api.coingecko.com/api/v3/exchanges',
      { method: 'GET' }
    )
      .then((res) => res.json())
      .then((newData) => {
        console.log('in load more data: ', newData);
        setPagination((prev) => ({
          ...prev,
          page: (prev.page += 1),
          hasMore: newData.length < prev.perPage ? false : true,
        }));
        setData((prev) => {
          return prev.concat(newData);
        });
      })
      .catch((e) => {
        console.warn('have some error in loadExchangeData: ', e);
      });
    // }
  }, [pagination]);

  const refresh = useCallback(() => {
    console.log('in refresh');
    setPagination((prev) => ({ ...prev, page: 1, hasMore: true }));
    setData([]);
  }, []);

  useEffect(() => {
    if (data.length === 0) loadExchangeData();
  }, [data, loadExchangeData]);

  return (
    <Layout>
      <Header />
      <Content>
        <InfiniteScroll
          dataLength={data.length || 10} //This is important field to render the next data
          next={loadExchangeData}
          hasMore={pagination.hasMore}
          loader={<h4 style={{ textAlign: 'center', color: `${primary.color}` }}>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: 'center' }}>
              <b style={{ textAlign: 'center', color: `${primary.color}` }}>The end</b>
            </p>
          }
          refreshFunction={refresh}
          pullDownToRefresh
          pullDownToRefreshThreshold={50}
          pullDownToRefreshContent={
            <h3 style={{ textAlign: 'center', color: `${primary.color}` }}>Pull down to refresh</h3>
          }
          releaseToRefreshContent={
            <h3 style={{ textAlign: 'center', color: `${primary.color}` }}>Release to refresh</h3>
          }
        >
          {data.map((exchange) => {
            return (
              <div style={{ boxSizing: 'border-box', padding: '4px 4px' }}>
                <Link
                  style={{ textDecoration: 'none', color: `${primary.gray}`, fontWeight: 'bold' }}
                  to={`exchange?id=${exchange.id}`}
                  target="_blank"
                >
                  <ExchangeCard type="list" exInfo={exchange} />
                </Link>
              </div>
            );
          })}
        </InfiniteScroll>
      </Content>
    </Layout>
  );
};

export default Landing;

const Layout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fafbfc;
`;

const Content = styled.div`
  width: 988px;
  max-width: 90%;
  min-height: 100vh;
  margin-top: 64px;
  /* display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center; */
`;
