import { useState } from "react";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [selectedNumber, setSelectedNumber] = useState(null);

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "1234") {
      setIsLoggedIn(true);
    } else {
      alert("Usuario o contraseña incorrectos");
    }
  };

  const shareOnWhatsApp = () => {
    const whatsappUrl = `https://wa.me/?text=He%20seleccionado%20el%20número%20${selectedNumber}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      {isLoggedIn ? (
        <div>
          <h1>¡Hola {username}!</h1>
          <h2>Selecciona un número del 1 al 10:</h2>
          <select
            value={selectedNumber || ""}
            onChange={(e) => setSelectedNumber(e.target.value)}
            style={{ padding: "5px", fontSize: "16px", marginBottom: "10px" }}
          >
            <option value="" disabled>
              Elige un número
            </option>
            {[...Array(10)].map((_, index) => (
              <option key={index + 1} value={index + 1}>
                {index + 1}
              </option>
            ))}
          </select>
          <br />
          <button
            onClick={shareOnWhatsApp}
            disabled={!selectedNumber}
            style={{
              backgroundColor: "#25D366",
              color: "white",
              border: "none",
              padding: "10px 20px",
              fontSize: "16px",
              cursor: selectedNumber ? "pointer" : "not-allowed",
              marginTop: "10px",
            }}
          >
            Compartir en WhatsApp
          </button>
        </div>
      ) : (
        <form onSubmit={handleLogin}>
          <h2>Inicia Sesión</h2>
          <input
            type="text"
            placeholder="Usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ margin: "5px", padding: "5px" }}
          />
          <br />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
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
