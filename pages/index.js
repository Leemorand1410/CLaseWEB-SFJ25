"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from '../styles/login.module.css';  // Ajusta la ruta si es necesario

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    const validEmail = 'ad@min.com';
    const validPassword = '1234';

    if (email === validEmail && password === validPassword) {
      alert('Login exitoso');
      router.push('/home');  // Redirige al Dashboard
    } else {
      alert('Credenciales incorrectas');
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h1 className={styles.title}>Login</h1>
        <label className={styles.label}>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className={styles.input}
        />
        <label className={styles.label}>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className={styles.input}
        />
        <button type="submit" className={styles.button}>Login</button>
      </form>
    </div>
  );
}
