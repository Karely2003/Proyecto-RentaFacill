'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';

import React, { useEffect, useState } from "react";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Circle,
} from "react-leaflet";

/*
const MapaLeaflet = dynamic(() => import('@/components/MapaLeaflet'), {
  ssr: false,
});
*/

import L, { LatLngBounds, latLngBounds, latLng } from "leaflet";
import "leaflet/dist/leaflet.css";

// Configuración del ícono por defecto
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

export default function MapaPage() {
  
interface Inmueble {
  id: number;
  nombre_publicacion: string;
  descripcion: string;
  direccion: string;
  barrio_colonia: string;
  tipo: string;
  precio: number;
  acepta_mascotas: number;
  servicios_incluidos: string;
  normas_convivencia: string;
  imagen: string;
}

  const [inmuebles, setInmuebles] = useState<Inmueble[]>([]);

  const ubicaciones: [number, number][] = [
    [14.0723, -87.1921], 
    [15.5007, -88.027], 
    [14.6667, -86.2167],
    [14.7667, -88.7833],
    [13.58989, -87.34971],
  ];
    
  //En cuanto cargue la pagina, nos trae los inmuebles
    useEffect(() => {
    const fetchInmuebles = async () => {
      try {
        const res = await fetch("http://localhost:3001/api/inmuebles");
        const data = await res.json();
        console.log("Datos recibidos:", data);
        setInmuebles(data);
      } catch (err) {
        console.error("Error al cargar inmuebles:", err);
      }
    };

    fetchInmuebles();
  }, []);

  return (
       <>

    {/* 
    <div className="card">
      <div className="card-header bg-success text-white">Ubicación del Inmueble</div>
      <div className="card-body" style={{ height: '400px' }}>
        <Suspense fallback={<p>Cargando mapa...</p>}>
          <MapaLeaflet />
        </Suspense>
      </div>
    </div>*/
    }

   <div className="card">
     <div className="card-header bg-success text-white">Ubicación del Inmueble</div>
      <MapContainer
        center={ubicaciones[0]}
        zoom={9}
        className="w-screen h-screen m-0 p-0 overflow-hidden"
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        {/* Marcadores para cada ubicación con información del inmueble correspondiente */}
        {ubicaciones.map(([lat, lng], index) => (
          <Marker key={index} position={[lat, lng]}>
            <Popup maxWidth={250}>
              <strong>
                {inmuebles[index]?.nombre_publicacion || "Sin información"}
              </strong>
              <br />
              Coordenadas: {lat.toFixed(4)}, {lng.toFixed(4)}
              <br />
              Descripción: {inmuebles[index]?.descripcion || "Sin información"}
              <br />
              Dirección: {inmuebles[index]?.direccion || "Sin información"}
              <br />
              Barrio/Colonia: {inmuebles[index]?.barrio_colonia || "Sin información"}
              <br />
              Tipo: {inmuebles[index]?.tipo || "Sin información"}
              <br />
              Precio: {inmuebles[index]?.precio || "Sin información"} Lps
              <br />
              Se aceptan mascotas:{" "}
              {inmuebles[index]
                ? inmuebles[index].acepta_mascotas
                  ? "Sí"
                  : "No"
                : "Sin información"}
              <br />
              Servicios incluidos:{" "}
              {inmuebles[index]?.servicios_incluidos || "Sin información"}
              <br />
              Normas de convivencia:{" "}
              {inmuebles[index]?.normas_convivencia || "Sin información"}
              <br />
              {inmuebles[index]?.imagen && (
                <img
                  src={inmuebles[index].imagen}
                  alt="Habitación"
                  style={{
                    width: "100%",
                    borderRadius: "4px",
                    marginTop: "8px",
                  }}
                />
              )}
              <br />
              <button
                onClick={() =>
                  alert("Has solicitado alquilar esta propiedad.")
                }
                style={{
                  marginTop: "8px",
                  padding: "6px 12px",
                  backgroundColor: "#2563eb",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                Alquilar
              </button>
            </Popup>
          </Marker>
        ))}

        {/* Círculo de ejemplo */}
        <Circle
          center={ubicaciones[0]}
          radius={20000}
          pathOptions={{
            color: "blue",
            fillColor: "lightblue",
            fillOpacity: 0.3,
          }}
        />
      </MapContainer>
      </div>
    </>
  );
}