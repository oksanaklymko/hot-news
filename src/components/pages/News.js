import NewsList from "../layout/NewsList";
import {useEffect, useState} from "react";
import "../../dist/css/var.css";

const News = () => {
    useEffect(() => {
        document.title = 'News Page';
    },[]);

    return (
        <div className="font-link">
            <h2>Search News</h2>
            <NewsList />

        </div>
    )
};

export default News;