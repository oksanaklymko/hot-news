import {useEffect, useState} from "react";
const Home = () => {
    useEffect(() => {
        document.title = 'Home Page';
    },[]);

    return <h2>Home Page</h2>;
};

export default Home;