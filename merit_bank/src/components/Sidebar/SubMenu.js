import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

//item.-PASS-FROM-INFO-FROM-DATA  item.path, item.icon, item.title



const SidebarLink = styled(Link)`
    display: flex;
    color: #e1e9fc;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    list-style: none;
    height: 60px;
    text-decoration: none;
    font-size: 18px;

    &:hover {
        background: #252831;
        border-left: 4px solid #23DE06;
        cursor: pointer;
    }
`;


const SidebarLabel = styled.span`
    margin-left: 16px;
`;

// IF subNav is true and subNav is clicked 

const SubMenu = ({ item }) => {

    const [subnav, setSubnav] = useState(false);

    const showSubnav = () => setSubnav(!subnav);


    return (
        <>
            <SidebarLink to={item.path} onClick={item.subNav && showSubnav}>
                <div>
                    {item.icon}
                    <SidebarLabel>{item.title}
                    </SidebarLabel>
                </div>
                <div>
                    { item.subNav && subnav ? item.iconOpened : item. subNav ? item.iconClosed : null }
                </div>
            </SidebarLink>
            {subnav && item.subNav.map((item, index) => {
                return(
                    <DropdownLink to={item.path} key={index}>

                    </DropdownLink>    
                )
            }}
        </>
    );

};

export default SubMenu;