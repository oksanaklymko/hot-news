import {useEffect, useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../../dist/css/articles.css"

import React from 'react';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';


const baseURL = "https://newsapi.org/v2/everything"
const ApiKey = "7b63627fe49f41aa8bf1ac1fc44d9a52"

const NewsList = () => {
    const [articles, setArticles] = useState(null);
    const [error, setError] = useState(null);
    const [search, setSearch] = useState("apple");
    const [page, setPage] = React.useState(1);
    const [total_pages, setTotalPages] = React.useState(1);

    async function fetchData() {
        axios.get(baseURL, {
            params: {
                q: search,
                apiKey: ApiKey,
                page: page
            } })
            .then(response => {
                setArticles(response.data.articles);
                setTotalPages(response.data.total_pages)
            })
            .catch(error => {
                setError(error.response.data.message);
            })
    }

    useEffect(() => {
        fetchData()
    }, []);

    const handleChange = (event, value) => {
        setPage(value);
    };

    const handleSubmit = e => {
        e.preventDefault()
        fetchData()
    }


    if (error)  {
        return <div className="error">
            <h2>{ error }</h2>
        </div>;
    } else if (articles) {


        const items = articles.map((article, index) =>
            <div key={index} className="article">
                <img src={article.urlToImage} alt={article.source.name}/>
                <h2>{article.title}</h2>
                <Link to={"/news/" + index + "/" + search}>More</Link>
                <div>
                    <div>{article.author}</div>
                    <div>{article.publishedAt}</div>
                </div>
            </div>
        );
        return (
            <div>
                <form onSubmit={handleSubmit}>
                    <label>
                        <input
                            type="text"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </label>
                    <input type="submit" value="Search" />
                </form>
                <Stack spacing={2}>
                    <Typography>Page: {page}</Typography>
                    <Pagination count={total_pages} page={page} onChange={handleChange} />
                </Stack>
                <div className="articles">{ items }</div>
            </div>
        );
    }
}

export default NewsList;