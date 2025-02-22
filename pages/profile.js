import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { useRouter } from "next/router";
import styles from '../styles/profile.module.css';

const Profile = () => {
  const { user, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [user]);
  if (!user) return null; // Evita renderizar antes de autenticación
  return (
    <div className={styles.profileContainer}>
      <div className={styles.profileCard}>
        <img
          src="/profile-pic.jpg" // Cambia esto por tu foto de perfil
          alt="Foto de perfil"
          className={styles.profileImage}
        />
        <h1 className={styles.profileName}>Tu Nombre</h1>
        <p className={styles.profileRole}>Tu Ocupación</p>
      </div>

      <div className={styles.profileContent}>
        <section className={styles.section}>
          <h2>Resumen</h2>
          <p>Bienvenido a tu perfil. Aquí puedes ver información clave sobre ti.</p>
        </section>

        <section className={styles.section}>
          <h2>Habilidades</h2>
          <ul className={styles.skillList}>
            <li>Desarrollo Web</li>
            <li>Optimización de Datos</li>
            <li>Gestión de Software</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Últimas Actividades</h2>
          <ul className={styles.activityList}>
            <li>✅ Finalizado el diseño de PathExplorer</li>
            <li>📌 Implementado sistema de login en Next.js</li>
            <li>🚀 Desplegada la primera versión del bot de WhatsApp</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Profile;
