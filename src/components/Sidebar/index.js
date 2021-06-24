import React from 'react'
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
    return (
      <SidebarContainer onClick={toggle} isOpen={isOpen}>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
        <SidebarMenu>
          <SidebarLink to="/">Pizzas</SidebarLink>
          <SidebarLink to="/">Dessert</SidebarLink>
          <SidebarLink to="/">Full Menu</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/">Order Now</SidebarRoute>
        </SideBtnWrap>
      </SidebarContainer>
    );
}

export default Sidebar;