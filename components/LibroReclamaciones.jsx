"use client"

import { useState } from "react";
import { db } from "../config/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const initialForm = {
  tipo: "Reclamo",
  nombre: "",
  documento: "",
  domicilio: "",
  telefono: "",
  email: "",
  servicio: "",
  detalle: "",
  pedido: "",
};

function LibroReclamaciones() {
  const [form, setForm] = useState(initialForm);
  const [enviando, setEnviando] = useState(false);
  const [numeroReclamo, setNumeroReclamo] = useState(null);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setEnviando(true);

    const numero = `EADES-${Date.now().toString().slice(-8)}`;

    try {
      await addDoc(collection(db, "reclamaciones"), {
        numero,
        ...form,
        creadoEn: serverTimestamp(),
      });

      setNumeroReclamo(numero);
      setForm(initialForm);
    } catch (err) {
      setError("Ocurrió un error al registrar tu reclamo. Por favor intenta nuevamente o escríbenos a infoeades@grupoeades.org — " + err.message);
    } finally {
      setEnviando(false);
    }
  };

  if (numeroReclamo) {
    return (
      <div className="bg-white/60 border border-azul/20 rounded-lg p-8 text-center space-y-3">
        <h2 className="font-poppins font-semibold text-xl text-azul">¡Reclamo registrado!</h2>
        <p className="font-open-sans text-azul">
          Tu número de reclamo es <strong>{numeroReclamo}</strong>. Hemos registrado los detalles y te
          responderemos al correo o teléfono proporcionado en un plazo máximo de 30 días calendario.
        </p>
        <button
          onClick={() => setNumeroReclamo(null)}
          className="mt-4 text-azul underline hover:text-azul/70 text-sm"
        >
          Registrar otro reclamo
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8 font-open-sans">
      <section className="space-y-3">
        <h2 className="font-poppins font-semibold text-xl text-azul">1. Tipo de comunicación</h2>
        <div className="flex gap-6">
          <label className="flex items-center gap-2 text-azul">
            <input
              type="radio"
              name="tipo"
              value="Reclamo"
              checked={form.tipo === "Reclamo"}
              onChange={handleChange}
            />
            Reclamo
          </label>
          <label className="flex items-center gap-2 text-azul">
            <input
              type="radio"
              name="tipo"
              value="Queja"
              checked={form.tipo === "Queja"}
              onChange={handleChange}
            />
            Queja
          </label>
        </div>
        <p className="text-sm text-azul/60">
          <strong>Reclamo:</strong> disconformidad relacionada a los servicios ofrecidos.{" "}
          <strong>Queja:</strong> malestar respecto a la atención al público.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-poppins font-semibold text-xl text-azul">2. Datos del consumidor</h2>
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
          <input
            type="text"
            name="nombre"
            placeholder="Nombre completo"
            value={form.nombre}
            onChange={handleChange}
            required
            className="p-4 bg-white/60 border border-azul/30 outline-none w-full rounded-md text-azul placeholder:text-azul/50"
          />
          <input
            type="text"
            name="documento"
            placeholder="DNI / Carné de extranjería"
            value={form.documento}
            onChange={handleChange}
            required
            className="p-4 bg-white/60 border border-azul/30 outline-none w-full rounded-md text-azul placeholder:text-azul/50"
          />
          <input
            type="tel"
            name="telefono"
            placeholder="Teléfono"
            value={form.telefono}
            onChange={handleChange}
            required
            className="p-4 bg-white/60 border border-azul/30 outline-none w-full rounded-md text-azul placeholder:text-azul/50"
          />
          <input
            type="email"
            name="email"
            placeholder="Correo electrónico"
            value={form.email}
            onChange={handleChange}
            required
            className="p-4 bg-white/60 border border-azul/30 outline-none w-full rounded-md text-azul placeholder:text-azul/50"
          />
          <input
            type="text"
            name="domicilio"
            placeholder="Domicilio"
            value={form.domicilio}
            onChange={handleChange}
            required
            className="p-4 bg-white/60 border border-azul/30 outline-none w-full rounded-md text-azul placeholder:text-azul/50 sm:col-span-2"
          />
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="font-poppins font-semibold text-xl text-azul">3. Detalle</h2>
        <input
          type="text"
          name="servicio"
          placeholder="Servicio contratado (ej. Terapia individual, Evaluación psicológica)"
          value={form.servicio}
          onChange={handleChange}
          required
          className="p-4 bg-white/60 border border-azul/30 outline-none w-full rounded-md text-azul placeholder:text-azul/50"
        />
        <textarea
          name="detalle"
          placeholder="Detalle del reclamo o queja"
          value={form.detalle}
          onChange={handleChange}
          rows={4}
          required
          style={{ resize: "none" }}
          className="p-4 bg-white/60 border border-azul/30 outline-none w-full rounded-md text-azul placeholder:text-azul/50"
        />
        <textarea
          name="pedido"
          placeholder="Pedido concreto (¿qué solución esperas?)"
          value={form.pedido}
          onChange={handleChange}
          rows={3}
          required
          style={{ resize: "none" }}
          className="p-4 bg-white/60 border border-azul/30 outline-none w-full rounded-md text-azul placeholder:text-azul/50"
        />
      </section>

      {error && <p className="text-red-600 text-sm">{error}</p>}

      <button
        type="submit"
        disabled={enviando}
        className="w-full bg-azul text-white font-poppins text-lg text-center py-4 rounded-md hover:bg-azul/90 transition-colors disabled:opacity-60"
      >
        {enviando ? "Enviando..." : "Enviar reclamo"}
      </button>
    </form>
  );
}

export default LibroReclamaciones;
