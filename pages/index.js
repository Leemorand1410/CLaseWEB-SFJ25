import { useRouter } from "next/router";
import styles from "/styles/index.module.css";


const Home = () => {
  const router = useRouter();

  return (
    <div className={styles.welcomeContainer}>
      <div className={styles.welcomeCard}>
        <h1 className={styles.welcomeTitle}>¡Bienvenido!</h1>
        <p className={styles.welcomeText}>
          Descubre todas las funcionalidades que tenemos para ti. Inicia sesión o regístrate para acceder a tu perfil.
        </p>

        <div className={styles.buttonContainer}>
          <button className={styles.loginButton} onClick={() => router.push('/login')}>
            Iniciar Sesión
          </button>
          <button className={styles.signupButton} onClick={() => router.push('/login')}>
            Registrarse
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
