
/*import Velmora from "../asset/Group 5 (1).png"
import { Link } from "react-router-dom"
import "./Footer.css"


function Footer() {
    return(
        <footer>
            <div className="footer">
               
                <div className="footer-flex">
                    <div>
                        <Link to="/" className="nav-link first"><img className="ven" src={Velmora} alt="" /></Link>
                        <div>
                            <p>A modern marketplace designed to make shopping simple, fast, and reliable.</p>
                        </div>
                    </div>
                    <div>
                        <h3>Products</h3>
                        <ul className="footer-ul">
                            <li><Link to="/category/fashion"><span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff"><path d="m240-522-40 22q-14 8-30 4t-24-18L66-654q-8-14-4-30t18-24l230-132h70q9 0 14.5 5.5T400-820v20q0 33 23.5 56.5T480-720q33 0 56.5-23.5T560-800v-20q0-9 5.5-14.5T580-840h70l230 132q14 8 18 24t-4 30l-80 140q-8 14-23.5 17.5T760-501l-40-20v361q0 17-11.5 28.5T680-120H280q-17 0-28.5-11.5T240-160v-362Zm80-134v456h320v-456l124 68 42-70-172-100q-15 51-56.5 84.5T480-640q-56 0-97.5-33.5T326-758L154-658l42 70 124-68Zm160 177Z"/></svg></span>Fashion</Link></li>
                            <li><Link to="/category/electronic"><span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff"><path d="M320-120v-80H160q-33 0-56.5-23.5T80-280v-480q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v80h-80v-80H160v480h280v160H320Zm286-180q0-39 27.5-66.5T700-394q39 0 66.5 27.5T794-300q0 39-27.5 66.5T700-206q-39 0-66.5-27.5T606-300Zm234-340q17 0 28.5 11.5T880-600v440q0 17-11.5 28.5T840-120H560q-17 0-28.5-11.5T520-160v-440q0-17 11.5-28.5T560-640h280Zm-140 40q-26 0-43 17t-17 43q0 26 17 43t43 17q26 0 43-17t17-43q0-26-17-43t-43-17Zm0 440q59 0 99.5-40.5T840-300q0-59-40.5-99.5T700-440q-59 0-99.5 40.5T560-300q0 59 40.5 99.5T700-160Z"/></svg></span>Electronics</Link></li>
                            <li><Link to="/category/apple"><span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff"><path d="M280-40q-33 0-56.5-23.5T200-120v-720q0-33 23.5-56.5T280-920h400q33 0 56.5 23.5T760-840v124q18 7 29 22t11 34v80q0 19-11 34t-29 22v404q0 33-23.5 56.5T680-40H280Zm0-80h400v-720H280v720Zm0 0v-720 720Zm200-600q17 0 28.5-11.5T520-760q0-17-11.5-28.5T480-800q-17 0-28.5 11.5T440-760q0 17 11.5 28.5T480-720Z"/></svg></span>Phones & Tablets</Link></li>
                            <li><Link to=""><span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff"><path d="M841-518v318q0 33-23.5 56.5T761-120H201q-33 0-56.5-23.5T121-200v-318q-23-21-35.5-54t-.5-72l42-136q8-26 28.5-43t47.5-17h556q27 0 47 16.5t29 43.5l42 136q12 39-.5 71T841-518Zm-272-42q27 0 41-18.5t11-41.5l-22-140h-78v148q0 21 14 36.5t34 15.5Zm-180 0q23 0 37.5-15.5T441-612v-148h-78l-22 140q-4 24 10.5 42t37.5 18Zm-178 0q18 0 31.5-13t16.5-33l22-154h-78l-40 134q-6 20 6.5 43t41.5 23Zm540 0q29 0 42-23t6-43l-42-134h-76l22 154q3 20 16.5 33t31.5 13ZM201-200h560v-282q-5 2-6.5 2H751q-27 0-47.5-9T663-518q-18 18-41 28t-49 10q-27 0-50.5-10T481-518q-17 18-39.5 28T393-480q-29 0-52.5-10T299-518q-21 21-41.5 29.5T211-480h-4.5q-2.5 0-5.5-2v282Zm560 0H201h560Z"/></svg></span>Supermarket</Link></li>
                            <li><Link to=""><span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 640 640" width="24px" fill="#fbfbfb"><path d="M248 152C248 112.2 280.2 80 320 80C359.8 80 392 112.2 392 152C392 191.8 359.8 224 320 224C280.2 224 248 191.8 248 152zM135.7 208.5C148.7 190.6 173.7 186.7 191.6 199.7L227.8 226C254.6 245.5 286.9 256 320 256C353.1 256 385.4 245.5 412.2 226L448.4 199.6C466.3 186.6 491.3 190.6 504.3 208.4C517.3 226.2 513.3 251.3 495.5 264.3L459.3 290.7C445.7 300.6 431.2 308.9 416 315.7L416 352L224 352L224 315.7C208.8 309 194.3 300.6 180.7 290.7L144.5 264.3C126.6 251.3 122.7 226.3 135.7 208.4zM225.5 393.3L286.1 446.3L260.1 483.5L284.4 507.8C300 523.4 300 548.7 284.4 564.4C268.8 580.1 243.5 580 227.8 564.4L179.8 516.4C166 502.6 164.1 481 175.2 465.1L225.4 393.3zM354 446.3L414.6 393.3L464.8 465.1C475.9 481 474 502.6 460.3 516.3L412.3 564.3C396.7 579.9 371.4 579.9 355.7 564.3C340 548.7 340.1 523.4 355.7 507.7L380 483.4L354 446.2z"/></svg></span>Baby Products</Link></li>
                            <li><Link to="/category/appliance"><span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff"><path d="M320-640v-120h80v120h-80Zm0 360v-200h80v200h-80ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h480q33 0 56.5 23.5T800-800v640q0 33-23.5 56.5T720-80H240Zm0-80h480v-360H240v360Zm0-440h480v-200H240v200Z"/></svg></span>Home Appliances</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3>Help</h3>
                        <ul className="footer-ul">
                            <li><Link to="">Privacy Policy</Link></li>
                            <li><Link to="">FAQ</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3>Contact</h3>
                        <ul className="footer-ul">
                            <li><Link to=""></Link></li>
                            <li><Link to=""><span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M240-400h320v-80H240v80Zm0-120h480v-80H240v80Zm0-120h480v-80H240v80ZM80-80v-720q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240L80-80Zm126-240h594v-480H160v525l46-45Zm-46 0v-480 480Z"/></svg></span>Chat with an Expert</Link></li>
                            <li><Link to=""><span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z"/></svg></span>Call (123) 456789</Link></li>
                            <li><Link to=""><span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"/></svg></span> Velmora@gmail.com</Link></li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div></div>
                </div>
            </div>
        </footer>
    )
}

export default Footer*/


import Velmora from "../asset/Group 5 (1).png";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* LOGO + DESCRIPTION */}
        <div className="footer-section">
          <Link to="/" className="footer-logo">
            <img src={Velmora} alt="Velmora Logo" />
          </Link>

          <p className="footer-text">
            A modern marketplace designed to make shopping simple, fast, and reliable.
          </p>

          {/* SOCIAL ICONS */}
          <div className="social-icons">
            <Link><FaFacebookF /></Link>
            <Link><FaInstagram /></Link>
            <Link><FaTwitter /></Link>
            <Link><FaLinkedinIn /></Link>
          </div>
        </div>

        {/* PRODUCTS */}
        <div className="footer-section">
          <h3>Products</h3>
          <ul>
            <li><Link to="/category/fashion">Fashion</Link></li>
            <li><Link to="/category/electronic">Electronics</Link></li>
            <li><Link to="/category/apple">Phones & Tablets</Link></li>
            <li><Link to="/category/supermarket">Supermarket</Link></li>
            <li><Link to="/category/baby">Baby Products</Link></li>
            <li><Link to="/category/appliance">Home Appliances</Link></li>
          </ul>
        </div>

        {/* HELP */}
        <div className="footer-section">
          <h3>Help</h3>
          <ul>
            <li><Link >Privacy Policy</Link></li>
            <li><Link >FAQ</Link></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="footer-section">
          <h3>Contact</h3>
          <ul>
            <li>💬 Chat with an Expert</li>
            <li>📞 (123) 456-789</li>
            <li>📧 velmora@gmail.com</li>
          </ul>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Velmora. All rights reserved.</p>
      </div>
    </footer>
  );
}


export default Footer;
