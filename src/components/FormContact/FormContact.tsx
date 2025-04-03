"use client";
import { useRef } from "react";
import Swal from "sweetalert2";
import { IFormParams } from "./FormContact.types";

export function FormContact() {
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      const formData = new FormData(event.target as HTMLFormElement);
      const formValues: IFormParams = {
        asunto: "Contacto Web",
        email: formData.get("email") as string,
        nombre: formData.get("nombre") as string,
        telefono: formData.get("telefono") as string,
        mensaje: formData.get("mensaje") as string,
      };

      //const response = await sendContact(formValues);
      //console.log(response);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Mensaje enviado",
        showConfirmButton: true,
      });
      formRef.current?.reset();
    } catch (error) {
      console.error("Error al procesar el formulario:", error);
    }
  }
  return (
    <form ref={formRef} onSubmit={handleSubmit} className="">
      <div className="flex-1">
        <label className="mb-2 block text-sm text-gray-500">Nombre</label>
        <input
          required
          name="nombre"
          type="text"
          className="focus:ring-opacity-40 mt-2 block w-full rounded-md border border-gray-400 bg-zinc-200/30 px-5 py-3 text-gray-800 focus:border-gray-400 focus:ring focus:ring-gray-400 focus:outline-none"
        />
      </div>

      <div className="mt-6 flex-1">
        <label className="mb-2 block text-sm text-gray-500">Email</label>
        <input
          required
          name="email"
          type="email"
          className="focus:ring-opacity-40 mt-2 block w-full rounded-md border border-gray-400 bg-zinc-200/30 px-5 py-3 text-gray-800 focus:border-gray-400 focus:ring focus:ring-gray-400 focus:outline-none"
        />
      </div>
      <div className="mt-6 flex-1">
        <label className="mb-2 block text-sm text-gray-500">Teléfono</label>
        <input
          required
          name="telefono"
          type="tel"
          className="focus:ring-opacity-40 mt-2 block w-full rounded-md border border-gray-400 bg-zinc-200/30 px-5 py-3 text-gray-800 focus:border-gray-400 focus:ring focus:ring-gray-400 focus:outline-none"
        />
      </div>

      <div className="mt-6 w-full">
        <label className="mb-2 block text-sm text-gray-500">Mensaje</label>
        <textarea
          required
          name="mensaje"
          className="focus:ring-opacity-40 mt-2 block h-32 w-full rounded-md border border-gray-400 bg-zinc-200/30 px-5 py-3 text-gray-800 focus:border-gray-400 focus:ring focus:ring-gray-400 focus:outline-none md:h-48"
        ></textarea>
      </div>

      <button
        type="submit"
        className="focus:ring-opacity-50 bg-secondary-client hover:bg-secondary-client mt-6 w-full transform cursor-pointer rounded-md px-6 py-3 text-sm font-medium tracking-wide text-gray-900 capitalize transition-colors duration-300 focus:ring focus:ring-blue-300 focus:outline-none"
      >
        Enviar
      </button>
    </form>
  );
}
