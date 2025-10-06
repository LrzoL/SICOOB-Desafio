export default function Hero() {
    return (
        <section className="bg-gray-800 dark:bg-gray-100 text-gray-100 dark:text-gray-800 w-screen">
	<div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
		<h1 className="text-4xl font-bold leading-none sm:text-5xl text-[#01793B]">
            Indo além de serviços financeiros
		</h1>
		<p className="px-8 mt-8 mb-12 text-lg">Bem-vindo ao Sicoob Nexus, sua plataforma de educação financeira.</p>
		<div className="flex justify-center gap-10 items-center">
			<a href="/login" className="px-6 py-2 font-semibold rounded-full bg-green-400 text-center text-black active:scale-90 cursor-pointer hover:scale-110 transition-all">Entrar</a>
			<button className="px-6 py-2 font-semibold rounded-full bg-green-400 text-center text-black active:scale-90 cursor-pointer hover:scale-110 transition-all">Saber mais</button>
		</div>
	</div>
</section>
    );
}