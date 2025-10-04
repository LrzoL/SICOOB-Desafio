import Card from "./Card";

export default function Slider() {
    return (
    <div className="relative flex items-center justify-center w-full text-gray-50 dark:text-gray-900">
	<div className="flex items-center justify-start w-full h-full gap-6 py-4 mx-auto overflow-auto lg:gap-8 scroll-smooth">
		<div className="relative flex flex-shrink-0 w-full sm:w-auto">
			<Card title={"Titulo"} description={"Descricao"} imageUrl={""}   />
		</div>
		<div className="relative flex flex-shrink-0 w-full sm:w-auto">
			<img className="object-cover object-center bg-gray-500 dark:bg-gray-500 h-96 aspect-square" src="https://source.unsplash.com/random/240x360/?2" alt="Image 2" />
		</div>
		<div className="relative flex flex-shrink-0 w-full sm:w-auto">
			<img className="object-cover object-center bg-gray-500 dark:bg-gray-500 h-96 aspect-square" src="https://source.unsplash.com/random/240x360/?3" alt="Image 3" />
		</div>
		<div className="relative flex flex-shrink-0 w-full sm:w-auto">
			<img className="object-cover object-center bg-gray-500 dark:bg-gray-500 h-96 aspect-square" src="https://source.unsplash.com/random/240x360/?4" alt="Image 4" />
		</div>
		<div className="relative flex flex-shrink-0 w-full sm:w-auto">
			<img className="object-cover object-center bg-gray-500 dark:bg-gray-500 h-96 aspect-square" src="https://source.unsplash.com/random/240x360/?5" alt="Image 5" />
		</div>
	</div>
</div>
    );
}