

import { Link } from "react-router-dom";
import { appliances } from "./products"
import "./Home.css"

function ApplianceList() {
    return(
        <>
            <section>
                <div className="product-container-1">
                <div className="product-bar">
                    <div><h4>Homeappliance deals</h4></div>
                    <div><Link to="/category/appliance"><button>See all <span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/></svg></span></button></Link></div>
                </div>
                <div className="projects">
                    {appliances.map((appliance) => (
                    <Link
                        key={appliance.id}
                        to={`/product/${appliance.category}/${appliance.id}`}
                        style={{ textDecoration: "none", color: "black" }}
                    >
                        <div className="card">
                        <img className="card-image" src={appliance.images[0]} alt={appliance.description} width="200" />
                        <div className="card-body">
                            <h5 className="one-line-text">{appliance.title}</h5>
                            <p>₦ {appliance.price.toLocaleString("en-NG")}</p>
                            <p className="cabo-h5">{appliance.oldprice}</p>
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

export default ApplianceList