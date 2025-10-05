import Card from "../General/Card";

export default function Slider() {
    return (
    <div className="relative flex items-center justify-center w-full text-gray-50 dark:text-gray-900">
	<div className="flex items-center justify-start w-full h-full gap-6 py-4 mx-auto overflow-auto lg:gap-8 scroll-smooth">
		<div className="relative flex flex-shrink-0 w-full sm:w-auto">
			<Card title={"Titulo"} description={"Descricao"} imageUrl={""}   />
		</div>
	</div>
</div>
    );
}