import MainMenu from '../navigation/MainMenu';
import '../../dist/css/header.css';
import "../../dist/css/var.css";

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
            <div className='container font-link'>
                <h1>HO<span>TN</span>EWS</h1>
                < MainMenu  { ...primaryMenu }/>
            </div>
        </header>
    )
}

export default Header;