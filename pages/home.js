"use client";

import styles from '/styles/dashboard.module.css';

export default function Dashboard() {
  const user = {
    name: "Juan Pérez",
    email: "juan.perez@example.com",
    role: "Administrador",
    lastLogin: "2025-02-14",
  };

  const tasks = [
    { id: 1, title: "Revisar reportes", status: "Completado" },
    { id: 2, title: "Actualizar perfil", status: "Pendiente" },
    { id: 3, title: "Reunión con equipo", status: "En progreso" },
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Dashboard</h1>
      <div className={styles.profile}>
        <h2>Bienvenido, {user.name}</h2>
        <p>Email: {user.email}</p>
        <p>Rol: {user.role}</p>
        <p>Último acceso: {user.lastLogin}</p>
      </div>

      <div className={styles.tasks}>
        <h2>Tus Tareas</h2>
        <ul>
          {tasks.map((task) => (
            <li key={task.id} className={styles.task}>
              {task.title} - <span className={styles.status}>{task.status}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
