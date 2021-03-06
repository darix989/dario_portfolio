import React from 'react';
import { useLocation } from 'react-router-dom';
import { ArrowRight16 } from '@carbon/icons-react';
import { HeaderContainer, Header, Image, ViewResumeLink } from './styles';
import { PortfolioGrowWrap } from '../../styles';

const UserHeader = ({ user, init }) => {
  const location = useLocation();

  const content = (
      <HeaderContainer isHome={location.pathname === '/'}>
        <Header>
          <div>
          <Image src={user.basics.picture} />
          </div>
          <div>
            <h2>{user.basics.name}</h2>
            <h4>
              <a
                href={`https://gitconnected.com/${user.basics.username}`}
                target="_blank"
                rel="noreferrer noopener"
              >
                @{user.basics.username}
              </a>
            </h4>
            <p>{user.basics.label}</p>
            <p>Coding in {user.basics.region}</p>
            <p>{user.basics.yearsOfExperience} years of experience as a developer</p>
            <p>{user.basics.headline}</p>
            <p>
              Blog:{' '}
              <a href={user.basics.blog} target="_blank" rel="noreferrer noopener" style={{textDecoration: 'none'}}>
                {user.basics.blog}
              </a>
            </p>
          </div>
        </Header>
        <div>
          <ViewResumeLink
            href={`https://gitconnected.com/${user.basics.username}/resume`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>View Résumé</span>
            <ArrowRight16 />
          </ViewResumeLink>
        </div>
      </HeaderContainer>
  );
  
  if(init){
    return (<div>
      {content}
    </div>);
  } else {
    return (<PortfolioGrowWrap>
      {content}
    </PortfolioGrowWrap>);
  }
  
};

export default UserHeader;