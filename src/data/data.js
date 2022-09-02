import client from "./client";

async function fetchFeaturedProducts(setData) {
  let response;

  try {
    response = await client.get("products?limit=6");
  } catch (e) {
    console.error(e);
    response = { data: [] };
  }

  setData(response.data);
}

export { fetchFeaturedProducts };
