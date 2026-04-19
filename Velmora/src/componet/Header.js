

import { Link } from "react-router-dom"

import "./Header.css"
import Velmora from "../asset/Group 5 (1).png"
import Cart from "../asset/Group 6.png"
import { useState} from "react";
import { useContext } from "react";
import { CartContext } from "./CartContext";

import LiveSearch from "./LiveSearch";

function Header() {

    const [sidebar, setSidebar] = useState()
    const { cart } = useContext(CartContext);

    const totalItems = cart.reduce(
        (total, item) => total + item.quantity,
        0
    );


   
    
      // Clear input + dropdown
      
    


    return(
        <>
        {/* OVERLAY */}
     
        
        <header>
            <nav className="navbar">
                <div>
                    <div className="logo">
                        <Link to="/" className="nav-link first"><img className="ven" src={Velmora} alt="" /></Link>
                    </div>
                </div>
                <LiveSearch />
                <div>
                    <nav>
                        <ul>
                            
                            <li className="account-dropdown">
                                <Link to="/" className="nav-link scale">
                                    <span className="span">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
                                        <path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z"/>
                                    </svg>
                                    </span>
                                    Account
                                </Link>

                                {/* Dropdown */}
                                <div className="dropdown-menu">
                                    <Link to="/signUp">Sign Up</Link>
                                    <Link to="/orders">Orders</Link>
                                </div>
                            </li>
                            <li><a href="#menu"   className="nav-link scale">Help</a></li>
                            <li><Link to="/cart" className="nav-link scale"><img src={Cart} alt="" />({totalItems})</Link></li>
                            
                        </ul>
                    </nav>
                </div>
            </nav>
            
            <nav >
                <div className="navbar-2">
                    <div className="logo-2">
                        <div onClick={() => setSidebar(true)}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
                        </div>
                        <div className="logo">
                            <Link to="/" className="nav-link first"><img className="ven" src={Velmora} alt="" /></Link>
                        </div>
                    </div>
                    <div className="help-2">
                        <nav>
                            <ul>
                                
                                
                                <li className="account-dropdown">
                                    <Link to="/" className="nav-link scale">
                                        <span className="span">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
                                            <path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z"/>
                                        </svg>
                                        </span>
                                    </Link>

                                    {/* Dropdown */}
                                    <div className="dropdown-menu">
                                        <Link to="/signUp">Sign Up</Link>
                                        <Link to="/orders">Orders</Link>
                                    </div>
                                </li>
                                <li><Link to="/cart"  className="nav-link scale"><img src={Cart} alt="" />({totalItems})</Link></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="form-2">
      
                        <LiveSearch />
                    </div>
                </div>
            </nav>
            <div className="catigory">
                <div className="catigo">
                    <ul>
                        <li><Link to="/category/fashion"><span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m240-522-40 22q-14 8-30 4t-24-18L66-654q-8-14-4-30t18-24l230-132h70q9 0 14.5 5.5T400-820v20q0 33 23.5 56.5T480-720q33 0 56.5-23.5T560-800v-20q0-9 5.5-14.5T580-840h70l230 132q14 8 18 24t-4 30l-80 140q-8 14-23.5 17.5T760-501l-40-20v361q0 17-11.5 28.5T680-120H280q-17 0-28.5-11.5T240-160v-362Zm80-134v456h320v-456l124 68 42-70-172-100q-15 51-56.5 84.5T480-640q-56 0-97.5-33.5T326-758L154-658l42 70 124-68Zm160 177Z"/></svg></span>Fashion</Link></li>
                        <li><Link to="/category/electronic"><span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M320-120v-80H160q-33 0-56.5-23.5T80-280v-480q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v80h-80v-80H160v480h280v160H320Zm286-180q0-39 27.5-66.5T700-394q39 0 66.5 27.5T794-300q0 39-27.5 66.5T700-206q-39 0-66.5-27.5T606-300Zm234-340q17 0 28.5 11.5T880-600v440q0 17-11.5 28.5T840-120H560q-17 0-28.5-11.5T520-160v-440q0-17 11.5-28.5T560-640h280Zm-140 40q-26 0-43 17t-17 43q0 26 17 43t43 17q26 0 43-17t17-43q0-26-17-43t-43-17Zm0 440q59 0 99.5-40.5T840-300q0-59-40.5-99.5T700-440q-59 0-99.5 40.5T560-300q0 59 40.5 99.5T700-160Z"/></svg></span>Electronics</Link></li>
                        <li><Link to="/category/apple"><span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M280-40q-33 0-56.5-23.5T200-120v-720q0-33 23.5-56.5T280-920h400q33 0 56.5 23.5T760-840v124q18 7 29 22t11 34v80q0 19-11 34t-29 22v404q0 33-23.5 56.5T680-40H280Zm0-80h400v-720H280v720Zm0 0v-720 720Zm200-600q17 0 28.5-11.5T520-760q0-17-11.5-28.5T480-800q-17 0-28.5 11.5T440-760q0 17 11.5 28.5T480-720Z"/></svg></span>Phones & Tablets</Link></li>
                        <li><Link to="/category/supermarket"><span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M841-518v318q0 33-23.5 56.5T761-120H201q-33 0-56.5-23.5T121-200v-318q-23-21-35.5-54t-.5-72l42-136q8-26 28.5-43t47.5-17h556q27 0 47 16.5t29 43.5l42 136q12 39-.5 71T841-518Zm-272-42q27 0 41-18.5t11-41.5l-22-140h-78v148q0 21 14 36.5t34 15.5Zm-180 0q23 0 37.5-15.5T441-612v-148h-78l-22 140q-4 24 10.5 42t37.5 18Zm-178 0q18 0 31.5-13t16.5-33l22-154h-78l-40 134q-6 20 6.5 43t41.5 23Zm540 0q29 0 42-23t6-43l-42-134h-76l22 154q3 20 16.5 33t31.5 13ZM201-200h560v-282q-5 2-6.5 2H751q-27 0-47.5-9T663-518q-18 18-41 28t-49 10q-27 0-50.5-10T481-518q-17 18-39.5 28T393-480q-29 0-52.5-10T299-518q-21 21-41.5 29.5T211-480h-4.5q-2.5 0-5.5-2v282Zm560 0H201h560Z"/></svg></span>Supermarket</Link></li>
                        <li><Link to="/category/boost"><span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m480-336 128-184H494l80-280H360v320h120v144ZM400-80v-320H280v-480h400l-80 280h160L400-80Zm80-400H360h120Z"/></svg></span>Boosted deals</Link></li>
                        <li><Link to="/category/appliance"><span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M320-640v-120h80v120h-80Zm0 360v-200h80v200h-80ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h480q33 0 56.5 23.5T800-800v640q0 33-23.5 56.5T720-80H240Zm0-80h480v-360H240v360Zm0-440h480v-200H240v200Z"/></svg></span>Home Appliances</Link></li>
                    </ul>
                </div>
                <div className="quality">
                    <h3>Top quality items from verified brands</h3>
                </div>
            </div>
            {/* Overlay */}
            {sidebar && (
            <div className="overlay-sidebar" onClick={() => setSidebar(false)}></div>
            )}
            <div className={sidebar ? "sidebar open" : "sidebar"}>
                <div className="sidelogo">
                    <div onClick={() => setSidebar(false)}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
                    </div>
                    <div className="logo">
                        <Link to="/" className="nav-link first"><img className="ven" src={Velmora} alt="" /></Link>
                    </div>
                </div>
                <div className="ul">
                    <ul>
                        <li><Link onClick={() => setSidebar(false)} to="/category/fashion"><span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fffbfb"><path d="m240-522-40 22q-14 8-30 4t-24-18L66-654q-8-14-4-30t18-24l230-132h70q9 0 14.5 5.5T400-820v20q0 33 23.5 56.5T480-720q33 0 56.5-23.5T560-800v-20q0-9 5.5-14.5T580-840h70l230 132q14 8 18 24t-4 30l-80 140q-8 14-23.5 17.5T760-501l-40-20v361q0 17-11.5 28.5T680-120H280q-17 0-28.5-11.5T240-160v-362Zm80-134v456h320v-456l124 68 42-70-172-100q-15 51-56.5 84.5T480-640q-56 0-97.5-33.5T326-758L154-658l42 70 124-68Zm160 177Z"/></svg></span>Fashion</Link></li>
                        <li><Link onClick={() => setSidebar(false)} to="/category/electronic"><span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff"><path d="M320-120v-80H160q-33 0-56.5-23.5T80-280v-480q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v80h-80v-80H160v480h280v160H320Zm286-180q0-39 27.5-66.5T700-394q39 0 66.5 27.5T794-300q0 39-27.5 66.5T700-206q-39 0-66.5-27.5T606-300Zm234-340q17 0 28.5 11.5T880-600v440q0 17-11.5 28.5T840-120H560q-17 0-28.5-11.5T520-160v-440q0-17 11.5-28.5T560-640h280Zm-140 40q-26 0-43 17t-17 43q0 26 17 43t43 17q26 0 43-17t17-43q0-26-17-43t-43-17Zm0 440q59 0 99.5-40.5T840-300q0-59-40.5-99.5T700-440q-59 0-99.5 40.5T560-300q0 59 40.5 99.5T700-160Z"/></svg></span>Electronics</Link></li>
                        <li><Link onClick={() => setSidebar(false)} to="/category/apple"><span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff"><path d="M280-40q-33 0-56.5-23.5T200-120v-720q0-33 23.5-56.5T280-920h400q33 0 56.5 23.5T760-840v124q18 7 29 22t11 34v80q0 19-11 34t-29 22v404q0 33-23.5 56.5T680-40H280Zm0-80h400v-720H280v720Zm0 0v-720 720Zm200-600q17 0 28.5-11.5T520-760q0-17-11.5-28.5T480-800q-17 0-28.5 11.5T440-760q0 17 11.5 28.5T480-720Z"/></svg></span>Phones & Tablets</Link></li>
                        <li><Link onClick={() => setSidebar(false)} to="/category/supermarket"><span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff"><path d="M841-518v318q0 33-23.5 56.5T761-120H201q-33 0-56.5-23.5T121-200v-318q-23-21-35.5-54t-.5-72l42-136q8-26 28.5-43t47.5-17h556q27 0 47 16.5t29 43.5l42 136q12 39-.5 71T841-518Zm-272-42q27 0 41-18.5t11-41.5l-22-140h-78v148q0 21 14 36.5t34 15.5Zm-180 0q23 0 37.5-15.5T441-612v-148h-78l-22 140q-4 24 10.5 42t37.5 18Zm-178 0q18 0 31.5-13t16.5-33l22-154h-78l-40 134q-6 20 6.5 43t41.5 23Zm540 0q29 0 42-23t6-43l-42-134h-76l22 154q3 20 16.5 33t31.5 13ZM201-200h560v-282q-5 2-6.5 2H751q-27 0-47.5-9T663-518q-18 18-41 28t-49 10q-27 0-50.5-10T481-518q-17 18-39.5 28T393-480q-29 0-52.5-10T299-518q-21 21-41.5 29.5T211-480h-4.5q-2.5 0-5.5-2v282Zm560 0H201h560Z"/></svg></span>Supermarket</Link></li>
                        <li><Link onClick={() => setSidebar(false)} to="/category/boost"><span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff"><path d="m480-336 128-184H494l80-280H360v320h120v144ZM400-80v-320H280v-480h400l-80 280h160L400-80Zm80-400H360h120Z"/></svg></span>Boosted deals</Link></li>
                        <li><Link onClick={() => setSidebar(false)} to="/category/appliance"><span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff"><path d="M320-640v-120h80v120h-80Zm0 360v-200h80v200h-80ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h480q33 0 56.5 23.5T800-800v640q0 33-23.5 56.5T720-80H240Zm0-80h480v-360H240v360Zm0-440h480v-200H240v200Z"/></svg></span>Home Appliances</Link></li>
                    </ul>
                </div>
            </div>
        </header>

        
        </>
    )
}

export default Header


/*<div className="navbar">
                <div className="logo">
                    <Link to="/" className="nav-link first"><img className="ven" src={Velmora} alt="" /></Link>
                    
                </div>
                
                <nav>
                    <ul>
                        <form>
                            <input type="text"/>
                        </form>
                        <li><a href="#menu"  className="nav-link scale"><img src={Cart} alt="" /></a></li>
                        <li><Link to="/"  className="nav-link scale">Home</Link></li>
                        <li><a href="#menu"   className="nav-link scale">MENU</a></li>
                        <li onClick={() => setSidebar(!sidebar)}><Link to="#" className="nav-link menu">{sidebar ? (<FontAwesomeIcon icon={faXmark} size="2x" color="white" />) : (<FontAwesomeIcon icon={faBars} size="2x" color="white" />)}</Link></li>
                    </ul>
                </nav>
            </div>

            <nav className={sidebar ? "second-nav open" : "second-nav"}>
                <ul>
                    <li><Link to="/" className="link">Home</Link></li>
                    <li><a href="#menu"  className="link">MENU</a></li>
                    <li><a href="#about" className="link">ABOUT</a></li>
                    <li><Link to="/booking" className="link">RESERVATIONS</Link></li>
                    <li><Link to="/" className="link">LOGIN</Link></li>
                </ul>
            </nav>*/