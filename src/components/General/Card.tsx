interface CardProps {
	title: string;
	description: string;
	imageUrl: string;
}

export default function Card({ title, description, imageUrl }: CardProps) {
	return (
		<div className="w-72 p-6 rounded-md shadow-md bg-gray-900 dark:bg-gray-50 text-gray-50 dark:text-gray-900">
	<img src={imageUrl} alt="" className="object-cover object-center w-full rounded-md h-72 bg-gray-500 dark:bg-gray-500" />
	<div className="mt-6 mb-2">
		<a href="/" className="text-xl font-semibold tracking-wide">{title}</a>
	</div>
	<p className="text-gray-100 dark:text-gray-800">{description}</p>
</div>
    );
}