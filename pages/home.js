import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { useRouter } from "next/router";

const Home = () => {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [user]);

  if (!user) return null; // Evita renderizar contenido antes de la redirección

  return (
    <div>
      <h1>Bienvenido a Home</h1>
      <button onClick={() => logout()}>Cerrar Sesión</button>
    </div>
  );
};

export default Home;
