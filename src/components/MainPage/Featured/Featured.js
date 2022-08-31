import "./css/featured.scss";
import featuredData from "./js/featuredData";
import ProductCard from "../../base/ProductCard/ProductCard";

export default function Featured() {
  return (
    <div className="featured-wrapper featured-wrapper_md featured-wrapper_lg">
      <div className="featured__title">
        <div className="featured__title_main">Featured items</div>
        <div className="featured__title_sub">
          Shop for items based on what we featured in this week
        </div>
      </div>
      <div className="featured-items md:featured-items_md">
        {featuredData.map((data, i) => (
          <ProductCard key={i} data={data} />
        ))}
      </div>
      <button
        className="featured__show-more-btn"
        onClick={() => console.log("srat")}
      >
        Browse All Products
      </button>
    </div>
  );
}
