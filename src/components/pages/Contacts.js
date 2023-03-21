import {useEffect, useState} from "react";
import React from 'react';
import "../../dist/css/var.css";
import "../../dist/css/contacts.css";


const Contacts = () => {
    useEffect(() => {
        document.title = 'Contacts Page';
    },[]);

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <div className="contacts font-link">
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <div className="wrap">
                        <label htmlFor="email">Email</label>
                        <input id="email" type="text" />
                    </div>
                    <div className="wrap">
                        <label htmlFor="password">Password</label>
                        <input id="password" type="password" />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Contacts;