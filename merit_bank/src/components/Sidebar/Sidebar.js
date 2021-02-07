import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';



const Nav = styled.div`
    background: #15171c;
    height: 80px;
    
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;



const SidebarNav = styled.nav`
    background: #15171c;
    width: 250px;
    height: 700px;
    margin-top: 450px;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
    transition: 350ms;
    z-index: 10;
`;



const SidebarWrap = styled.div`
    width: 100%;
`;






const NavIcon = styled(Link)`
    margin-left: 2rem;
    font-size: 2rem;
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: rgb(0, 255, 229);
`;



const Sidebar = () => {

    const [sidebar, setSidebar] = useState(false);

    // TRUE / FALSE
    const showSidebar = () => setSidebar(!sidebar);



    return (
        <>
            <Nav>
                <NavIcon to='/dashboard'>
                    <FaIcons.FaBars onClick={ showSidebar }/> 
                </NavIcon>
            </Nav>
            <SidebarNav sidebar={ sidebar }>
                <SidebarWrap>
                <NavIcon to='/dashboard'>
                    <AiIcons.AiOutlineClose onClick={ showSidebar }/> 
                </NavIcon>
                {SidebarData.map((item, index) => {
                    return <SubMenu item={ item } key={ index } />;
                })}
                </SidebarWrap>
            </SidebarNav>
        </>
    );
};

export default Sidebar;