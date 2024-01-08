import React from 'react';
import { UserLayout } from '../layouts';
import { userRoutes } from './User';


export const routes = () => {
  return [
    {
      element: <UserLayout />,
      children: [...userRoutes()],
    },
    // {
    //   path: "*",
    //   element: <NotFound />,
    // },
  ];
};