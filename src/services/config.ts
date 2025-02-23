if (!process.env.API_URL) {
  throw new Error();
}

export const getApiUrl = async (path: string, options?: Request) => {
  const response = await fetch(`${process.env.API_URL}${path}`, options || {});
  return await response.json();
};
