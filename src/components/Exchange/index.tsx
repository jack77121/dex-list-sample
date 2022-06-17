import { useMemo } from 'react';
import styled from 'styled-components';
import Name from './Name';
import Country from './Country';
import ExUrl from './ExUrl';
import TrustRank from './TrustRank';
import EstablishedYear from './Established';
import Social from './Social';
import Description from './Description';
import Button from '../Button';
import { IData } from '../../pages/Landing';
import { IExchangeInfo } from '../../pages/Exchange';
import { Link } from 'react-router-dom';

interface IExchangeComponent {
  type: string; // list || card
  exInfo: IData | IExchangeInfo;
}

const ExchangeCard: React.FC<IExchangeComponent> = ({ type = 'list', exInfo }) => {
  const detailSocialInfo = useMemo(() => {
    if (type !== 'list') {
      return [
        { facebook_url: (exInfo as IExchangeInfo).facebook_url },
        { reddit_url: (exInfo as IExchangeInfo).reddit_url },
        { slack_url: (exInfo as IExchangeInfo).slack_url },
        { telegram_url: (exInfo as IExchangeInfo).telegram_url },
      ];
    }
    return [];
  }, [exInfo, type]);

  if (type === 'list') {
    return (
      <ListLayout>
        <Name type={type} name={exInfo.name} imgUrl={exInfo.image} />
        <Country type={type} countryName={exInfo.country} />
        <ExUrl type={type} exUrl={exInfo.url} />
        <TrustRank type={type} rank={exInfo.trust_score_rank} />
      </ListLayout>
    );
  } else {
    return (
      <CardLayout>
        <Name type={type} name={exInfo.name} imgUrl={exInfo.image} />
        <Country type={type} countryName={exInfo.country} />
        <ExUrl type={type} exUrl={exInfo.url} />
        <TrustRank type={type} rank={exInfo.trust_score_rank} />
        <EstablishedYear type={type} year={exInfo.year_established} />
        <Social type={type} socialUrl={detailSocialInfo} />
        <Description type={type} descValue={exInfo.description} />
        <div style={{ height: 32 }} />
        <Link to={'/'}>
          <Button title="Home" />
        </Link>
      </CardLayout>
    );
  }
};

export default ExchangeCard;

const ListLayout = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 12px;
  margin: 4px 0px;
  background-color: white;
  box-shadow: 2px 2px 5px #dadce1;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const CardLayout = styled.div`
  width: 568px;
  max-width: 90%;
  display: flex;
  flex-direction: column;
  margin-top: 48px;
`;
