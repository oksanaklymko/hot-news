import NewsList from "../layout/NewsList";
import {useEffect, useState} from "react";

const News = () => {
    useEffect(() => {
        document.title = 'News Page';
    },[]);

    return (
        <div>
            <h1>News Page</h1>
            <NewsList />
        </div>
    )
};

export default News;