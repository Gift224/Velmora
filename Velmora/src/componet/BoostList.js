

import { Link } from "react-router-dom";
import { boosteddeals } from "./products"
import "./Home.css"

function BoostList() {
    return(
        <>
            <section>
                <div className="product-container-1" style={{paddingTop: "50px",}}>
                <div className="product-bar" style={{background: "#FE6803"}}>
                    <div className="deal"><h4 >Boosted deals ⚡</h4></div>
                    <div><Link to="/category/boost"><button>See all <span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/></svg></span></button></Link></div>
                </div>
                <div className="projects">
                    {boosteddeals.map((boosteddeal) => (
                    <Link
                        key={boosteddeal.id}
                        to={`/product/${boosteddeal.category}/${boosteddeal.id}`}
                        style={{ textDecoration: "none", color: "black" }}
                    >
                        <div className="card">
                            <div className="boo">
                                <img className="card-image" src={boosteddeal.images[0]} alt={boosteddeal.description} width="200" />
                            </div>
                        
                            <div className="card-body">
                                <h5 className="one-line-text">{boosteddeal.title}</h5>
                                <p>₦ {boosteddeal.price.toLocaleString("en-NG")}</p>
                                <p className="cabo-h5">{boosteddeal.oldprice}</p>
                            </div>
                        </div>
                    </Link>
                    ))}
                </div>
                </div>
            </section>
        </>
    )
}

export default BoostList