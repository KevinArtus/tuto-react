import { Link } from "react-router-dom";
import React from 'react';

const Home = () => {
    return (
        <>
            <h1>Hello World</h1>
            <Link to="/gitcoin/nathan">Go</Link>
        </>
    )
}

export default Home