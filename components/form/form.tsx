"use client";

import { useState, FormEvent } from "react";
import "./form.css";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Une erreur est survenue");
      }

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });

      // Réinitialiser le statut après 5 secondes
      setTimeout(() => {
        setStatus("idle");
      }, 5000);
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Une erreur est survenue",
      );
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="contact-form-section">
      <div className="contact-form-container">
        <h2 className="contact-form-title">Contactez-moi</h2>
        <p className="contact-form-subtitle">
          Une question ou un projet ? N'hésitez pas à me contacter
        </p>

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name" className="form-label">
              Nom
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="form-input"
              placeholder="Votre nom"
              disabled={status === "loading"}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="form-input"
              placeholder="votre@email.com"
              disabled={status === "loading"}
            />
          </div>

          <div className="form-group">
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="form-textarea"
              placeholder="Votre message..."
              rows={5}
              disabled={status === "loading"}
            />
          </div>

          <button
            type="submit"
            className={`form-submit ${status}`}
            disabled={status === "loading"}
          >
            {status === "loading" && "Envoi en cours..."}
            {status === "success" && "✓ Message envoyé !"}
            {status === "error" && "✗ Erreur"}
            {status === "idle" && "Envoyer"}
          </button>

          {status === "error" && <p className="form-error">{errorMessage}</p>}

          {status === "success" && (
            <p className="form-success">
              Merci pour votre message ! Je vous répondrai dans les plus brefs
              délais.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
