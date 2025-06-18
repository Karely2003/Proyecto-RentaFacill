import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white to-orange-50 p-4 sm:p-12 font-sans">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-4 p-6 sm:p-12 text-center border border-orange-100">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <Image
            src="/images/logo.jpg"
            alt="Renta Fácil Logo"
            width={155}
            height={150}
            className="rounded-circle border border-secondary"
            priority
          />
        </div>

        {/* Título */}
        <h1 className="display-4 fw-bold text-orange-600 mb-3">
          Bienvenido a Renta Fácil
        </h1>

        {/* Subtítulo */}
        <p className="lead text-muted mb-5">
          Tu plataforma confiable para alquilar apartamentos en Honduras. Rápido, fácil y seguro.
        </p>

        {/* Acciones principales */}
        <div className="d-grid gap-3 mb-4">
          <a href="/inmueble/1" className="btn btn-outline-warning btn-lg">
            Ver inmueble destacado
          </a>
          <a href="/simulador" className="btn btn-outline-primary btn-lg">
            Probar simulador de pagos
          </a>
          <a href="/chat" className="btn btn-outline-info btn-lg">
            Hablar con un agente
          </a>
        </div>

        {/* Extra info opcional */}
        <div className="text-muted mt-4 small">
          Plataforma creada para ayudarte a encontrar tu próximo hogar de forma sencilla.
        </div>
      </div>
    </main>
  );
}
