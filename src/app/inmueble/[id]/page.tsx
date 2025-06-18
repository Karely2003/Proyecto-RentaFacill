// src/app/inmueble/[id]/page.tsx
import React from 'react';

interface PageProps {
  params: {
    id: string;
  };
}

export default function InmueblePage({ params }: PageProps) {
  const { id } = params;

  const inmuebleDemo = {
    id,
    titulo: "Apartamento moderno en Tegucigalpa",
    descripcion: "Este apartamento cuenta con 3 habitaciones, 2 baños, cocina equipada y una hermosa vista a la ciudad.",
    precio: "L 12,000 / mes",
    imagen: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80", // URL directa
  };

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4 text-orange-600">{inmuebleDemo.titulo}</h1>
      <img
        src={inmuebleDemo.imagen}
        alt={inmuebleDemo.titulo}
        className="w-full rounded-lg shadow mb-6"
      />
      <p className="text-gray-700 mb-4">{inmuebleDemo.descripcion}</p>
      <p className="text-lg font-semibold text-orange-500">{inmuebleDemo.precio}</p>
    </div>
  );
}
