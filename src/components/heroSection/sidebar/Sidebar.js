import React from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
  SidebarRoute,
  SideBtnWrap
} from './SidebarElements';


const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarMenu>
        <SidebarLink>Burgers</SidebarLink>
        <SidebarLink>Sides</SidebarLink>
        <SidebarLink>Desserts</SidebarLink>
        <SidebarLink>Drinks</SidebarLink>
      </SidebarMenu>
      <SideBtnWrap>
        <SidebarRoute>Order Now</SidebarRoute>
      </SideBtnWrap>
    </SidebarContainer>
  );
};

export default Sidebar;