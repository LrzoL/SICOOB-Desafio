export default function Footer() {
    return (
        <footer className="bottom-0 px-4 py-8 bg-gray-800 text-gray-400 dark:text-gray-600 w-screen z-5">
	<div className="container flex flex-wrap items-center justify-center mx-auto space-y-4 sm:justify-between sm:space-y-0 text-white">
		<div className="flex flex-row pr-3 space-x-4 sm:space-x-8">
            <img src="https://www.sicoobengecred.coop.br/wp-content/uploads/2021/04/logomarca.png" alt="" className="w-auto h-8 sm:h-10" />
			<ul className="flex flex-wrap items-center space-x-4 sm:space-x-8">
				<li>
					<a rel="noopener noreferrer" href="#">Terms of Use</a>
				</li>
				<li>
					<a rel="noopener noreferrer" href="#">Privacy</a>
				</li>
			</ul>
		</div>
		<ul className="flex flex-wrap pl-3 space-x-4 sm:space-x-8">
			<li>
				<a rel="noopener noreferrer" href="#">Instagram</a>
			</li>
			<li>
				<a rel="noopener noreferrer" href="#">Facebook</a>
			</li>
			<li>
				<a rel="noopener noreferrer" href="#">Twitter</a>
			</li>
		</ul>
	</div>
</footer>
    );
}