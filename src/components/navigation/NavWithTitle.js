import { Link } from 'react-router-dom';
import React from 'react';
import '../../dist/css/NavWithTitle.css';


const NavWithTitle = (props) => {
    const listItems = props.links.map((item) =>
        <li key={item.link.toString()}>
            <Link to={ item.path }>{ item.link }</Link>
        </li>
    );

    return (
        <nav>
            <div>
                <h3>{ props.title }</h3>
                <ul>{ listItems }</ul>
            </div>
        </nav>
    );
}

NavWithTitle.defaultProps = {
    title: "Menu title",
    links: [
        {
            link: "Link",
            path: "/"
        },
        {
            link: "Link",
            path: "/"
        },
    ]
}

export default  NavWithTitle;