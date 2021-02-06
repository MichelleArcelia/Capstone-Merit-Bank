import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';



export const SidebarData = [
    {
        title: 'Checking Account',
        path: '/checking',
        icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'subNav Info',
                path: '/checking/users',
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: 'subNav Info 2 ',
                path: '/checking/users2',
                icon: <IoIcons.IoIosPaper />,
            },
        ]
    },






    {
        title: 'Savings Account',
        path: '/savings',
        icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'subNav Info 3',
                path: '/checking/users',
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: 'subNav Info 4 ',
                path: '/checking/users2',
                icon: <IoIcons.IoIosPaper />,
            },
        ]
    },









    {
        title: 'CD Account',
        path: '/cdaccount',
        icon: <AiIcons.AiFillHome />,
            }



        ];
    










