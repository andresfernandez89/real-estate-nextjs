import { getApiUrl } from "./config";

export async function getAllProperties() {
  const response = await getApiUrl("/properties/sitemap");
  const dataNormalized: [] = [];
  response.data.forEach((res) => dataNormalized.concat(res));
  return response;
}
