import { Link } from 'react-router-dom';
import "../../dist/css/footer.css";
import NavWithTitle from "../navigation/NavWithTitle";
import "../../dist/css/var.css";
//import Facebook from "@mui/icons-material";

const currentYear = new Date().getFullYear();


let socialNav = {
    title: "",
    links: [
        {
            link: "Facebook",
            path: "https://www.facebook.com"
        },
        {
            link: "Twitter",
            path: "https://www.twitter.com"
        },
        {
            link: "Instagram",
            path: "https://www.instagram.com"
        }
    ]
}

function Footer() {
    return (
        <footer>
            <div className='container font-link'>
                <NavWithTitle { ...socialNav } />
            </div>
            <div className="copyright">
                <p className="container">
                    © { currentYear }  Hot News. Designed by <Link to="/">Hot News</Link>
                </p>
            </div>
        </footer>
    )
}

export default Footer;