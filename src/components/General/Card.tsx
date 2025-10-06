interface CardProps {
	title: string;
	description: string;
	imageUrl: string;
}

export default function Card({ title, description, imageUrl }: CardProps) {
	return (
		<div>
					<button className="cursor-pointer hover:scale-110 w-72 p-6 rounded-md shadow-md bg-gray-900 dark:bg-gray-50 text-gray-50 dark:text-gray-900 transition-all">
	<img src={imageUrl} alt="" className="object-cover object-center w-full rounded-md h-72 bg-gray-500 dark:bg-gray-500" />
	<div className="mt-6 mb-2">
		<h2 className="text-xl font-semibold tracking-wide">{title}</h2>
	</div>
	<p className="text-gray-100 dark:text-gray-800">{description}</p>
</button>
		</div>
    );
}