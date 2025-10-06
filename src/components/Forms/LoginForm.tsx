import { useState } from "react";
import { supabase } from "../../services/supabaseClient";  // ajuste o path se necessário

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setErrorMsg(error.message);
    } else {
      // Redirecionar ou fazer algo após o login com sucesso
      alert("Login bem-sucedido!");
    }

    setLoading(false);
  };

  return (
    <section className="w-[80vw] lg:w-[40vw] mx-auto mt-5 p-6 text-gray-50 dark:text-gray-900">
      <form onSubmit={handleLogin} className="container flex flex-col mx-auto space-y-12">
        <fieldset className="flex flex-col items-center justify-center gap-4 p-6 rounded-md shadow-sm bg-gray-100">
          <div className="space-y-2">
            <p className="font-medium text-center">Informações pessoais</p>
            <p className="text-xs">Preencha as informações de login, por favor.</p>
          </div>

          <label htmlFor="email" className="text-sm">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-[80%] rounded-md focus:ring hover:scale-105 active:scale-95 focus:ring-opacity-75 text-gray-900 focus:ring-green-400 border-gray-700 border-2 transition-all"
          />

          <label htmlFor="password" className="text-sm">Senha</label>
          <input
            id="password"
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-[80%] rounded-md focus:ring hover:scale-105 active:scale-95 focus:ring-opacity-75 text-gray-900 focus:ring-green-400 border-gray-700 border-2 transition-all"
          />

          {errorMsg && <p className="text-red-600 text-sm">{errorMsg}</p>}

          <a href="#" className="text-center text-xs text-gray-600 hover:text-green-400 transition-colors cursor-pointer">Esqueci minha senha</a>
          <a href="/register" className="text-center text-xs text-gray-600 hover:text-green-400 transition-colors cursor-pointer">Não tem conta? Cadastre-se aqui!</a>

          <button
            type="submit"
            disabled={loading}
            className="px-6 py-2 font-semibold rounded-full bg-green-400 text-black active:scale-90 cursor-pointer hover:scale-110 transition-all disabled:opacity-50"
          >
            {loading ? "Entrando..." : "Entrar"}
          </button>
        </fieldset>
      </form>
    </section>
  );
}
