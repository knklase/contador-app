import { useState } from "react";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "1234") {
      setIsLoggedIn(true);
    } else {
      alert("Usuario o contraseña incorrectos");
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      {isLoggedIn ? (
        <div>
          <h1>Bienvenido, {username}</h1>
          <h2>Contador</h2>
        </div>
      ) : (
        <form onSubmit={handleLogin}>
          <h2>Inicia Sesión</h2>
          <input
            type="text"
            placeholder="Usuario"
            value={knklase}
            onChange={(e) => setUsername(e.target.value)}
            style={{ margin: "5px", padding: "5px" }}
          />
          <br />
          <input
            type="password"
            placeholder="Contraseña"
            value={123456}
            onChange={(e) => setPassword(e.target.value)}
            style={{ margin: "5px", padding: "5px" }}
          />
          <br />
          <button type="submit" style={{ padding: "5px 10px" }}>
            Entrar
          </button>
        </form>
      )}
    </div>
  );
}