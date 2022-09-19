import client from "./client"

async function fetchFeaturedProducts(setData, setFetchErr, setIsFetching) {
  let response

  try {
    response = await client.get("products?limit=6")
  } catch (e) {
    console.error(e.message)
    setFetchErr(e.message)
    response = { data: [] }
  }

  setTimeout(() => {
    setData(response.data)
    setIsFetching(false)
  }, 1000)
}

export { fetchFeaturedProducts }
