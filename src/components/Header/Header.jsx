import './Header.css'
import { Link } from "react-router-dom";
const Header = () => {

    return(
        <header>
           <div>
            <Link to='/'>
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg" alt="img" />
            </Link>            
           </div>

           <div className='link-box'>
                <Link to='/'>Home</Link>
                <Link to='/About'>About Us</Link>
                <Link to='/News'>News</Link>
                <Link to='/Services'>Services</Link>
                <Link to='/Completed'>Completed Work</Link>
                <Link to='/Contacts'>Contacts</Link>
           </div>
        </header>
    )
}

export default Header;