import React from 'react';
import { Outlet } from 'react-router-dom'

const Main = () => {
    return (
        <>
            <header><h1>Mon jeu !</h1></header>
            <Outlet />
        </>
    )
}

export default Main