import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./TelaLogin.css";
import logo from "../assets/logobemmental.png";
import fundo from "../assets/imagemfundo.png";

function TelaLogin() {
  const [tipoUsuario, setTipoUsuario] = useState("paciente");
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    alert(`Logando como ${tipoUsuario} - Usuário: ${usuario}`);
  };

  const irParaCadastro = () => {
    navigate(
      tipoUsuario === "paciente"
        ? "/cadastro-paciente"
        : "/cadastro-psicologo"
    );
  };

  const handleBoxClick = () => {
    if (!isLoginOpen) setIsLoginOpen(true);
  };

  return (

   <div className="container">
  <img src={fundo} alt="Imagem de Fundo" className="background-image" />
      <header className="header-logo">
        <img src={logo} alt="Logo Bem Mental" className="logo" />
      </header>

      <div
        className={`login-box ${isLoginOpen ? "open" : ""}`}
        onClick={handleBoxClick}
      >
        {!isLoginOpen ? (
          <span style={{ fontWeight: "bold" }}>Área de Login</span>
        ) : (
          <div className="login-form">
            <h2>Login</h2>

            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  value="paciente"
                  checked={tipoUsuario === "paciente"}
                  onChange={() => setTipoUsuario("paciente")}
                />
                Paciente
              </label>
              <label>
                <input
                  type="radio"
                  value="psicologo"
                  checked={tipoUsuario === "psicologo"}
                  onChange={() => setTipoUsuario("psicologo")}
                />
                Psicólogo
              </label>
            </div>

            <form onSubmit={handleLogin} className="form">
              <input
                type="text"
                placeholder={tipoUsuario === "paciente" ? "CPF" : "CRP"}
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                required
              />
              <button type="submit">Entrar</button>
            </form>

            <div className="cadastro-link">
              <button onClick={irParaCadastro}>
                Cadastrar como{" "}
                {tipoUsuario === "paciente" ? "Paciente" : "Psicólogo"}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default TelaLogin;

