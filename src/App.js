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
    const whatsappUrl = `https://wa.me/?text=Te%20quiero%20un%20${selectedNumber}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      {isLoggedIn ? (
        <div>
          <h1>¡Hola {username}!</h1>
          <h2>Selecciona un número para compartir:</h2>
          <div style={{ marginBottom: "15px" }}>
            {[...Array(10)].map((_, index) => (
              <button
                key={index + 1}
                onClick={() => setSelectedNumber(index + 1)}
                style={{
                  backgroundColor:
                    selectedNumber === index + 1 ? "#ff69b4" : "#f0f0f0",
                  color: selectedNumber === index + 1 ? "white" : "black",
                  border: "1px solid #ddd",
                  padding: "10px 15px",
                  margin: "5px",
                  fontSize: "16px",
                  cursor: "pointer",
                  borderRadius: "8px",
                }}
              >
                {index + 1}
              </button>
            ))}
          </div>
          <button
            onClick={shareOnWhatsApp}
            disabled={!selectedNumber}
            style={{
              backgroundColor: "#ff69b4",
              color: "white",
              border: "none",
              padding: "10px 20px",
              fontSize: "16px",
              cursor: selectedNumber ? "pointer" : "not-allowed",
              borderRadius: "10px",
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
