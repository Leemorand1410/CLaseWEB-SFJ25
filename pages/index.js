import { useAuth } from "/context/AuthContext";
import { useEffect } from "react";
import { useRouter } from "next/router";
import styles from "/styles/login.module.css"; 


const Home = () => {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/"); // Redirige al login si no está autenticado
    }
  }, [user]);

  if (!user) return null; // Evita que se renderice la página mientras redirige

  return (
    <div>
      <h1>Bienvenido a la página</h1>
    </div>
  );
};

export default Home;
