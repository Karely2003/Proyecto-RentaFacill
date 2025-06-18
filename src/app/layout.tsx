import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import { ReactNode } from 'react';
import Image from 'next/image';

export const metadata = {
  title: 'Renta Fácil',
  description: 'App de renta de apartamentos',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet" />
      </head>
      <body style={{ fontFamily: 'Roboto, sans-serif' }}>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <div className="container d-flex align-items-center gap-2">
            <a className="navbar-brand d-flex align-items-center gap-2" href="/">
              <Image
                src="/images/logo.jpg"
                alt="Renta Fácil Logo"
                width={120}
                height={40}
                style={{ objectFit: 'contain' }}
                className="rounded"
                priority
              />
              <span className="fw-bold">Renta Fácil</span>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item"><a className="nav-link" href="/login">Iniciar sesión</a></li>
                <li className="nav-item"><a className="nav-link" href="/registro">Registro</a></li>
                <li className="nav-item"><a className="nav-link" href="/busqueda">Búsqueda</a></li>
                <li className="nav-item"><a className="nav-link" href="/resultados">Resultados</a></li>
                <li className="nav-item"><a className="nav-link" href="/publicar">Publicar</a></li>
                <li className="nav-item"><a className="nav-link" href="/inmueble/1">Inmueble</a></li>
                <li className="nav-item"><a className="nav-link" href="/chat">Chat</a></li>
                <li className="nav-item"><a className="nav-link" href="/simulador">Simulador</a></li>
                <li className="nav-item"><a className="nav-link" href="/mapa">Mapa</a></li>
              </ul>
            </div>
          </div>
        </nav>
        <main className="container py-4">{children}</main>
      </body>
    </html>
  );
}
