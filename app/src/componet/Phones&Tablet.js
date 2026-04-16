


/*import { useParams, Link } from "react-router-dom";
import { apples, appliances, electronics, fashions } from "./products";
import "./Phones&Tablets.css"

function PhonesTablet (){

    const { category, id } = useParams();

    const dataMap = {
        apple: apples,
        appliance: appliances,
        electronic: electronics,
        fashoin: fashions,
    };

    const product = dataMap[category]?.find(
        (p) => p.id === Number(id)
    );


    return(
        <main>
            <section className="product-page">
                <di>
                    <div><h2>{product.category}</h2></div>
                </di>
                <div>
                    <div className="product-page-grid">
                        <div>
                            {apples.map((product) => (
                            <Link
                                key={product.id}
                                to={`/product/${product.category}/${product.id}`}
                                style={{ textDecoration: "none", color: "black" }}
                            >
                                <div className="card">
                                <img className="card-image" src={product.images[0]} alt={product.description} width="200" />
                                <div className="card-body">
                                    <h5 className="one-line-text">{product.title}</h5>
                                    <p>₦ {product.price.toLocaleString("en-NG")}</p>
                                    <p className="cabo-h5">{product.oldprice}</p>
                                </div>
                                </div>
                            </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default PhonesTablet*/


import { useParams, Link } from "react-router-dom";
import { apples, appliances, boosteddeals, electronics, fashions, supermarkets } from "./products";
import "./Phones&Tablets.css"
import { Breadcrumb } from "./ProductDetail";

function CategoryPage() {
  const { category } = useParams();

  const dataMap = {
    apple: apples,
    appliance: appliances,
    electronic: electronics,
    fashion: fashions,
    supermarket: supermarkets,
    boost: boosteddeals,
  };

  // get products based on category
  const products = dataMap[category];

  // handle invalid category
  if (!products) {
    return <h2>Category not found</h2>;
  }

  return (
    <main>
      <Breadcrumb />
      <section className="product-page">
        <div className="product-page-name">
          <h3 style={{ textTransform: "capitalize" }}>
          {category} 
         </h3>
        </div>

        <div className="product-page-grid">
          {products.map((item) => (
            <Link
              key={item.id}
              to={`/product/${item.category}/${item.id}`}
              style={{ textDecoration: "none", color: "black" }}
            >
              <div className="product-card">
                <img
                  className="product-card-image"
                  src={item.images[0]}
                  alt={item.description}
                  width="200"
                />

                <div className="product-card-body">
                  <h5 className="product-one-line-text">{item.title}</h5>
                  <p>₦ {item.price.toLocaleString("en-NG")}</p>
                  <p className="product-cabo-h5">{item.oldprice}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

export default CategoryPage;