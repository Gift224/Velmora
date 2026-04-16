

import { Link } from "react-router-dom";
import { fashions } from "./products"
import "./Home.css"

function FashionList() {
    return(
        <>
            <section>
                <div className="product-container-1">
                <div className="product-bar">
                    <div><h4>Fashion deals</h4></div>
                    <div><Link to="/category/fashion"><button>See all <span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/></svg></span></button></Link></div>
                </div>
                <div className="projects">
                    {fashions.map((fashion) => (
                    <Link
                        key={fashion.id}
                        to={`/product/${fashion.category}/${fashion.id}`}
                        style={{ textDecoration: "none", color: "black" }}
                    >
                        <div className="card">
                        <img className="card-image" src={fashion.images[0]} alt={fashion.description} width="200" />
                        <div className="card-body">
                            <h5 className="one-line-text">{fashion.title}</h5>
                            <p>₦ {fashion.price.toLocaleString("en-NG")}</p>
                            <p className="cabo-h5">{fashion.oldprice}</p>
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

export default FashionList