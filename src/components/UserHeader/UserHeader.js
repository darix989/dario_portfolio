import React, {useContext} from 'react';
import { useLocation } from 'react-router-dom';
import { ArrowRight16 } from '@carbon/icons-react';
import { HeaderContainer, Header, Image, ViewResumeLink } from './styles';
import { PortfolioGrowWrap, ElementBeforeCanvas } from '../../styles';
import {PoiContext, } from "../../PoiContext/PoiContext";

const UserHeader = ({ user, init }) => {
  const location = useLocation();
  const poiHandler = useContext(PoiContext);
  const imageProfile = React.useRef(null);
  const viewResume = React.useRef(null);
  let poiCommunicated = false;
  
  const setPOIAtTransitionEnd = (trEv) => {
    if(poiCommunicated === false){
      poiCommunicated = true;
      let elem = Math.random() > 0.5 ? imageProfile : viewResume;
      let elemRect = elem.current.getBoundingClientRect();
      let xOffset = (elemRect.width / 3);
      let yOffset = (elemRect.height / 3);
      let newPoi = ({x: (elemRect.left+ xOffset), y: (elemRect.top + yOffset)})
      // let newPoi = {x: (elemRect.left), y: (elemRect.top)};
      poiHandler.setPoi(newPoi)
      console.log('User Header > set next POI at ', newPoi);
      // console.log("BOOM BITCHES", trEv);
    }
  }

  const content = (
    
      <HeaderContainer isHome={location.pathname === '/'}>
        <Header>
          <ElementBeforeCanvas>
            <Image ref={imageProfile} src={user.basics.picture} />
          </ElementBeforeCanvas>
          <div
          // style={{background: colors.blue}}
          >
            {/* CANVAS 003 */}
            {/* {poiHandler.getPoi().x} */}
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
        <ElementBeforeCanvas>
          <ViewResumeLink
            ref={viewResume}
            href={`https://gitconnected.com/${user.basics.username}/resume`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>View Résumé</span>
            <ArrowRight16 />
          </ViewResumeLink>
        </ElementBeforeCanvas>
      </HeaderContainer>
    
  );
  
  if(init){
    return (<div>
      {content}
    </div>);
  } else {
    return (
    <PortfolioGrowWrap onTransitionEnd={setPOIAtTransitionEnd}>
    {content}
    </PortfolioGrowWrap>
    );
  }
  
};

export default UserHeader;