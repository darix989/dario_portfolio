import React, {useContext} from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SideNavItems, SideNavLink } from 'carbon-components-react/lib/components/UIShell';
import {PoiContext, } from "../../PoiContext/PoiContext";
import { StyledSideNav } from './styles';

const items = [
  { name: 'Me', path: '/' },
  { name: 'Projects', path: '/projects' },
  { name: 'Work', path: '/work' },
  { name: 'Education', path: '/education' },
  { name: 'Hobbies', path: '/hobbies' },
];

const Sidebar = () => {
  const location = useLocation();
  const poiHandler = useContext(PoiContext);
  
  return (
    <StyledSideNav isFixedNav expanded isChildOfHeader={false} aria-label="Side navigation">
      <SideNavItems>
        {items.map(i => (
          <SideNavLink
            isActive={
              location.pathname === '/' && i.path === '/' ? true : location.pathname === i.path
            }
            onClick={() => {let newPoi = ({x: poiHandler.getPoi().x+1, y: poiHandler.getPoi().y+1}); poiHandler.setPoi(newPoi)}}
            element={Link}
            to={i.path}
            key={i.name}
          >
            {i.name}
          </SideNavLink>
        ))}
      </SideNavItems>
    </StyledSideNav>
  );
};

export default Sidebar;