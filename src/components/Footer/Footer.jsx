import './Footer.css'
import { Link } from "react-router-dom";

const Footer = ({cl}) => {
    return(
        <footer className={cl}>
            <div className='Footer-links'>
                <Link to='/'>Home</Link>
                <Link to='/About'>About Us</Link>
                <Link to='/News'>News</Link>
                <Link to='/Services'>Services</Link>
                <Link to='/Completed'>Completed Work</Link>
                <Link to='/Contacts'>Contacts</Link>
            </div>
            <h3 className='copy'>Copy right @ 2099.</h3>
        </footer>
    )
}

export default Footer;