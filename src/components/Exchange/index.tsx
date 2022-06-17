import styled from 'styled-components';
import Name from './Name';
import Country from './Country';
import ExUrl from './ExUrl';
import TrustRank from './TrustRank';
import { IData } from '../../pages/Landing';

interface IExchangeComponent {
  type: string;
  exInfo: IData;
}

const ExchangeCard: React.FC<IExchangeComponent> = ({ type = 'list', exInfo }) => {
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
  width: 768px;
  max-width: 90%;
  display: flex;
  flex-direction: column;
`;
