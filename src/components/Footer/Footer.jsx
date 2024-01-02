import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from '../../assets/payments.png'

import "./Footer.scss";




const Footer = () => {
    return (
    <footer className="footer">
     <div className="footer_content">
        <div className="col">
            <div className="title">About</div>
            <div className="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptatum at maxime autem quam, tempora nam molestiae ipsam. Suscipit cupiditate, facilis ipsa maxime nobis aspernatur aliquid sed quidem. Iste, commodi.
            </div>

        </div>
        <div className="col">
        <div className="title">Contact</div>
        <div className="c_item">
            <FaLocationArrow/>
            <div className="text">Mall road, Street 12, Market No 22, Punjab, Multan ,Pakistan
            </div>
        </div>
        <div className="c_item">
            <FaMobileAlt/>
            <div className="text">Phone: +92 337 6333235
            </div>
        </div>
        <div className="c_item">
            <FaEnvelope/>
            <div className="text">Email: anything@gmail.com
            </div>
        </div>

        </div>
        <div className="col">
        <div className="title">Categories</div>
        <span className="text">Headphones</span>
        <span className="text">Smart Watches</span>
        <span className="text">Bluetooth Speakers</span>
        <span className="text">Wireless Earbuds</span>
        <span className="text">Home Theatre</span>
        <span className="text">Projectors</span>

        </div>
        <div className="col">
        <div className="title">Pages</div>
        <span className="text">Home</span>
        <span className="text">About</span>
        <span className="text">Privacy Policy</span>
        <span className="text">Returns</span>
        <span className="text">Terms & Conditions</span>
        <span className="text">Contact Us</span>


        </div>
     </div>



    <div className="bottom_bar">
        <div className="bottomBar_content">
            <div className="text">
                ECOMMERCE APP 2024 CREATED BY KHIZER ABBAS. PREMIUM E-COMMERCE SOLUTIONS
            </div>
            <img src={Payment} alt="img" />
        </div>
    </div>

    </footer>
    
    );
};

export default Footer;
