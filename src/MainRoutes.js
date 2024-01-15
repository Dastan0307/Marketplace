import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Register from "./screens/Auth/Register/Register";
import Password from './screens/Auth/CreatePassword/Password';
import Login from './screens/Auth/Login/Login';
import ProfilePage from './screens/ProfilePage/ProfilePage';
import ProfileLiked from './screens/ProfileLiked/ProfileLiked';
import Main from './screens/Main/Main';
import EditCard from './screens/UpdateCard/EditCard';
import CardShow from './components/Card/CardShow';
import MyProducts from './screens/MyProducts/MyProducts';

const MainRoutes = () => {
    const PUBLIC_ROUTES = [
        {
            link: '/',
            element: <Main />,
            id: 1
        },
        {
            link: '/register',
            element: <Register />,
            id: 2
        },
        {
            link: '/login',
            element: <Login />,
            id: 3
        },
        {
            link: '/password',
            element: <Password />,
            id: 4
        },
        {
            link: '/profile',
            element: <ProfilePage />,
            id: 5
        },
        {
            link: '/profile_liked',
            element: <ProfileLiked />,
            id: 6
        },
        {
            link: '/my-products',
            element: <MyProducts />,
            id: 7
        },
        {
            link: '/edit-card/:id',
            element: <EditCard />,
            id: 8
        },
        {
            link: '/show-card/:id',
            element: <CardShow />,
            id: 9
        },
    ];

  return (
    <Routes>
        {PUBLIC_ROUTES.map(item => (
            <Route path={item.link} element={item.element} key={item.id} />
        ))}
    </Routes>
  )
}

export default MainRoutes;