import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { useRouter } from "next/router";
import styles from "/styles/home.module.css";

export default function Home() {
  const { user, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/");
    }
  }, [user]);

  if (!user) return null; // Evita renderizar antes de autenticación

  return (
    <div className={styles.container}>
  

  {/* Contenido principal */}
  <main className={styles.main}>
    <h2 className={styles.welcomeTitle}>
      ¡Bienvenido, <span className={styles.welcomeHighlight}>{user?.email}</span>!
    </h2>
    <p className={styles.welcomeText}>Aquí puedes administrar tu cuenta y acceder a las funcionalidades disponibles.</p>

    {/* Sección de tarjetas */}
    <div className={styles.cardContainer}>
      <div className={styles.card}>
        <h3 className={styles.cardTitle}>Configuración</h3>
        <p className={styles.cardText}>Administra tu cuenta y preferencias.</p>
        <button className={styles.cardButton}>Ir a Configuración</button>
      </div>

      <div className={styles.card}>
        <h3 className={styles.cardTitle}>Soporte</h3>
        <p className={styles.cardText}>Obtén ayuda y contacta con nuestro equipo.</p>
        <button className={styles.cardButton}>Contactar Soporte</button>
      </div>
    </div>
  </main>

  {/* Footer */}
  <footer className={styles.footer}>
    <p>© 2025 Tu Empresa - Todos los derechos reservados</p>
  </footer>
</div>
  );
}
