import MainMenu from '../navigation/MainMenu';
import '../../assets/scss/header.css';

let primaryMenu = {
    links: [
        {
            link: "Home",
            path: "/"
        },
        {
            link: "News",
            path: "/news"
        },
        {
            link: "Contacts",
            path: "/contacts"
        },
        {
            link: "About",
            path: "/about"
        },
    ]
};

const Header = () => {
    return (
        <header>
            <div className='header-wrapper container'>
                <h1>HO<span>TN</span>EWS</h1>
                < MainMenu  { ...primaryMenu }/>
            {/*<nav>*/}
            {/*    <ul>*/}
            {/*        <li>*/}
            {/*            <NavLink to="/">Home</NavLink>*/}
            {/*        </li>*/}
            {/*        <li>*/}
            {/*            <NavLink to="/news">News</NavLink>*/}
            {/*        </li>*/}
            {/*        <li>*/}
            {/*            <NavLink to="/contacts">Contacts</NavLink>*/}
            {/*        </li>*/}
            {/*        <li>*/}
            {/*            <NavLink to="/about">About</NavLink>*/}
            {/*        </li>*/}
            {/*    </ul>*/}
            {/*</nav>*/}
            </div>
        </header>
    )
}

export default Header;