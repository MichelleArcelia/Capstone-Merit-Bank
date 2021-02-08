import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';



export const SidebarData = [



    {
        title: 'Transfer Money',
        path: '#',
        icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,

    },





    {
        title: 'Checking',
        path: '#',
        icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'Transactions Details',
                path: '/checking',
                icon: <IoIcons.IoIosPaper />,
            },

        ]
    },






    {
        title: 'Savings',
        path: '#',
        icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'Transactions Details',
                path: '/savings',
                icon: <IoIcons.IoIosPaper />,
            },

        ]
    },







    {
        title: 'CD',
        path: '#',
        icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'Transactions Details',
                path: '/cdaccount',
                icon: <IoIcons.IoIosPaper />,
            },

        ]
    },





    {
        title: 'IRA',
        path: '#',
        icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'Transactions Details',
                path: '/ira',
                icon: <IoIcons.IoIosPaper />,
            },

        ]
    },







    {
        title: 'LOGOUT',
        path: '#',
        icon: <AiIcons.AiFillHome />,
            }

        ];
    










