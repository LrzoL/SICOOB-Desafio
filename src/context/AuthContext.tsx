import { useState } from "react";
import { supabase } from "../services/supabaseClient";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleLogin = async () => {
    setErrorMsg("");
    const { user, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setErrorMsg(error.message);
      return;
    }

    if (user) {
      // Pode redirecionar para a dashboard ou onde desejar
      console.log("Usuário logado:", user);
    }
  };

  return (
    <div className="login-container">
      <input
        type="email"
        placeholder="Seu email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="input"
      />
      <input
        type="password"
        placeholder="Sua senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="input"
      />
      <button onClick={handleLogin}>Entrar</button>
      {errorMsg && <p className="error">{errorMsg}</p>}
    </div>
  );
}
