import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function PublicarPage() {
  return (
    <div className="container py-5">
      <h2 className="text-primary mb-4">Publicar Propiedad</h2>
      <form style={{ maxWidth: 600 }}>
        <div className="mb-3">
          <label className="form-label">Título</label>
          <input type="text" className="form-control" placeholder="Ej. Apartamento céntrico" />
        </div>
        <div className="mb-3">
          <label className="form-label">Descripción</label>
          <textarea className="form-control" rows={3}></textarea>
        </div>
        <div className="mb-3">
          <label className="form-label">Precio</label>
          <input type="number" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Imagen URL</label>
          <input type="text" className="form-control" />
        </div>
        <button className="btn btn-success">Publicar</button>
      </form>
    </div>
  );
}
