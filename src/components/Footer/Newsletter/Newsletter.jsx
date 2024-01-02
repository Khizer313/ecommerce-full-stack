import {FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn} from 'react-icons/fa'
import "./Newsletter.scss";



const Newsletter = () => {
    return <div className='newsletter_section'>
        <div className="newsletter_content">
            <span className="small_text">NewsLetter</span>
            <span className='big_text'>SignUp for latest updates and offers</span>
            <div className="form">
                <input type="text" placeholder='Email Address' />
                <button>Subcribe</button>
            </div>
            <div className="text">Will be used in accordance with our privacy policy</div>
            <div className="social_icons">
                
                    <div className="icon"> <FaFacebookF size={14}/></div>
                    <div className="icon"> <FaTwitter size={14}/></div>
                    <div className="icon"> <FaInstagram size={14}/></div>
                    <div className="icon"> <FaLinkedinIn size={14}/></div>                                
                
            </div>
        </div>
    </div>;
};

export default Newsletter;
