export default function Bar() {
  return (
	<div className="z-5 fixed top-17 left-0 w-[100%] flex flex-col h-25 items-center justify-center gap-5 lg:hidden bg-gray-800">
		<div className="flex items-center justify-center gap-5">
			<a rel="noopener noreferrer" href="/yourcourses" className="px-4 -mb-1 border-b-2 dark:border- text-white hover:text-green-400 transition-colors">Seus Cursos</a>
			<a rel="noopener noreferrer" href="/yourrooms" className="px-4 -mb-1 border-b-2 dark:border- text-white hover:text-green-400 transition-colors">Suas Salas</a>
		</div>
			<a href="/login" className="w-30 col-span-2 px-6 py-2 font-semibold rounded-full bg-green-400 text-black active:scale-90 cursor-pointer text-center hover:scale-110 transition-all">Entrar</a>
	</div>
  );
}