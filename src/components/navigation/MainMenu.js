import { NavLink } from 'react-router-dom';
import React from 'react';
import '../../dist/css/MainMenu.css';

const MainMenu = (props) => {
    const listItems = props.links.map((item, index) =>
        <li key={item.link.toString()}>
            <NavLink to={ item.path }>{ item.link }</NavLink>
        </li>
    );

    return (
        <nav>
            <ul>{ listItems }</ul>
        </nav>
    );
}

MainMenu.defaultProps = {
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

export default MainMenu;