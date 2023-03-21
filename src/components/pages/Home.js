import {useEffect, useState} from "react";
import "../../dist/css/var.css";
import HomeList from "../layout/HomeList";
import "../../dist/css/home.css";


const Home = () => {
    useEffect(() => {
        document.title = 'Home Page';
    }, []);

    return (
        <div className="font-link">
            <h2>Hot News</h2>
            <HomeList />
        </div>
    )
};

export default Home;