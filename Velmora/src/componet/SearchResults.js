import { useLocation, Link } from "react-router-dom";
import { apples, appliances, electronics, fashions } from "./products";
import "./SearchResults.css";

export default function SearchResults() {
  const query = new URLSearchParams(useLocation().search).get("query") || "";

  const allProducts = [
    ...apples,
    ...appliances,
    ...electronics,
    ...fashions,
  ];

  const filteredProducts = allProducts.filter((product) =>
    product.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="search-page">
      <h2>Search Results for "{query}"</h2>

      {filteredProducts.length === 0 ? (
        <p className="no-result">No products found</p>
      ) : (
        <div className="product-grid">
          {filteredProducts.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.category}/${product.id}`}
              className="product-card-search"
            >
              <div className="boo">
                <img src={product.images[0]} alt={product.title} />
              </div>
              <h4>{product.title}</h4>
              <p>₦{product.price.toLocaleString("en-NG")}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
