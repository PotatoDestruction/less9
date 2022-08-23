import Header from "../Header/Header";
import './Contacts.css'
import { useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";

const Contacts = () => {

    const navigate = useNavigate();

    return (
        <div>
            <Header />
            <div className="Contacts-main-container">
                <form onSubmit={(e) => {
                    e.preventDefault();


                    let test = document.querySelector('#test')
                    if (test.className === 'off') {
                        test.className = 'on'
                    } else {
                        test.className = 'off'
                    }

                    e.target.name.value = ''
                    e.target.email.value = ''
                    e.target.message.value = ''

                    setTimeout(() => {
                        navigate('/')
                    },2000)
                }}>
                    <label>Name:</label>
                    <div>
                        <input type="text" name="name" />
                    </div>
                    <label>Email:</label>
                    <div>
                        <input type="email" name="email" />
                    </div>
                    <label>Message:</label>
                    <div>
                        <textarea name="message" cols="30" rows="10"></textarea>
                    </div>
                    <div className="Contacts-button-wrap">
                        <button type="submit">Submit</button>
                    </div>
                    <div id="test" className="off">Form was Submited succesfuly !</div>
                </form>


            </div>
            <Footer cl='absolute' />
        </div>
    )
}

export default Contacts;