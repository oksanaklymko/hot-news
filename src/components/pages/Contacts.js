import {useEffect, useState} from "react";
import React from 'react';

const Contacts = () => {
    useEffect(() => {
        document.title = 'Contacts Page';
    },[]);

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <div>
            <h1>Contacts Page</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input id="email" type="text" />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input id="password" type="password" />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Contacts;