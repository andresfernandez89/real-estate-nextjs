if (!process.env.NEXT_PUBLIC_API_URL) {
  console.log("error");
  throw new Error();
}

export const getApiUrl = async (path: string, options?: RequestInit) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}${path}`,
    options || {},
  );
  return await response.json();
};
