import { useState } from "react";
import Menu from "../components/nav";
import Footer from "../components/Footer";
import "../styles/contacto.css";

const Contacto = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [alerta, setAlerta] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setNombre("");
    setEmail("");
    setMensaje("");
    setAlerta(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => setAlerta(false), 4500);
  };

  return (
    <div className="contact-page">
      <Menu />
      <main className="contact-container">
        <section className="contact-card">
          <div className="contact-hero">
            <h1>Contacto</h1>
            <p>
              Si tienes comentarios, sugerencias o preguntas sobre la saga o el sitio,
              escríbenos. Estamos aquí para ayudarte en cada aventura.
            </p>
          </div>

          {alerta && <div className="contact-alert">Mensaje enviado con éxito.</div>}

          <form className="contact-form" onSubmit={handleSubmit}>
            <label htmlFor="nombre">Nombre</label>
            <input
              id="nombre"
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              placeholder="Tu nombre"
              required
            />

            <label htmlFor="email">Dirección de correo electrónico</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu@correo.com"
              required
            />

            <label htmlFor="mensaje">Mensaje</label>
            <textarea
              id="mensaje"
              value={mensaje}
              onChange={(e) => setMensaje(e.target.value)}
              placeholder="Escribe tu mensaje aquí..."
              rows="6"
              required
            />

            <button type="submit" className="contact-button">
              Enviar mensaje
            </button>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contacto;
