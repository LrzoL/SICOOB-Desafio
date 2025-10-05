export default function LoginForm() {
    return (
<section className="w-[80vw] lg:w-[40vw] mx-auto mt-5 p-6 text-gray-50 dark:text-gray-900">
	<form action="" className="container flex flex-col mx-auto space-y-12">
		<fieldset className="flex flex-col items-center justify-center gap-4 p-6 rounded-md shadow-sm bg-gray-100">
			<div className="space-y-2">
				<p className="font-medium text-center">Informações pessoais</p>
				<p className="text-xs">Preencha as informações de login, por favor.</p>
			</div>
			
			<label htmlFor="email" className="text-sm">Email</label>
			<input id="email" type="email" placeholder="Email" className="w-[80%] rounded-md focus:ring hover:scale-105 active:scale-95 focus:ring-opacity-75 text-gray-900 focus:ring-green-400 border-gray-700 border-2 transition-all" />

			<label htmlFor="password" className="text-sm">Senha</label>
			<input id="password" type="password" placeholder="Senha" className="w-[80%] rounded-md focus:ring hover:scale-105 active:scale-95 focus:ring-opacity-75 text-gray-900 focus:ring-green-400 border-gray-700 border-2 transition-all" />

			<a href="" className="text-center text-xs text-gray-600 hover:text-green-400 transition-colors cursor-pointer">Esqueci minha senha</a>
			<a href="" className="text-center text-xs text-gray-600 hover:text-green-400 transition-colors cursor-pointer">Não tem conta? Cadastre-se aqui!</a>

			<button className="px-6 py-2 font-semibold rounded-full bg-green-400 text-black active:scale-90 cursor-pointer hover:scale-110 transition-all">Entrar</button>
		</fieldset>
	</form>
</section>
  );
}