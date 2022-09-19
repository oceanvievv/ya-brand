import "./css/featured.scss"
import ProductCard from "../../base/ProductCard/ProductCard"
import { useEffect, useState } from "react"
import { fetchFeaturedProducts } from "../../../data/data"
import FetchErr from "../../base/FetchErr/FetchErr"
import Loader from "../../base/Loader/Loader"

export default function Featured() {
  const [products, setProducts] = useState([])
  const [isFetching, setIsFetching] = useState(true)
  const [fetchErr, setFetchErr] = useState(null)

  useEffect(() => {
    fetchFeaturedProducts(setProducts, setFetchErr, setIsFetching).then()
  }, [])

  return (
    <div className="featured-wrapper featured-wrapper_md featured-wrapper_lg">
      <div className="featured__title">
        <div className="featured__title_main">Featured items</div>
        <div className="featured__title_sub">
          Shop for items based on what we featured in this week
        </div>
      </div>
      {isFetching && <Loader />}
      {!fetchErr && (
        <>
          <div className="featured-items md:featured-items_md">
            {products.map((data, i) => (
              <ProductCard key={i} data={data} />
            ))}
          </div>
          {!isFetching && (
            <button
              className="featured__show-more-btn"
              onClick={() => console.log("srat")}
            >
              Browse All Products
            </button>
          )}
        </>
      )}
      {fetchErr && (
        <FetchErr fetchType={"FEATURED PRODUCTS"} fetchErr={fetchErr} />
      )}
    </div>
  )
}
