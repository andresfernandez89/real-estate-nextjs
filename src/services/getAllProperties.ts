import { getApiUrl } from "./config";

export async function getAllProperties() {
  const { data } = await getApiUrl("/properties/sitemap");
  //const dataNormalized: [] = [];
  //data.forEach((res: any) => dataNormalized.concat(res));
  return data;
}
