"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [form, setForm] = useState({ email: "", password: "" });
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    console.log("Iniciar sesión con:", form);
   


    // Redirigir al inicio o dashboard luego del login
    router.push("/");
  };

  return (
    <div className="min-vh-100 d-flex justify-content-center align-items-center bg-light p-4">
      <div className="bg-white shadow rounded p-4 p-md-5 w-100" style={{ maxWidth: 500 }}>
        <h2 className="text-center mb-4 text-primary fw-bold">Iniciar sesión</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Correo electrónico</label>
            <input
              type="email"
              className="form-control"
              placeholder="ejemplo@correo.com"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Contraseña</label>
            <input
              type="password"
              className="form-control"
              placeholder="********"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-100 mt-3">
            Iniciar sesión
          </button>
        </form>

        <p className="text-center mt-3 text-muted">
          ¿No tienes cuenta? <a href="/registro">Regístrate aquí</a>

        </p>
        
      </div>
    </div>
  );
}
