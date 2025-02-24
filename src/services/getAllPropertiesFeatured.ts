import { getApiUrl } from "./config";

export async function getAllPropertiesFeatured() {
  const { data } = await getApiUrl("/properties/featured");
  return data;
}
