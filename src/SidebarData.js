import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    // icon: <AiIcons.AiFillHome />,
    icon: "🏡",
    cName: 'nav-text'
  },
  {
    title: 'Profile',
    path: '/profile',
    // icon: <IoIcons.IoIosPaper />,
    icon: "👩‍🌾",
    cName: 'nav-text'
  },
  {
    title: 'My Garden',
    path: '/mygarden',
    // icon: <FaIcons.FaCartPlus />,
    icon: "🌱",
    cName: 'nav-text'
  }
];