import { getApiUrl } from "./config";

interface IFormParams {
  asunto: string;
  email: string;
  nombre: string;
  telefono: string;
  mensaje: string;
}

export async function sendContact(formData: IFormParams) {
  const options: RequestInit = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  };
  const response = await getApiUrl("/contact", options);
  return response;
}
