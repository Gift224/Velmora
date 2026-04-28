

import { Link } from "react-router-dom";
import { electronics } from "./products"
import "./Home.css"

function ElectronicsList() {
    return(
        <>
            <section>
                <div className="product-container-1">
                <div className="product-bar">
                    <div><h4>Electronics Deals</h4></div>
                    <div><Link to="/category/electronic"><button>See all <span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/></svg></span></button></Link></div>
                </div>
                <div className="projects">
                    {electronics.map((electronic) => (
                    <Link
                        key={electronic.id}
                        to={`/product/${electronic.category}/${electronic.id}`}
                        style={{ textDecoration: "none", color: "black" }}
                    >
                        <div className="card">
                            <div className="boo"> 
                                <img className="card-image" src={electronic.images[0]} alt={electronic.description} width="200" />
                            </div>
                            <div className="card-body">
                                <h5 className="one-line-text">{electronic.title}</h5>
                                <p>₦ {electronic.price.toLocaleString("en-NG")}</p>
                                <p className="cabo-h5">{electronic.oldprice}</p>
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

export default ElectronicsList