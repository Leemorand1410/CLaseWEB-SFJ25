"use client";

import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import Link from "next/link";
import styles from "../styles/login.module.css";

export default function ResetPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(null);
  const { resetPassword } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await resetPassword(email);
      setMessage("📧 Te hemos enviado un correo para restablecer tu contraseña.");
    } catch (error) {
      setMessage("❌ Error al intentar recuperar la contraseña. Intenta nuevamente.");
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h1 className={styles.title}>Recuperar Contraseña</h1>

        <label className={styles.label}>Email registrado:</label>
        <input
          type="email"
          className={styles.input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <button type="submit" className={styles.button}>
          Enviar enlace de recuperación
        </button>

        {message && <p className={styles.message}>{message}</p>}

        <div style={{ marginTop: "1rem" }}>
          <Link href="/login" className={styles.link}>
            ← Volver al inicio de sesión
          </Link>
        </div>
      </form>
    </div>
  );
}
