import Link from "next/link";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav style={{ display: "flex", justifyContent: "space-between", padding: "1rem", background: "#333", color: "#fff" }}>
      <div>
        <Link href="/home" style={{ marginRight: "1rem", color: "#fff" }}>Home</Link>
        <Link href="/profile" style={{ marginRight: "1rem", color: "#fff" }}>Perfil</Link>
      </div>
      <div>
        {user ? (
          <button onClick={logout} style={{ background: "red", color: "#fff", border: "none", cursor: "pointer" }}>Cerrar sesión</button>
        ) : (
          <Link href="/login" style={{ color: "#fff" }}>Login</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
