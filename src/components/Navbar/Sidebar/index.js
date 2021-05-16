import React from 'react'
import { 
    SidebarContainer, 
    Icon, CloseIcon, 
    SidebarMenu, 
    SidebarLink, 
    SideBtnWrap, 
    SidebarRoute
} from './SidebarElements'

export const Sidebar = () => {
    return (
        <div>
            <SidebarContainer>
                <Icon>
                    <CloseIcon/>
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
        </div>
    )
}
