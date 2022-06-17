import styled from 'styled-components';
import { primary } from '../../../config/palette';
import FbIcon from './img/fb-icon.png';
import RedditIcon from './img/reddit-icon.png';
import SlackIcon from './img/slack-icon.png';
import TgIcon from './img/tg-icon.png';

interface ISocial {
  type: string;
  socialUrl: {
    facebook_url?: string;
    reddit_url?: string;
    telegram_url?: string;
    slack_url?: string;
  }[];
}

const Social: React.FC<ISocial> = ({ type = 'list', socialUrl }) => {
  console.log('socialUrl: ', socialUrl);

  return (
    <Layout type={type}>
      <Title>Social Media</Title>
      <Gap type={type} />
      <Info>
        {socialUrl.map((social) => {
          if (social) {
            let icon = '';
            let link = '';
            if (social.facebook_url) {
              icon = FbIcon;
              link = social.facebook_url;
            } else if (social.reddit_url) {
              icon = RedditIcon;
              link = social.reddit_url;
            } else if (social.slack_url) {
              icon = SlackIcon;
              link = social.slack_url;
            } else if (social.telegram_url) {
              icon = TgIcon;
              link = social.telegram_url;
            }
            if (icon && link) {
              return (
                <a
                  style={{ textDecoration: 'none', marginLeft: 4 }}
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img style={{ width: 32, height: 32 }} src={icon} alt="" />
                </a>
              );
            }
          }
          return null;
        })}
      </Info>
    </Layout>
  );
};

export default Social;

interface IExUrl {
  type: string;
}
const Layout = styled.div<IExUrl>`
  width: ${(props) => (props.type === 'list' ? '220px' : '100%')};
  display: flex;
  box-sizing: border-box;
  align-items: center;
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

const Info = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
